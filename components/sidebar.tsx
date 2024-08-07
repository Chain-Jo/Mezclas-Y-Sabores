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
import { isAdmin } from "@/lib/admin";
import { Button } from "./ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { isSupervisor } from "@/lib/supervisor";

type Props = {
    className?: string;
}


export const SideBar = async({
    className
}: Props) => {

    const adminIds = isAdmin();
    const supervisorIds = isSupervisor();


    const user = await currentUser();
    if (user != null) {
        if (!adminIds.includes(user.id) && !supervisorIds.includes(user.id)) {
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
                        label="Recarga"
                        href="/shop"
                        iconSrc="/img/tienda.png"
                    />
                    <SidebarItem 
                        label="Recetas"
                        href="/recipes"
                        iconSrc="/img/receta.png"
                    />
                    <SidebarItem 
                        label="Volver al inicio"
                        href="/"
                        iconSrc="/img/casa.png"
                    />
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
        );
        } else  if(!adminIds.includes(user.id) && supervisorIds.includes(user.id)) {
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
                        label="Recarga"
                        href="/shop"
                        iconSrc="/img/tienda.png"
                    />
                    <SidebarItem 
                        label="Recetas"
                        href="/recipes"
                        iconSrc="/img/receta.png"
                    />
                    <SidebarItem 
                        label="Volver al inicio"
                        href="/"
                        iconSrc="/img/casa.png"
                    />
                    <div className="lg:visible invisible">

                        <SidebarItem 
                                    
                                    label="Supervisar"
                                    href="/supervision"
                                    iconSrc="/img/estadisticas.png"
                        />
                    </div>
                    {/* <div> */}
                                {/* {!isAdmin()
                                ? 
                                null
                                : <SidebarItem 
                                label="Administar"
                                href="/dashboard"
                                iconSrc="/img/receta.png"
                            />
                                } */}
                                {/* {isAdmin()
                                ? <Button size="lg" variant="ghost">
                                    <Link href="/admin">
                                        Administrar
                                    </Link>
                                </Button>
                                : null
                                } */}
                    {/* </div> */}
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
        } else {
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
                            label="Recarga"
                            href="/shop"
                            iconSrc="/img/tienda.png"
                        />
                        <SidebarItem 
                            label="Recetas"
                            href="/recipes"
                            iconSrc="/img/receta.png"
                        />
                        <SidebarItem 
                            label="Volver al inicio"
                            href="/"
                            iconSrc="/img/casa.png"
                        />
                        <div className="lg:visible invisible">
    
                            <SidebarItem 
                                        
                                        label="Administar"
                                        href="/dashboard"
                                        iconSrc="/img/estadisticas.png"
                            />
                        </div>
                        {/* <div> */}
                                    {/* {!isAdmin()
                                    ? 
                                    null
                                    : <SidebarItem 
                                    label="Administar"
                                    href="/dashboard"
                                    iconSrc="/img/receta.png"
                                />
                                    } */}
                                    {/* {isAdmin()
                                    ? <Button size="lg" variant="ghost">
                                        <Link href="/admin">
                                            Administrar
                                        </Link>
                                    </Button>
                                    : null
                                    } */}
                        {/* </div> */}
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
    } else {
        redirect("/");
    }

    // return (
    // )
}