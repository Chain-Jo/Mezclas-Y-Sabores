"use client";

import { toast } from "sonner";
import Image from "next/image";
import { useTransition } from "react";

import { POINTS_TO_REFILL } from "@/constants";
import { Button } from "@/components/ui/button";
import { refillHearts } from "@/actions/user-progress";

type Props = {
    hearts: number;
    points: number;
}

export const Items = ({
    hearts, 
    points,
}: Props) => {

    const [pending, startTransition] = useTransition()

    const onRefillHearts = () => {
        if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
            return;
        }

        startTransition(() => {
            refillHearts()
                .catch(() => toast.error("Algo salió mal"))
        });
    }

    return (
        <ul className="w-full">
            <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                <Image
                    src="/img/corazon.png"
                    alt="Heart"
                    height={60}
                    width={60}
                />
                <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Reponer corazones
                    </p>
                </div>
                    <Button
                        onClick={onRefillHearts}
                        disabled={
                            pending
                            || hearts === 5 
                            || points < POINTS_TO_REFILL
                        }
                    >
                        {hearts === 5
                            ? "full"
                            : (
                                <div className="flex items-center">
                                    <Image
                                        src="/img/estrella.png"
                                        alt="Points"
                                        height={20}
                                        width={20}
                                    />
                                    <p>
                                        {/* 40 */}
                                        {POINTS_TO_REFILL}
                                    </p>
                                </div>
                            )
                        }
                    </Button>
            </div>
        </ul>
    )
}