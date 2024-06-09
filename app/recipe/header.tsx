// "use client"

import Image from "next/image";
import { InfinityIcon, X } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/use-exit-modal";

type Props = {
    title: string;
};

export const Header = ({
    title
}: Props) => {

    const { open } = useExitModal();

    return (
        <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full pb-4 font-bold">
            <X
                onClick={ open } 
                className="text-slate-500 hover:opacity-75 transition cursor-pointer"
            />
            <div className="w-full flex flex-col items-center lg: text-4xl">
                    {title}
                    
            </div>
                    <Image
                        src="/img/receta.png"
                        alt="Ranking"
                        height={40}
                        width={40}
                    />
        </header>
    )
}