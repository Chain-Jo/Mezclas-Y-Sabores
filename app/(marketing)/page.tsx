// import Image from "next/image";

import Image from "next/image";
import {
	ClerkLoaded,
	ClerkLoading,
	SignUpButton,
	SignInButton,
	SignedIn,
	SignedOut
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { SignUpButton, SignedIn, SignedOut } from "@clerk/clerk-react";

export default function Home() {

return (
		<div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
			<div className="relative w-[360px] h-[160px] lg:w-[480px] lg:h-[280px] mb-8 lg:mb-0">
				<Image src="/img/MySslogan.png" fill alt="Slogan" />
			</div>
			<div className="flex flex-col items-center gap-y-8">
				<h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
				{/* <h1 className="text-xl lg:text-3xl font-bold text-letrasBlancas max-w-[480px] text-center"> */}
					Conviértete en un experto culinario con Mezclas & Sabores.
				</h1>
				<div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
					<ClerkLoading>
						<Loader className="h-10 w-10 text-muted-foreground animate-spin" />
					</ClerkLoading>
					<ClerkLoaded>
						<SignedOut>
							<SignUpButton
								mode="modal"
								// @ts-ignore: Unreachable code error
								afterSignInUrl="/learn"
								afterSignUpUrl="/learn"
							>
								<Button size="lg" variant="secondary" className="w-full">
									Empieza ahora
								</Button>
							</SignUpButton>
							<SignInButton
								mode="modal"
								// @ts-ignore: Unreachable code error
								afterSignInUrl="/learn"
								afterSignUpUrl="/learn"
							>
								<Button size="lg" variant="secondaryOutline" className="w-full">
									Ya tengo una cuenta
								</Button>
							</SignInButton>
						</SignedOut>

						<SignedIn>
							<Button size="lg" variant="secondary" className="w-full" asChild>
								<Link href="/learn">
									Sigue Aprendiendo
								</Link>
							</Button>

						</SignedIn>
					</ClerkLoaded>
				</div>
			</div>


		</div>
	)
}
