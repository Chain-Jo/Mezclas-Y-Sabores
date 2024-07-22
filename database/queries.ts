import { cache } from "react"
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";

import database from "./drizzle";
// import { challengeProgress, lessons, userProgress, challenges, units, recipes } from './schema';
import { 
    challengeProgress,
    courses, 
    lessons,
    // recipes,
    recipesX,
    units, 
    userProgress,
} from "@/database/schema";

export const getUserProgress = cache(async() => {
    const { userId } = await auth();
    
    if (!userId) {
        return null
    }

    const data = await database.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId),
        with: {
            activeCourse: true,
        }
    });

    return data;
});

export const getUnits = cache(async () => {
    const { userId } = await auth();
    const userProgress = await getUserProgress();

    if (!userId || !userProgress?.activeCourseId) {
        return [];
    }
    // Listo: 9:34
    const data = await database.query.units.findMany({
        orderBy: (units, { asc }) => [asc(units.orden)],
        where: eq(units.courseId, userProgress.activeCourseId),
        with: {
            recipesX: true,
            lessons: {
                orderBy: (lessons, { asc }) => [asc(lessons.orden)],
                with: {
                    challenges: {
                        orderBy: (challenges, { asc }) => [asc(challenges.orden)],
                        with: {
                            challengeProgress: {
                                where: eq(
                                    challengeProgress.userId,
                                    userId,
                                ),
                            },
                        },
                    },
                },
            },

        },
    });
    
    const normalizedData = data.map((unit) => {
        const lessonsWithCompletedStatus = unit.lessons.map((lesson) => {
            if (
                lesson.challenges.length === 0
            ) {
                return { ...lesson, completed: false };
            }

            const allCompletedChallenges = lesson.challenges.every((reto) => {
                return reto.challengeProgress 
                    && reto.challengeProgress.length > 0
                    && reto.challengeProgress.every((progress) => progress.completed);
            });

            return { ...lesson, completed: allCompletedChallenges };
        });

        // const noExistRecipe = unit.recipes.map((recipe) => {
        //     if (!recipes) {
        //         return { ...recipe};
        //     }


        //     return { ...recipe};
        // });

        // return { ...unit, lessons: lessonsWithCompletedStatus, recipes };
        return { ...unit, lessons: lessonsWithCompletedStatus};
    });
    
    return normalizedData;
});

export const getCourses = cache( async () => {
    const data = await database.query.courses.findMany();

    return data;
} );

export const getCourseById = cache( async ( courseId: number ) => {
    const data = await database.query.courses.findFirst({
        where: eq(courses.id, courseId),
        with: {
            units: {
                orderBy: (units, { asc }) => [asc(units.orden)],
                with: {
                    lessons: {
                        orderBy: (lessons, { asc }) => [asc(lessons.orden)],
                    }
                }
            }
        }
    });

    return data;
});

export const getCourseProgress = cache(async () => {
    const { userId } = await auth();
    const userProgress = await getUserProgress();

    if (!userId || !userProgress?.activeCourseId) {
        return null;
    }

    const unitsInActiveCourse = await database.query.units.findMany({
        orderBy: (units, { asc }) => [asc(units.orden)],
        where: eq(units.courseId, userProgress.activeCourseId),
        with: {
            lessons: {
                orderBy: (lessons, { asc }) => [asc(lessons.orden)],
                with: {
                    unit: true,
                    challenges: {
                        with: {
                            challengeProgress: {
                                where: eq(challengeProgress.userId, userId),
                            },
                        },
                    },
                },
            },
        },
    });


    const firstUncompletedLesson = unitsInActiveCourse
        .flatMap((unit) => unit.lessons)
        .find((lesson) => {
            return lesson.challenges.some((reto) => {
                return !reto.challengeProgress 
                    || reto.challengeProgress.length === 0 
                    || reto.challengeProgress.some((progress) => progress.completed === false);
            });
        });

    return {
        activeLesson: firstUncompletedLesson,
        activeLessonId: firstUncompletedLesson?.id,
    };
});






