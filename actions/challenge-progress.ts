"use server";

import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import database from "@/database/drizzle";
import { getUserProgress } from "@/database/queries";
import { challengeProgress, challenges, userProgress } from "@/database/schema";
// import { UserProgress } from '../components/user-progress';

const nextLink = process.env.NEXT_PUBLIC_URL!;
export const upsertChallengeProgress = async (challengeId: number) => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Sin autorización");
    }

    const currentUserProgress = await getUserProgress();

    if (!currentUserProgress) {
        throw new Error("No se encontró el progreso del usuario");
    }

    const reto = await database.query.challenges.findFirst({
        where: eq(challenges.id, challengeId)
    });

    if (!reto) {
        throw new Error("No se encontró la pregunta");
    }

    const lessonId = reto.lessonId;

    const existingChallengeProgress = await database.query.challengeProgress.findFirst({
        where: and(
            eq(challengeProgress.userId, userId),
            eq(challengeProgress.challengeId, challengeId),
        ),
    });

    const isPrectice = !!existingChallengeProgress;

    // TODO: aquí se ve si el usuario ha hecho la lección antes 0653
    if (currentUserProgress.hearts === 0 && !isPrectice) {
        return { error: "corazones" };
    }

    if (isPrectice) {
        await database.update(challengeProgress).set({
            completed: true,
        })
            .where(
                eq(challengeProgress.id, existingChallengeProgress.id)
            );


        await database.update(userProgress).set({
            hearts: Math.min(currentUserProgress.hearts + 1, 5),
            points: currentUserProgress.points + 10,
        }).where(eq(userProgress.userId, userId));

        revalidatePath("/learn");
        revalidatePath("/lesson");
        revalidatePath("/quests");
        revalidatePath("/leaderboard");
        revalidatePath(`/lesson/${lessonId}`);
        return;
    }

    await database.insert(challengeProgress).values({
        challengeId,
        userId,
        completed: true,
    });

    const response = await fetch(`${nextLink}/api/actions`, {
        method: "GET",
    })

    const data = await response.json()

    const responseUser = await fetch(`${nextLink}/api/users/?userId=${userId}`, {
        method: "GET",
    })

    const dataUser = await responseUser.json()

    const responseChallenge = await fetch(`${nextLink}/api/challenges/${challengeId}`, {
        method: "GET",
    })

    const dataChallenge = await responseChallenge.json()

    // Verifica si el usuario ya termino su leccion
    if (lessonId > 1) {
        const beforeResponseChallenge = await fetch(`${nextLink}/api/challenges/${challengeId - 1}`, {
            method: "GET",
        })

        const beforeDataChallenge = await beforeResponseChallenge.json();

        if (lessonId > beforeDataChallenge.lessonId) {

            const beforeLesson = await fetch(`${nextLink}/api/lessons/${lessonId - 1}`, {
                method: "GET",
            })

            const beforeLessonData = await beforeLesson.json();

            await fetch(`${nextLink}/api/actions`, {
                method: "POST",
                body: JSON.stringify({
                    "actionId": data.length + 1,
                    "userName": `${dataUser[0].userName}`,
                    "actionName": `Respondio la pregunta ${dataChallenge.question} correctamente`,
                    "createdAt": (new Date).toLocaleString()
                })
            })


            await fetch(`${nextLink}/api/actions`, {
                method: "POST",
                body: JSON.stringify({
                    "actionId": data.length + 2,
                    "userName": `${dataUser[0].userName}`,
                    "actionName": `Completo la leccion ${beforeLessonData.titulo} correctamente`,
                    "createdAt": (new Date).toLocaleString()
                })
            })

            

            // Verifica si el usuario ya termino la unidad
            const responseLesson = await fetch(`${nextLink}/api/lessons/${lessonId}`, {
                method: "GET",
            })

            const dataLesson = await responseLesson.json()

            if (dataLesson.unitId > 1) {

                if (dataLesson.unitId > beforeLessonData.unitId) {

                    const responseUnit = await fetch(`${nextLink}/api/units/${beforeLessonData.unitId}`, {
                        method: "GET",
                    })
        
                    const dataUnit = await responseUnit.json()


                    await fetch(`${nextLink}/api/actions`, {
                        method: "POST",
                        body: JSON.stringify({
                            "actionId": data.length + 3,
                            "userName": `${dataUser[0].userName}`,
                            "actionName": `Completo la unidad ${dataUnit.titulo} correctamente`,
                            "createdAt": (new Date).toLocaleString()
                        })
                    })
                }
            }

        } else {
            await fetch(`${nextLink}/api/actions`, {
                method: "POST",
                body: JSON.stringify({
                    "actionId": data.length + 1,
                    "userName": `${dataUser[0].userName}`,
                    "actionName": `Respondio la pregunta ${dataChallenge.question} correctamente`,
                    "createdAt": (new Date).toLocaleString()
                })
            })
        }
    } else {
        await fetch(`${nextLink}/api/actions`, {
            method: "POST",
            body: JSON.stringify({
                "actionId": data.length + 1,
                "userName": `${dataUser[0].userName}`,
                "actionName": `Respondio la pregunta ${dataChallenge.question} correctamente`,
                "createdAt": (new Date).toLocaleString()
            })
        })
    }

    // Verifica si el usuario ya termino la unidad


    await database.update(userProgress).set({
        points: currentUserProgress.points + 10,
    }).where(eq(userProgress.userId, userId));

    revalidatePath("/learn");
    revalidatePath("/lesson");
    revalidatePath("/quests");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);
}