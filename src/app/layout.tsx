"use client";
import "./globals.css";
import { ReactNode, useState } from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Inter } from "next/font/google";

import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  const navLinks = [
    { name: "About Us", link: "/about-us" },
    { name: "Login", link: "/sign-in" },
    { name: "Sign Up", link: "/sign-up" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <NavbarWrapper navLinks={navLinks} />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
function NavbarWrapper({ navLinks }: { navLinks: { name: string; link: string }[] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar className="top-10">
      {/* Desktop Nav */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navLinks} />
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </NavBody>

      {/* Mobile Nav */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
          {navLinks.map((item, index) => (
            <NavbarButton
              key={index}
              href={item.link}
              variant="primary"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavbarButton>
          ))}
          <SignedIn>
            <div className="mt-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
