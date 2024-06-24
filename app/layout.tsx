import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import {esES} from '@clerk/localizations'
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { PracticeModal } from "@/components/modals/practice-modal";

// import { Inter } from "next/font/google";
import "./globals.css";
import { TestModal } from "@/components/modals/test-modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mezclas y Sabores",
  description: "Generated by create next app",
  manifest: "/manifest.json",
  icons: {
    apple: "/favicon.ico",
    // android: "/favicon.ico"
  },
  themeColor: "#000000"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="es">
        <body className={font.className}>
          <Toaster/>
          <ExitModal />
          <HeartsModal/>
          <PracticeModal/>
          <TestModal/>
          {children}
        </body>
      </html>

    </ClerkProvider>
  );
}
