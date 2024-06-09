"use client";

import { recipes, userProgress } from "@/database/schema";

import { Header } from "./header";
import { Footer } from "./footer";
import Image from "next/image";

type Props = {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
};

export const Recipe = ({
    id,
    title,
    description,
    imageSrc,
}: Props) => {



    return (
        <div>
            <Header
                title="Receta"
            />
            <div className="flex-1">
                <div className="h-full flex items-center justify-center">
                    <div className="lg:min-h-[350px] lg:w-[1000px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
                        <h1 className="text-3xl lg:text-4xl text-start lg:text-start font-bold text-neutral-700 items-center">
                            {/* {title} */}
                            {/* <Body
                                id={recipes.id}
                            >
                                
                            </Body> */}
                            {title}
                        </h1>
                        <div className="w-full flex flex-col items-center rounded-2xl">
                            <Image
                                src={imageSrc}
                                alt={title}
                                height={300}
                                width={300}
                            />
                        </div>
                        <div className="text-justify mb-6">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
            <Footer

            />
        </div>
    )
}