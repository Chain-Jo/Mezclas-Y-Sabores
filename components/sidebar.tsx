import Image from "next/image";
import Link from "next/link";
import {
	ClerkLoaded,
	ClerkLoading,
	SignUpButton,
	SignInButton,
	SignedIn,
	SignedOut,
    UserButton
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarItem } from './sidebar-item';

type Props = {
    className?: string;
}

export const SideBar = ({
    className
}: Props) => {
    return (
        <div className={cn(
            // "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col bg-fondo",
            "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
            className,
        )}> 
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/img/MYS-logo-512.png" height={40} width={40} alt="Logo"/>
                    <h1 className="text-2xl font-extrabold text-amber-500 tracking-wide">
                            Mezclas & Sabores 
                    </h1>

                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem 
                    label="Aprende"
                    href="/learn"
                    iconSrc="/img/aprender.png"
                />
                <SidebarItem 
                    label="Ranking"
                    href="/ranking"
                    iconSrc="/img/ranking.png"
                />
                <SidebarItem 
                    label="Retos"
                    href="/quest"
                    iconSrc="/img/diana.png"
                />
                <SidebarItem 
                    label="Tienda"
                    href="/shop"
                    iconSrc="/img/tienda.png"
                />
                {/* <SidebarItem 
                    label="Recetas"
                    href="/recipes"
                    iconSrc="/img/receta.png"
                /> */}
            </div>
                <div className="p-4">
                    <ClerkLoading>
                        <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                    </ClerkLoading>
                    <ClerkLoaded>
                        <UserButton afterSignOutUrl="/"></UserButton>
                    </ClerkLoaded>
                </div>
        </div>
    )
}