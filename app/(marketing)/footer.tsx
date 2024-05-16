import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return (
        // <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
        <footer className="hidden lg:block h-20 w-full border-t-2 border-linea p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/img/un-pan.png"
                        alt="Panadería Logo"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Panadería
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/img/pastel-de-cumpleanos.png"
                        alt="Repostería Logo"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Repostería
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/img/filete.png"
                        alt="Carnes Logo"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Carnes
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/img/coctel.png"
                        alt="Coctelería Logo"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Cocteles
                </Button>
            </div>
        </footer>
    )
}