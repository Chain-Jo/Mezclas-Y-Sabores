import Image from "next/image";
import { redirect } from "next/navigation";

import { getTopUsers, getUserProgress } from "@/database/queries";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

const RankingPage = async () => {

    const userProgressData = getUserProgress();

    const rankingData = getTopUsers();

    const [
        userProgress,
        ranking,
    ] = await Promise.all([
        userProgressData,
        rankingData,
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
            <Quests points={userProgress.points}/>

            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image
                        src="/img/ranking.png"
                        alt="Ranking"
                        height={100}
                        width={100}
                    />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                        Ranking
                    </h1>
                    <p className="text-muted-foreground text-center text-lg mb-6">
                        Mira en que posición estás respecto a otros estudiantes.
                    </p>
                    <Separator className="mb-4 h-0.5 rounded-full"/>
                    {ranking.map((userProgress, index) => (
                        <div 
                            key={userProgress.userId}
                            className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50"
                        >
                            <p className="font-bold text-lime-700 mr-4">
                                {index + 1}
                            </p>
                            <Avatar
                                className="border bg-green-500 h-12 w-12 ml-3 mr-6"
                            >
                                <AvatarImage
                                    className="object-cover"
                                    src={userProgress.userImageSrc}
                                />
                            </Avatar>
                            <p className="font-bold text-neutral-800 flex-1">
                                {userProgress.userName}
                            </p>
                            <p className="text-muted-foreground">
                                {userProgress.points} Puntos
                            </p>
                        </div>
                    ))}
                </div>
            </FeedWrapper>
        </div>
    );
};

export default RankingPage;