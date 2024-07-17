import Image from "next/image";
import { redirect } from "next/navigation";

// import { getUserProgress } from "@/database/queries";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";

import { Logs } from "./logs";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

import { getRecipeX, getTopRecipesX, getUnits, getUserProgress } from "@/database/queries";
import { Separator } from "@/components/ui/separator";
import TableLog from "@/components/admin/tablelog";
import { Button } from "@/components/ui/button";


const LogsPage = async () => {



    const userProgressData = getUserProgress();
    const recipeData = getRecipeX();
    const listRecipeData = getTopRecipesX();
    const unitData = getUnits();


    const [
        userProgress,

    ] = await Promise.all([
        userProgressData,
        recipeData,
        listRecipeData,
        unitData
    ]);



    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            {/* <StickyWrapper> */}
                {/* <UserProgress 
                    // activeCourse={userProgress.activeCourse}
                /> */}

            {/* </StickyWrapper> */}
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image
                        src="/img/receta.png"
                        alt="Shop"
                        height={100}
                        width={100}
                    />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                        Logs del sistema
                    </h1>
                    <p className="text-muted-foreground text-center text-lg mb-6">
                        Historial de acciones realizadas por el administrador.
                    </p>

                    



                    <Separator className="mb-4 h-0.5 rounded-full"/>
                        <div 
                        // className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50"
                        className="flex flex-col items-center w-full p-2 px-4 rounded-xl justify-between"
                    >

                        <TableLog
                            
                        />
                    </div>



                </div>
            </FeedWrapper>
        </div>
    );
};

export default LogsPage;