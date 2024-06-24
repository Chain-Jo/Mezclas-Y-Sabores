import { redirect } from "next/navigation";

import { getRecipe, getUserProgress } from "@/database/queries";

import { Recipe } from "../recipe";

type Props = {
    // params: {
    //     recipeId: number
    //     // title: string;
    // };
    id: number;
    title: string;
};

const RecipeIdPage = async({
    // params,
    id,
    title,
}: Props) => {


    // const recipeData = getRecipe(params.recipeId);
    const recipeData = getRecipe();
    const userProgressData = getUserProgress();

    const [
        recipe,
        userProgress,
    ] = await Promise.all([
        recipeData,
        userProgressData
    ]);

    if (!recipe || !userProgress) {
    // if (!lesson || !userProgress) {
        redirect("/learn")
    }


    return ( 
        <Recipe 
            id={recipe.id}
            title={recipe.title}   
            imageSrc={recipe.imageSrc}                     
            description={recipe.description}
        />
     );
}
 
export default RecipeIdPage;