import Image from "next/image";
import { useCallback } from "react";
import { useAudio, useKey } from "react-use";

import { cn } from "@/lib/utils";
import { challenges } from "@/database/schema";

type Props = {
    id: number;
    enlace_imagen: string | null;
    // audioSrc: string | null;
    text: string;
    shortcut: string;
    selected?: boolean;
    onClick: () => void;
    disabled?: boolean;
    status?: "correct" | "wrong" | "none";
    tipo: typeof challenges.$inferSelect["tipo"];
    activo: boolean;
}

export const Card = ({
    id,
    enlace_imagen,
    // audioSrc,
    text,
    shortcut,
    selected,
    onClick,
    disabled,
    status,
    tipo,
    activo,
}: Props) => {

    // const [audio, _, controls] = useAudio({ src: audioSrc || "" })

    const handleClick = useCallback(() => {
        if (disabled) return;

        // controls.play();
        onClick();
    }, [disabled, onClick]);
    // }, [disabled, onClick, controls]);

    useKey(shortcut, handleClick, {}, [handleClick]);

    return (
        <>
        {activo === true
            ?
                <div
                    onClick={handleClick}
                    className={cn(
                        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2 justify-center items-center",
                        selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
                        selected && status === "correct" 
                            && "border-green-300 bg-green-100 hover:bg-green-100",
                        selected && status === "wrong" 
                            && "border-rose-300 bg-rose-100 hover:bg-rose-100",
                        disabled && "pointer-events-none hover:bg-white",
                        tipo === "COMPLETAR" && "lg:p-3 w-full"
                    )}
                >
                    {/* {audio} */}
                    {enlace_imagen && (
                    // TODO: no se centran las imagenes o se ven mal 6:08:20 hay que ponerlos como svg
                    // también cambié max h el de lg era de 160 y el normal 100
                        <div
                            className="relative aspect-square mb-4 max-h-[300px] lg:max-h-[400px] items-center justify-center"
                            // Propiedades quitadas: w-full
                        >
                            <Image
                                className="rounded-2xl items-center justify-center flex"
                                src={enlace_imagen}
                                fill
                                alt={text}
                                // width={80}
                                // height={80}
                            />
                        </div>
                    )}
                    <div className={cn(
                        "flex items-center justify-between text-center",
                        tipo === "COMPLETAR" && "flex-row-reverse",
                    )}>
                        {tipo === "COMPLETAR" && <div/>}
                        <p className={cn(
                            "text-neutral-600 text-sm lg:text-base text-center",
                            selected && "text-sky-500",
                            selected && status === "correct" 
                                && "text-green-500",
                            selected && status === "wrong" 
                                && "text-rose-500",
                        )}>
                        {text}  
                        </p>

                    </div>
                    {/* TODO: ver como arreglo la apariencia de shortcut */}
                        {/* <div className={cn(
                            "lg:w-full lg:h-[20px] w-full h-[20px] border-2 flex items-center justify-center rounded-lg text-neutral-400 lg:text-[15px] text-xs font-semibold",
                            selected && "border-sky-300 text-sky-500",
                            selected && status === "correct" 
                                && "border-green-500 text-green-500",
                            selected && status === "wrong" 
                                && "border-rose-500 text-rose-500",
                        )}>
                        
                        {shortcut}
                        
                        </div> */}
                </div>
            : null
        }
        
        </>
    )
}