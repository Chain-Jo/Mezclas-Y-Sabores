"use client";

import { toast } from "sonner";
import Image from "next/image";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NotebookText } from "lucide-react";
import { isAdmin } from "@/lib/admin";
// import { units } from "@/database/schema";



type Props = {

};

export const Dashboard = ({

}: Props) => {
    return (
        <>
        {isAdmin()
            ?
            <ul className="w-full">
                <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                    <Image
                        src="/img/ajustes.png"
                        alt="Gestionar"
                        height={60}
                        width={60}
                    />
                    <div className="flex-1">
                        <p className="text-neutral-700 text-base lg:text-xl font-bold">
                            Gestionar contenido.
                        </p>
                    </div>
                        <Button

                        >
                            <Link href="/admin" target="_blank">
									Ir
							</Link>
                        </Button>
                </div>
                <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                    <Image
                        src="/img/log.png"
                        alt="Logs"
                        height={60}
                        width={60}
                    />
                    <div className="flex-1">
                        <p className="text-neutral-700 text-base lg:text-xl font-bold">
                            Logs.
                        </p>
                    </div>
                        <Button
                            
                        >
                            <Link href="/logs">
									Ir
							</Link>
                        </Button>
                </div>
                <li>
                    <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                        <Image
                            src="/img/examen.png"
                            alt="Reportes"
                            height={60}
                            width={60}
                        />
                        <div className="flex-1">
                            <p className="text-neutral-700 text-base lg:text-xl font-bold">
                                Reportes.
                            </p>
                        </div>
                            <Button
                                
                            >
                                <Link href="/reports">
                                        Ir
                                </Link>
                            </Button>
                    </div>
                </li>

        </ul>
            : 
            <div>
                Usted no es administrador.
            </div>
        }
        
        </>
    );

}


