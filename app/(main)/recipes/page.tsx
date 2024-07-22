import Image from "next/image";
import { redirect } from "next/navigation";

// import { getUserProgress } from "@/database/queries";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";

import { RecipeX } from "./recipeX";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

import { getRecipeX, getTopRecipesX, getUnits, getUserProgress } from "@/database/queries";
import { Separator } from "@/components/ui/separator";


const RecipePage = async () => {



    const userProgressData = getUserProgress();
    const recipeData = getRecipeX();
    const listRecipeData = getTopRecipesX();
    const unitData = getUnits();


    const [
        userProgress,
        recipeX,
        listRecipeX,
        unit
    ] = await Promise.all([
        userProgressData,
        recipeData,
        listRecipeData,
        unitData
    ]);

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses")
    }

    if (!recipeX || !userProgress) {
    // if (!lesson || !userProgress) {
        redirect("/learn")
    }

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress 
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                />
                <Promo/>
                <Quests points={userProgress.points}/>
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image
                        src="/img/receta.png"
                        alt="Shop"
                        height={100}
                        width={100}
                    />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                        Recetas
                    </h1>
                    <p className="text-muted-foreground text-center text-lg mb-6">
                        Desrcarga y lee las recetas del curso.
                    </p>





                    <Separator className="mb-4 h-0.5 rounded-full"/>
                    {listRecipeX.map((recipeX, index) => (
                        <div 
                        key={recipeX.id}
                        className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50"
                    >

                        <RecipeX
                            id={recipeX.id}
                            titulo={recipeX.titulo}
                            link={recipeX.link}
                            unitId={recipeX.unitId}
                            activo= {recipeX.activo}
                            unidad_referenciada={recipeX.unidad_referenciada}
                        />
                    </div>

                    ))}



                </div>
            </FeedWrapper>
        </div>
    );
};

export default RecipePage;