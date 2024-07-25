import { 
    ClerkLoaded, 
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";


import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
 
import { isAdmin } from "@/lib/admin";
import Link from "next/link";


type Props = {
    // adminIds: string,
};

export const Header = ({
    // adminIds
}: Props) => {
    return (
        // <header className="h-20 w-full border-b-2 border-slate-200 px-4">
        <header className="h-20 w-full border-b-2 border-linea px-4 bg-green-950">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/img/MYS-logo-512.png" height={40} width={40} alt="Logo"/>
                    <h1 className="text-1xl font-extrabold text-amber-500 tracking-wide">
                        Mezclas & Sabores 
                    </h1>

                </div>
                    <ClerkLoading>
                        <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                    </ClerkLoading>

                    <ClerkLoaded>

                        <SignedIn>
                            <UserButton
                                afterSignOutUrl="/"
                            />
                            {/* <div>
                            {isAdmin()
                            ? <Button size="lg" variant="ghost">
                                <Link href="/admin">
                                    Administrar
                                </Link>
                              </Button>
                            : null
                            }
                            </div> */}
                        </SignedIn>

                        <SignedOut>
                            <SignInButton
                                mode="modal"
                                // @ts-ignore: Unreachable code error
                                afterSignInUrl="/learn"
                                afterSignUpUrl="/learn"
                            >
                                <Button size="lg" variant="ghost">
                                    Iniciar Sesión
                                </Button>
                            </SignInButton>
                        </SignedOut>

                    </ClerkLoaded>
            </div>
        </header>
    )
}
