"use client";

import { motion } from "framer-motion";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white px-4 text-black">
      <Navbar />

      <div className="relative flex flex-1 flex-col items-center justify-center">
        {/* Decorative borders */}
        <div className="absolute inset-y-0 left-0 w-px bg-neutral-200/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-[#ffd12d] to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 w-px bg-neutral-200/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-[#ffd12d] to-transparent" />
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-neutral-200/80">
          <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-[#ffd12d] to-transparent" />
        </div>

        {/* Content */}
        <div className="z-10 w-full max-w-3xl py-10 md:py-20 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight text-black text-center"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-700 mb-8 max-w-2xl mx-auto text-center"
          >
            Have a question, suggestion, or just want to say hello? Fill out the
            form below and our team will get back to you as soon as possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-[#ffd12d]/10 px-8 py-8 rounded-2xl shadow-lg mb-12 border border-[#ffd12d]/30 max-w-xl mx-auto"
          >
            {!submitted ? (
              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label
                    className="block text-black font-semibold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-lg px-4 py-2 bg-white border border-[#ffd12d]/30 text-black placeholder-black/60 focus:outline-none focus:border-[#ffd12d] transition"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    className="block text-black font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-lg px-4 py-2 bg-white border border-[#ffd12d]/30 text-black placeholder-black/60 focus:outline-none focus:border-[#ffd12d] transition"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label
                    className="block text-black font-semibold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full rounded-lg px-4 py-2 bg-white border border-[#ffd12d]/30 text-black placeholder-black/60 focus:outline-none focus:border-[#ffd12d] transition"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-lg bg-[#ffd12d] py-3 font-bold text-black hover:bg-yellow-400 transition"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
              >
                <div className="text-3xl mb-2 font-bold text-[#ffd12d]">
                  Thank you!
                </div>
                <div className="text-neutral-700">
                  Your message has been sent. We'll get back to you soon.
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-2xl mx-auto"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#ffd12d] mb-2">
                Email
              </h3>
              <a
                href="mailto:hello@adhdapt.com"
                className="inline-block bg-[#ffd12d] hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full transition"
              >
                hello@adhdapt.com
              </a>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#ffd12d] mb-2">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a href="#" className="hover:underline">
                  instagram.
                </a>
                <a href="#" className="hover:underline">
                  facebook.
                </a>
                <a href="#" className="hover:underline">
                  twitter.
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="w-full flex justify-center items-center border-t border-neutral-200 pt-6 pb-8 mt-8 text-neutral-500 text-sm px-4 gap-10">
        <div>
          &copy; {new Date().getFullYear()} ADHDapt. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            instagram.
          </a>
          <a href="#" className="hover:underline">
            facebook.
          </a>
          <a href="#" className="hover:underline">
            twitter.
          </a>
        </div>
      </footer>
    </div>
  );
}

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b border-neutral-200 px-4 py-4">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <img src="/logo.png" className="size-10 rounded-full" />
        <h1 className="text-lg font-bold md:text-2xl text-black">ADHDapt</h1>
      </div>
      <div className="flex items-center gap-3">
        {[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: "Login", href: "/sign-in" },
          { label: "Sign Up", href: "/sign-up" },
        ].map((btn, i) => (
          <button
            key={i}
            onClick={() => router.push(btn.href)}
            className="w-24 transform rounded-lg bg-[#ffd12d] px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#49411c] hover:text-white md:w-32"
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
