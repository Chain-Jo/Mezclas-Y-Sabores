"use client";

import { toast } from "sonner";
import Image from "next/image";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NotebookText } from "lucide-react";
// import { units } from "@/database/schema";



type Props = {
    id: number;
    title: string;
    link: string;
    unitId: number;
    activo: boolean;
    unidad_referenciada: number
    // unitA: boolean;
};

export const RecipeX = ({
    id,
    title,
    link,
    unitId,
    activo,
    unidad_referenciada
    // unitA,
}: Props) => {
    return (
        <>
        {activo === true 
            ?
                // <div className="w-full rounded-xl bg-green-500 p-5 text-white flex items-center justify-between">
                <div className="w-full rounded-xl p-5 text-black flex items-center justify-between">
                
                        <div className="space-y-2.5">
                            <h3 className="text-2xl font-bold">
                                Unidad {unidad_referenciada}
                            </h3>
                            <p className="text-lg">
                                {title}
                            </p>
                        </div>
                        <Link href={link} target="_blank">
                            <Button 
                                size="lg"
                                variant="secondary"
                                // className="hidden xl:flex border-2 border-b-4 active:border-b-2"
                                className="xl:flex border-2 border-b-4 active:border-b-2"
                            >
                                <NotebookText className="mr-2"/>
                                {/* Continue */}
                                Ir al archivo
                            </Button>
                        </Link>
                </div>
            : null
        }
        
        </>
    );

}


