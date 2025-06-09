"use client";

import { motion } from "framer-motion";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Cover } from "./ui/cover";
import { Separator } from "@/components/ui/separator"
import Pattern from "./ui/pattern";
import Card from "./ui/image-card";
import HoverRevealCard from "./ui/image-card";

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
            <img src="/animation.gif" className="relative -top-20 -left-25 w-90 h-auto"/>
            <h1 className="relative -top-50 text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-200">
              <span className="block ">ADHDapt</span>
              <span className="block text-lg md:text-2xl mt-2 text-slate-700 dark:text-slate-400 font-semibold">
                Track. Understand. Thrive.
              </span>
              <img src="/new-unscreen.gif" className="relative -top-40 left-220 w-90 h-auto"/>
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
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="italic -top-95 text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-slate-900 dark:from-neutral-800 dark:via-white dark:to-white"
          >
            ❛Your fire just needs the <Cover>right spark</Cover>❜
          </motion.h1>

          <Separator className="relative -top-90"/>

          <p className="relative -top-80 right-90 text-4xl md:text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-200">
            We Get You
          </p>

           <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="relative -top-85 right-36 mx-auto max-w-4xl py-6 text-lg text-neutral-600 dark:text-neutral-400"
          >
            ADHD isn’t a flaw. It’s a different way of processing the world. We see you. We’re with you.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="relative -top-105 new1 z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900 aspect-[16/9] h-[550px] w-[1250px]"
          >
            <div className="relative w-60 top-5 left-5">
              <HoverRevealCard
                imageSrc="/image1.gif"
                imageAlt="Person feeling overwhelmed with ADHD"
                content={
                  <div>
                    <p className="text-orange-300 font-extrabold">The Noise is Real</p><br />
                    <p className="text-xs leading-relaxed font-medium">
                      Sometimes, your brain feels like it's juggling 50 tabs — all open, all urgent.
                      <br />
                      ADHD isn't about being lazy — it's about managing too much at once.
                      <br />
                      <br />
                      <span className="text-orange-300 font-semibold">We help you quiet the noise.</span>
                    </p>
                  </div>
                }
              />
            </div>
            <div className="relative w-60 left-188 -top-55">
              <HoverRevealCard
                imageSrc="/image2.gif"
                imageAlt="Person feeling overwhelmed with ADHD"
                content={
                  <div>
                    <p className="text-orange-300 font-extrabold">Not Broken, Just Wired Differently</p><br />
                    <p className="text-xs leading-relaxed font-medium">
                      Forgetfulness, distraction, overthinking — you're not “bad at life.”
                      <br />
                      Your mind is a maze of brilliance.
                      <br />
                      <br />
                      <span className="text-orange-300 font-semibold">ADHDapt is here to help you navigate, not fix you.</span>
                    </p>
                  </div>
                }
              />
            </div>
            <div className="relative w-60 left-5 -top-45">
              <HoverRevealCard
                imageSrc="/image3.png"
                imageAlt="Person feeling overwhelmed with ADHD"
                content={
                  <div>
                    <p className="text-orange-300 font-extrabold">You Can Find Focus</p>
                    <br/>
                    <p className="text-xs leading-relaxed font-medium">
                      You’re creative. Emotional. Passionate. Focus isn’t out of reach
                      <br />
                      — it just takes the right tools, rhythm, and kindness to self.
                      <br />
                      <br />
                      <span className="text-orange-300 font-semibold">ADHDapt helps you build that.</span>
                    </p>
                  </div>
                }
              />
            </div>
            <div className="relative w-60 -top-105 left-188">
              <HoverRevealCard
                imageSrc="/image4.gif"
                imageAlt="Person feeling overwhelmed with ADHD"
                content={
                  <div>
                    <p className="text-orange-300 font-extrabold">You Deserve Rest, Too</p><br />
                    <p className="text-xs leading-relaxed font-medium">
                      You don’t have to earn rest by finishing everything.
                      <br />
                      ADHDapt helps you work with your energy, not against it.
                      <br />
                      <br />
                      <span className="text-orange-300 font-semibold">We remind you to pause, recharge, and breathe.</span>
                    </p>
                  </div>
                }
              />
            </div>

            <div className="relative w-100 h-100 -top-220 left-75">
              <img src="/brain.gif" className="relative top-10 left-10 size-80"></img>
              <img src="/giphy.gif"className="relative -top-80 left-0 rotate-180 size-30"></img>
              <img src="/look-arrow.gif" className="relative -top-110 left-70 scale-y-[-1] rotate-x-40 -rotate-25 h-[80px] w-[130px]"></img>
              <img src="/giphy.gif"className="relative -top-58 left-75 rotate-180 size-30 scale-y-[-1] scale-x-[-1]"></img>
              <img src="/look-arrow.gif" className="relative -top-80 left-0 scale-x-[-1] rotate-x-40 -rotate-25 h-[80px] w-[130px]"></img>
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
