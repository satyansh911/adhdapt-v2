import "./globals.css";
import { ReactNode } from "react";
import {
  ClerkProvider,
  // SignInButton,
  // SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { type Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADHDapt",
  description:
    "Focus better, feel better. A productivity platform for ADHD management.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          {/* Auth header */}
          <header className="flex justify-end items-center p-4 gap-4 h-16 border-b">
            <SignedOut></SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

          {/* Navigation and content */}
          <NavigationMenu />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