export const getLesson = cache(async (id?: number) => {
    const { userId } = await auth();

    if (!userId) {
        return null;
    }

    const courseProgress = await getCourseProgress();

    const lessonId = id || courseProgress?.activeLessonId;

    if (!lessonId) {
        return null;
    };

    const data = await database.query.lessons.findFirst({
        where: eq(lessons.id, lessonId),
        with: {
            challenges: {
                orderBy: (challenges, { asc }) => [asc(challenges.orden)],
                with: {
                    challengeOptions: true,
                    challengeProgress: {
                        where: eq(challengeProgress.userId, userId)
                    },
                },
            },
        },
        
    });

    if (!data || !data.challenges) {
        return null;
    }

    const normalizedChallenges = data.challenges.map((reto) => {

        const completed = 
            reto.challengeProgress 
            && reto.challengeProgress.length > 0
            && reto.challengeProgress.every((progress) => progress.completed);

        return { ...reto, completed }
    });

    return { ...data, challenges: normalizedChallenges };
});









// Recetas

// export const getRecipe = cache(async (id?: number) => {
//     const { userId } = await auth();

//     if (!userId) {
//         return null;
//     }

//     const courseProgress = await getCourseProgress();

//     const recipeId = id || courseProgress?.activeLessonId;

//     if (!recipeId) {
//         return null;
//     };

//     const data = await database.query.recipes.findFirst({
//         // where: eq(recipes.id, recipeId),
//         // with: {
//         //     challenges: {
//         //         orderBy: (challenges, { asc }) => [asc(challenges.orden)],
//         //         with: {
//         //             challengeOptions: true,
//         //             challengeProgress: {
//         //                 where: eq(challengeProgress.userId, userId)
//         //             },
//         //         },
//         //     },
//         // },
//     });

//     if (!data) {
//     // if (!data || !data.challenges) {
//         return null;
//     }

//     // const normalizedChallenges = data.challenges.map((reto) => {

//     //     const completed = 
//     //         reto.challengeProgress 
//     //         && reto.challengeProgress.length > 0
//     //         && reto.challengeProgress.every((progress) => progress.completed);

//     //     return { ...reto, completed }
//     // });

//     // return { ...data, challenges: normalizedChallenges };
//     return { ...data };
// });


export const getRecipeX = cache(async (id?: number) => {
    const { userId } = await auth();

    if (!userId) {
        return null;
    }

    const courseProgress = await getCourseProgress();

    const recipeId = id || courseProgress?.activeLessonId;

    if (!recipeId) {
        return null;
    };

    const data = await database.query.recipesX.findFirst({
        
    });

    if (!data) {
        return null;
    }
    return { ...data };
});

export const getTopRecipesX = cache(async () => {
    const { userId } = await auth();

    if (!userId) {
        return [];
    }

    const data = await database.query.recipesX.findMany({
        orderBy: (id, { asc }) => [asc(id.id)],
        limit: 60,
        columns: {
            id: true,
            titulo: true,
            link: true,
            unitId: true,
            activo: true,
            unidad_referenciada: true,
        },
    });

    return data;
});

















export const getLessonPercentage = cache(async () => {
    const courseProgress = await getCourseProgress();

    if (!courseProgress?.activeLessonId) {
        return 0; 
    }

    const lesson = await getLesson(courseProgress.activeLessonId);

    if (!lesson) {
        return 0;
    }

    const completedChallenges = lesson.challenges
        .filter((reto) => reto.completed);
    const percentage = Math.round(
        (completedChallenges.length / lesson.challenges.length) * 100,
    );

    return percentage;

})

export const getTopUsers = cache(async () => {
    const { userId } = await auth();

    if (!userId) {
        return [];
    }

    const data = await database.query.userProgress.findMany({
        orderBy: (userProgress, { desc }) => [desc(userProgress.points)],
        limit: 40,
        columns: {
            userId: true,
            userName: true,
            userImageSrc: true,
            points: true,
        },
    });

    return data;
});