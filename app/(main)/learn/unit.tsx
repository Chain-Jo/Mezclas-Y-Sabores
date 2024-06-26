import { lessons, units } from "@/database/schema";

import { UnitBanner } from "./unit-baneer";
import { LessonButton } from "./lesson-button";


type Props = {
    id: number;
    order: number;
    title: string;
    description: string;
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
    order,
    title,
    description,
    activo,
    lessons,
    activeLesson,
    activeLessonPercentage,
    // params
}: Props) => {
    return (
        <>
            <UnitBanner title={title} description={description}/>
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
                            />
                            
                        </div>
                    );
                })}
            </div>
        </>


    );
};