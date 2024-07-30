import { redirect } from "next/navigation";

import { getLesson, getUserProgress } from "@/database/queries";

import { Quiz } from "./quiz";
import { Test } from "./test";

const LessonPage = async () => {

    const lessonData = getLesson();
    const userProgressData = getUserProgress();

    const [
        lesson,
        userProgress,
    ] = await Promise.all([
        lessonData,
        userProgressData
    ]);

    if (!lesson || !userProgress) {
        // if (!lesson || !userProgress) {
        redirect("/learn")
    }

    const initialPercentage = lesson.challenges
        .filter((reto) => reto.completed)
        .length / lesson.challenges.length * 100;


    if (lesson.prueba === false) {
        return (
            <>
                {lesson.activo === true
                    ?
                    <Quiz
                        initialLessonId={lesson.id}
                        isTest={lesson.prueba}
                        initialLessonChallenges={lesson.challenges}
                        initialHearts={userProgress.hearts}
                        initialPercentage={initialPercentage}
                        userName={userProgress.userName}
                    />

                    : null
                }
            </>
        );


    } else {
        return (
            <>
                {lesson.activo === true
                    ?
                    <Test
                        initialLessonId={lesson.id}
                        isTest={lesson.prueba}
                        initialLessonChallenges={lesson.challenges}
                        initialHearts={1}
                        initialPercentage={initialPercentage}
                    />

                    : null
                }
            </>
        );

    }
}

export default LessonPage;