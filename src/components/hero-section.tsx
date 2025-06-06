"use client";

import { motion } from "framer-motion";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function ADHDaptHeroSection() {
    const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col bg-white px-4 dark:bg-black">
      <Navbar />

      {/* Decorative lines */}
      <div className="relative flex flex-1 flex-col items-center justify-center">
        <div className="absolute inset-y-0 left-0 w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-[#ffd12d] to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-[#ffd12d] to-transparent" />
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-[#ffd12d] to-transparent" />
        </div>

        {/* Main Content */}
        <div className="z-10 text-center py-10 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <img src="/animation.gif" className="relative -top-20 w-90 h-auto"/>
            <h1 className="relative -top-50 text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-200">
              <span className="block ">ADHDapt</span>
              <span className="block text-lg md:text-2xl mt-2 text-slate-700 dark:text-slate-400 font-semibold">
                Track. Understand. Thrive.
              </span>
              <img src="/new-unscreen.gif" className="relative -top-40 left-230 w-90 h-auto"/>
            </h1>
            
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="relative -top-100 mx-auto max-w-2xl py-6 text-lg text-neutral-600 dark:text-neutral-400"
          >
            ADHDapt is your personal space to manage moods, tasks, reflections, and motivation — built
            for the way your brain works. Whether you're just starting out or trying to stay consistent,
            we’re here to guide you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="relative -top-100 mt-6 flex flex-wrap justify-center gap-4"
          >
            <button onClick={() => router.push("/sign-up")} className="w-60 transform rounded-lg bg-[#ffd12d] px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#49411c] hover:text-white dark:bg-emerald-500 dark:hover:bg-emerald-600">
              Start Your Journey
            </button>
            <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              Learn More
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="relative -top-100 z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
              <img
                src="/placeholder.svg?height=600&width=1000"
                alt="ADHDapt dashboard preview showing productivity tools and ADHD management features"
                className="aspect-[16/9] h-[600px] w-[1200px] object-cover"
                height={600}
                width={1000}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <img src="/logo.png" className="size-10 rounded-full "/>
        <h1 className="text-lg font-bold md:text-2xl text-black dark:text-white">ADHDapt</h1>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => router.push("/about-us")}
          className="w-24 transform rounded-lg bg-[#ffd12d] px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#49411c] hover:text-white md:w-32 dark:bg-[#ffd12d] dark:hover:bg-[#ffd12d]"
        >
          About Us
        </button>
        <button
          onClick={() => router.push("/sign-in")}
          className="w-24 transform rounded-lg bg-[#ffd12d] px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#49411c] hover:text-white md:w-32 dark:bg-emerald-500 dark:hover:bg-emerald-600"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/sign-up")}
          className="w-24 transform rounded-lg bg-[#ffd12d] px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#49411c] hover:text-white md:w-32 dark:bg-emerald-500 dark:hover:bg-emerald-600"
        >
          Sign Up
        </button>
        <button
          onClick={() => router.push("/contact")}
          className="w-24 transform rounded-lg bg-[#ffd12d] px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#49411c] hover:text-white md:w-32 dark:bg-emerald-500 dark:hover:bg-emerald-600"
        >
          Contact
        </button>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
