import { useKey, useMedia } from "react-use";
import { CheckCircle, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {

};

export const Footer = ({

}: Props) => {

    
    return (
        <footer className={cn(
            "lg:-h[140px] h-[100px] border-t-2",

        )}>
            <div className="max-w[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10">
                Gracias por leer...
            </div>
        </footer>
    );
};