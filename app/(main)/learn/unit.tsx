import { lessons, units } from "@/database/schema";

import { UnitBanner } from "./unit-baneer";
import { LessonButton } from "./lesson-button";


type Props = {
    id: number;
    orden: number;
    titulo: string;
    descripcion: string;
    activo: boolean
    lessons: (typeof lessons.$inferSelect & {
        completed: boolean;
    })[];
    activeLesson: typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
    } | undefined;
    activeLessonPercentage: number;
    // params: {
    //     lessonId: number;
    // };
};

export const Unit = ({
    id,
    orden,
    titulo,
    descripcion,
    activo,
    lessons,
    activeLesson,
    activeLessonPercentage,
    // params
}: Props) => {
    return (
        <>
            <UnitBanner titulo={titulo} descripcion={descripcion}/>
            {/* <div className="flex items-center flex-col relative"> */}
            <div className="flex items-center flex-col relative">
                {lessons.map((lesson, index) => {
                    const isCurrent = lesson.id === activeLesson?.id;
                    const isLocked = !lesson.completed && !isCurrent;

                    return (
                        <div key={lesson.id}>
                            <LessonButton
                                key={lesson.id}
                                id={lesson.id}
                                index={index}
                                totalCount={lessons.length - 1}
                                current={isCurrent} // TODO: remove hardcoded true
                                locked={isLocked}
                                percentage={activeLessonPercentage}
                                activo = {lesson.activo}
                                prueba = {lesson.prueba}
                            />
                            
                        </div>
                    );
                })}
            </div>
        </>


    );
};