import { redirect } from "next/navigation";

import {
    getCourseProgress,
    getLesson,
    getLessonPercentage,
    getUnits,
    getUserProgress
} from "@/database/queries";
// import { lessons, units as unitsSchema } from '../../../database/schema';
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { lessons, units as unitsSchema } from '@/database/schema';

import { Header } from "./header";
import { Unit } from "./unit";


const LearnPage = async () => {

    const userProgressData = getUserProgress();
    const coursePorgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage();
    const unitsData = getUnits();
    const lessonData = getLesson();

    const [
        userProgress,
        units,
        lesson,
        courseProgress,
        lessonParcentage
    ] = await Promise.all([
        userProgressData,
        unitsData,
        lessonData,
        coursePorgressData,
        lessonPercentageData,
    ]);

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }

    if (!courseProgress) {
        redirect("/courses")
    }

    return (
        // <div className="flex flex-row-reverse gap-[48px] px-6 text-letrasBlancas">
        <div className="flex flex-row-reverse gap-[48px] px-6 text-neutral-500">
            {/* <div className="flex flex-row-reverse gap-[48px] px-6 text-letrasBlancas"> */}
            <StickyWrapper>
                <UserProgress
                    // activeCourse={{ titulo: "Panadería", enlace_imagen: "/img/un-pan.png" }}
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                />
                {/* Aqui se puede añadir un componente 0950 */}
                <Promo />
                <Quests points={userProgress.points} />
            </StickyWrapper>
            <FeedWrapper>
                <Header titulo={userProgress.activeCourse.titulo} />
                {units.map((unit) => (
                    <>
                        {unit.activo === true
                            ?
                            <div key={unit.id} className="mb-10">
                                <Unit
                                    id={unit.id}
                                    orden={unit.orden}
                                    descripcion={unit.descripcion}
                                    titulo={unit.titulo}
                                    lessons={unit.lessons}
                                    activo={unit.activo}
                                    activeLesson={courseProgress?.activeLesson as typeof lessons
                                        .$inferSelect & {
                                            unit: typeof unitsSchema.$inferSelect;
                                        } | undefined}
                                    activeLessonPercentage={lessonParcentage}
                                // params= {lesson}
                                />
                                {/* {JSON.stringify(unit)} */}
                            </div>
                            : null
                        }

                    </>
                ))}
            </FeedWrapper>
        </div>
    )
}


export default LearnPage;