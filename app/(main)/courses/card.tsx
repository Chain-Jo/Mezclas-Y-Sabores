import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
    titulo: string;
    id: number;
    enlace_imagen: string;
    onClick: (id: number) => void;
    disabled?: boolean;
    active?: boolean;
    activo: boolean;
};


export const Card = ( {
    titulo,
    id,
    enlace_imagen,
    disabled,
    onClick,
    active,
    activo
}: Props ) => {
    return (
        <>
        {activo === true
            ?
                <div 
                onClick = {() => onClick(id)}
                className = {cn(
                    "h-full border-2 rounded-xl border-b-4 hover:bg-blue-5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[218px] min-w-[200px]",
                    disabled && "pointer-events-none opacity-50"
                )}
                >
                    <div className="min-[24px] w-full flex items-center justify-end">
                        {active && (
                            <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
                                <Check className="text-white stroke-[4] h-4 w-4"/>
                            </div>
                        )}
                    </div>
                    <Image
                        src={enlace_imagen}
                        alt={titulo}
                        height={70}
                        width={92}
                        // className=" rounded-lg drop-shadow-md border object-cover"
                        className=" rounded-lg drop-shadow-md object-cover"
                    />
                    <p className="text-neutral-700 text-center font-bold mt-3"> 
                        {titulo}
                    </p>
                </div>
            : null
        }
        
        </>
    );
};
