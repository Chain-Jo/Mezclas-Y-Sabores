"use client"

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Promo = () => {
    return (
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className="space-y-2">
                <div className="flex items-center gap-x-2">
                    <Image 
                        src="/img/corazon.png"
                        alt="Corazón"
                        height={26}
                        width={26}
                    />
                    <h3 className="font-bold text-lg">
                        Restaura tus intentos.
                    </h3>
                </div>
                    <p className="text-muted-foreground">
                        Con puntos puedes restaurar tus intentos y seguir aprendiendo.
                    </p>
                    <Button
                        asChild
                        variant="primary"
                        className="w-full"
                        size="lg"
                    >
                        <Link href="/shop">
                            Ir a la tienda
                        </Link>
                    </Button>
            </div>
        </div>
    );
};