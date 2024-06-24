"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTestModal } from "@/store/use-test-modal";


export const TestModal = () => {
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = useTestModal();

    useEffect(() => setIsClient(true), []);


    if (!isClient) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image
                            src="/img/prueba.png"
                            alt="Heart"
                            height={100}
                            width={100}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        {/* TODO: arreglar las traducciones */}
                        {/* Wait, don&apos;t go */}
                        Prueba.
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        {/* You&apos;re about to leave the lesson. Are you sure? */}
                        Esta es una prueba, no contarás con intentos, si fallas tendrás que repasar las lecciones anteriores para poder intentar de nuevo.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        <Button
                            variant="primary"
                            className="w-full"
                            size="lg"
                            onClick={close}
                            // onClick={close}
                        >
                            {/* End session */}
                            Entiendo
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};