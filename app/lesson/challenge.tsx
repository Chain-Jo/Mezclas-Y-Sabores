import { cn } from "@/lib/utils";
import { challengeOptions, challenges } from "@/database/schema"

import { Card } from "./card";

type Props = {
    options: typeof challengeOptions.$inferSelect[];
    onSelect: (id: number) => void;
    status: "correct" | "wrong" | "none";
    selectedOption?: number;
    disabled?: boolean;
    type: typeof challenges.$inferInsert["type"];
    activo: boolean;
};

export const Reto = ({
    options,
    onSelect,
    status,
    selectedOption,
    disabled,
    type,
    activo
}: Props) => {
    return (
        <>
        {activo === true 
            ?
                <div className={cn(
                    "grid gap-2",
                    type === "ASSIST" && "grid-cols-1",
                    type === "SELECT" && "grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]"
                )}>
                    {options.map((option, i) => (
                        <Card
                            key={option.id}
                            id={option.id}
                            text={option.text}
                            enlace_imagen={option.enlace_imagen}
                            shortcut={`${i + 1}`}
                            selected={selectedOption === option.id}
                            onClick={() => onSelect(option.id)}
                            status={status}
                            // audioSrc={option.audioSrc}
                            disabled={disabled}
                            type={type}
                            activo={option.activo}
                        />
                    ))}
                </div>
            : null
        }
        </>
    )
}