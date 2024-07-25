"use client";

import Link from "next/link";
import { Check, Crown, Star } from "lucide-react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';

import 'react-circular-progressbar/dist/styles.css';
import { useTestModal } from "@/store/use-test-modal";

type Props = {
    id: number;
    index: number;
    totalCount: number;
    locked?: boolean;
    current?: boolean;
    percentage: number;
    activo: boolean;
    prueba: boolean;
};

export const LessonButton = ({
    id,
    index,
    totalCount,
    locked,
    current,
    percentage,
    activo,
    prueba
}: Props) => {

    // Para las posiciones de las lecciones
    // TODO: acomodar esto
    const cycleLength = 2;
    const cycleIndex = index % cycleLength;

    let indentationLevel;

    if (cycleIndex <= 2) {
        indentationLevel = cycleIndex;
    } else if (cycleIndex <= 4) {
        indentationLevel = 4 - cycleIndex;
    } else if (cycleIndex <= 6) {
        indentationLevel = 4 - cycleIndex;
    } else {
        indentationLevel = cycleIndex - 8;
    }

    const rightPosition = indentationLevel * 40;

    const isFirst = index === 0;
    const isLast = index === totalCount;
    const isCompleted = !current && !locked;

    const Icon = isCompleted ? Check : isLast ? Crown : Star;

    const href = isCompleted ? `/lesson/${id}` : "/lesson";

    const { open: openTestModal } = useTestModal();


    if (prueba === false) {
        return (
            <>
                {activo === true
                    ?
                        <Link 
                        // TODO: acomodar el icono de iniciar 0428
                            href={href} 
                            aria-disabled={locked} 
                            style={{ pointerEvents: locked ? "none" : "auto" }}
                        >
                            <div
                                className="relative"
                                style={{
                                    // right: `${rightPosition}px`,
                                    marginTop: isFirst && !isCompleted ? 60 : 24,
                                }}
                            >
                                {current ? (
                                    <div className="h-[102px] w-[102px] relative">
                                        {/* Antes la propiedad de left eran 2.5 */}
                                        <div className="absolute -top-6 left-1 px-3 py-2.5 border-2 font-bold uppercase text-green-500 bg-white rounded-xl animate-bounce tracking-wide z-10">
                                            Iniciar
                                        <div
                                            className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2"
                                        />
                                        </div>
    
                                        <CircularProgressbarWithChildren
                                            value={Number.isNaN(percentage) ? 0 : percentage}
                                            styles={{
                                                path: {
                                                    stroke: "#5ade80",
                                                },
                                                trail: {
                                                    stroke: "#e5e7eb"
                                                }
                                            }}
                                        >
                                            <Button
                                                size="rounded"
                                                variant={locked ? "locked" : "secondary"}
                                                // Le cambié los px de 70 a 100
                                                className="h-[70px] w-[70px] border-b-8"
                                            >
                                                <Icon
                                                    className={cn(
                                                        "h-10 w-10",
                                                        locked
                                                        ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                                                        : "fill-primary-foreground text-primary-foreground",
                                                        isCompleted && "fill-none stroke-[4]"
                                                    )}
                                                />
                                            </Button>
                                        </CircularProgressbarWithChildren>
    
                                    </div>
                                ) : (
                                    <Button
                                        size="rounded"
                                        variant={locked ? "locked" : "secondary"}
                                        className="h-[70px] w-[70px] border-b-8"
                                    >
                                        <Icon
                                            className={cn(
                                                "h-10 w-10",
                                                locked
                                                ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                                                : "fill-primary-foreground text-primary-foreground",
                                                isCompleted && "fill-none stroke-[4]"
                                            )}
                                        />
                                    </Button>
                        )}
                            </div>
                        </Link>
    
                    : null
                
                }
            </>
        );
    } else {

        return (
            
            <>
                {activo === true
                    ?
                        <Link 
                        // TODO: acomodar el icono de iniciar 0428
                            href={href} 
                            aria-disabled={locked} 
                            style={{ pointerEvents: locked ? "none" : "auto" }}
                        >
                            <div
                                className="relative"
                                style={{
                                    // right: `${rightPosition}px`,
                                    marginTop: isFirst && !isCompleted ? 60 : 24,
                                }}
                            >
                                {current ? (
                                    <div className="h-[102px] w-[102px] relative">
                                        {/* Antes la propiedad de left eran 2.5 */}
                                        <div className="absolute -top-6 left-1 px-3 py-2.5 border-2 font-bold uppercase text-green-500 bg-white rounded-xl animate-bounce tracking-wide z-10">
                                            Iniciar
                                        <div
                                            className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2"
                                        />
                                        </div>
    
                                        <CircularProgressbarWithChildren
                                            value={Number.isNaN(percentage) ? 0 : percentage}
                                            styles={{
                                                path: {
                                                    stroke: "#5ade80",
                                                },
                                                trail: {
                                                    stroke: "#e5e7eb"
                                                }
                                            }}
                                        >
                                            <Button
                                                size="rounded"
                                                variant={locked ? "locked" : "secondary"}
                                                // Le cambié los px de 70 a 100
                                                className="h-[70px] w-[70px] border-b-8"
                                                onClick = {openTestModal}
                                            >
                                                <Icon
                                                    className={cn(
                                                        "h-10 w-10",
                                                        locked
                                                        ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                                                        : "fill-primary-foreground text-primary-foreground",
                                                        isCompleted && "fill-none stroke-[4]"
                                                    )}
                                                />
                                            </Button>
                                        </CircularProgressbarWithChildren>
    
                                    </div>
                                ) : (
                                    <Button
                                        size="rounded"
                                        variant={locked ? "locked" : "secondary"}
                                        className="h-[70px] w-[70px] border-b-8"
                                    >
                                        <Icon
                                            className={cn(
                                                "h-10 w-10",
                                                locked
                                                ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                                                : "fill-primary-foreground text-primary-foreground",
                                                isCompleted && "fill-none stroke-[4]"
                                            )}
                                        />
                                    </Button>
                        )}
                            </div>
                            {/* <div className="pt-2 justify-center">

                            <Button
                                                size="sm"
                                                variant={locked ? "locked" : "secondary"}
                                                // Le cambié los px de 70 a 100
                                                className="h-[70px] w-[70px] border-b-8"
                                                onClick = {openTestModal}
                            >
                            Info
                            </Button>
                            </div> */}
                        </Link>
    
                    : null
                
                }
            </>
        );
    }
    
};