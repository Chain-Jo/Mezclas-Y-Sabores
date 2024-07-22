import Image from "next/image";

import { cn } from "@/lib/utils";

type Props = {
    value: number;
    variant: "points" | "hearts";
};

export const ResultCard = ({ value, variant }: Props) => {
    
    const enlace_imagen = variant === "hearts" ? "/img/corazon.png" : "/img/estrella.png";

    return (
        <div className={cn(
            "rounded-2xl border-2 w-full",
            variant === "points" && "bg-orange-400 border-orange-400",
            variant === "hearts" && "bg-rose-500 border-rose-500",
        )}>
            <div className={cn(
                "p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
                variant === "hearts" && "bg-rose-500",
                variant === "points" && "bg-orange-400",
            )}>
                {variant === "hearts" ? "Intentos restantes" : "Puntos totales"}
            </div>
            <div className={cn(
                "rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-2xl",
                variant === "points" && "text-orange-400",
                variant === "hearts" && "text-rose-500",
            )}>
                <Image
                    alt="Icon"
                    src={enlace_imagen}
                    height={25}
                    width={25}
                    className="mr-1.5"
                />
                {value}
            </div>
        </div>
    )
}