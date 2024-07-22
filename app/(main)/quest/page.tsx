import Image from "next/image";
import { redirect } from "next/navigation";

import { getUserProgress } from "@/database/queries";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Progress } from "@/components/ui/progress";
import { Promo } from "@/components/promo";
import { quests } from "@/constants";


const QuestPage = async () => {

    const userProgressData = getUserProgress();

    const [
        userProgress,
    ] = await Promise.all([
        userProgressData,
    ]);

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses")
    }

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress 
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                />
                <Promo />

            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image
                        src="/img/diana.png"
                        alt="Retos"
                        height={100}
                        width={100}
                    />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                        Retos
                    </h1>
                    <p className="text-muted-foreground text-center text-lg mb-6">
                        Completa los retos haciendo lecciones y ganando puntos.
                    </p>
                    <ul className="w-full">
                        {quests.map((quest) => {
                            const progress = (userProgress.points / quest.value) * 100;

                            return (
                                <div
                                    className="flex items-center w-full p-4 gap-x-4 border-t-2"
                                    key={quest.titulo}
                                >
                                    <Image
                                        src="/img/estrella.png"
                                        alt="Puntos"
                                        width={60}
                                        height={60}
                                    />
                                    <div className="flex flex-col gap-y-2 w-full">
                                        <p className="text-neutral-700 text-xl font-bold">
                                            {quest.titulo}
                                        </p>
                                        <Progress
                                            value={progress}
                                            className="h-3"
                                        />
                                    </div>
                                </div>
                            );
                        })};
                    </ul>
                </div>
            </FeedWrapper>
        </div>
    );
};

export default QuestPage;