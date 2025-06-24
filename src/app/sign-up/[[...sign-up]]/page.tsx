"use client";

import SocialFloatingDock from "@/components/social-floating-dock";
import { SignUp } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b border-neutral-200 px-4 py-4 bg-white shadow-sm">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <img src="/logo.png" className="size-10 rounded-full" alt="Logo" />
        <h1 className="text-lg font-bold md:text-2xl text-black">ADHDapt</h1>
      </div>
      <div className="flex items-center gap-3">
        {[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: "Login", href: "/sign-in" },
          { label: "Contact", href: "/contact" },
        ].map((btn, i) => (
          <button
            key={i}
            onClick={() => router.push(btn.href)}
            className="w-24 md:w-32 transform rounded-lg bg-[#ffd12d] px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#49411c] hover:text-white"
          >
            {btn.label}
          </button>
        ))}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Background Pattern */}
      <div className="flex-1 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#fff6cc] via-[#fffde6] to-[#fff] flex justify-center items-center px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-yellow-100 p-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-extrabold text-gray-800">Sign Up</h1>
            <p className="text-sm text-gray-500 mt-1">
              Start your journey with ADHDapt today
            </p>
          </div>

          <SignUp
            appearance={{
              variables: {
                colorPrimary: "#ffd12d",
                colorBackground: "#ffffff",
                colorText: "#111827",
                colorTextSecondary: "#6b7280",
                colorInputText: "#1f2937",
                colorInputBackground: "#ffffff",
              },
              elements: {
                card: "bg-transparent border-none shadow-none p-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton:
                  "bg-[#ffd12d] text-black font-medium rounded-full px-4 py-2 hover:bg-[#49411c] hover:text-white transition w-full",
                socialButtonsBlock: "mb-3",
                dividerRow: "my-4 border-gray-300",
                formFieldLabel: "text-gray-600 text-sm mb-1",
                formFieldInput:
                  "bg-white text-black placeholder-gray-400 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#ffd12d]",
                formFieldInputShowPasswordButton: "text-gray-400",
                formFieldInputHidePasswordButton: "text-gray-400",
                submitButton:
                  "bg-[#ffd12d] text-black rounded-md px-4 py-2 font-semibold hover:bg-[#49411c] hover:text-white w-full mt-4",
                submitButtonLoading:
                  "bg-yellow-200 text-yellow-600 opacity-50 cursor-not-allowed",
                footer: "text-gray-500 text-center mt-6 text-sm",
                formFieldAction: "text-[#b89c07] text-xs hover:underline",
                formButtonReset: "text-[#b89c07] text-xs hover:underline",
                identityPreview: "text-black",
                identityPreviewEditButton: "text-[#b89c07] hover:underline",
              },
            }}
          />
        </div>
      </div>
      <footer className="w-full flex justify-center items-center border-t border-neutral-200 pt-6 pb-8 mt-1 text-neutral-500 text-sm px-4 gap-10">
        <div className="relative left-38">
          <SocialFloatingDock />
        </div>
        <div className="relative -bottom-12 -left-48">
          &copy; {new Date().getFullYear()} ADHDapt. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
