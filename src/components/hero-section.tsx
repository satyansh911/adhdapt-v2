"use client";

import { motion } from "framer-motion";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Cover } from "./ui/cover";
import { Separator } from "@/components/ui/separator"
import Pattern from "./ui/pattern";
import Card from "./ui/image-card";
import HoverRevealCard from "./ui/image-card";
import { useState } from "react";
import MyMap from "./ui/world-map";
import ADHDMap from "./ADHDmap";
import Button from "./ui/button";
import HoverButton from "./ui/button";
import ADHDComprehensiveStats from "./ui/adhdComprehensiveStats";
import CardStackDemo from "./cardsComponent";
import { CardStack } from "./ui/card-stack";
import Testimonials from "./testimonials";
import SocialFloatingDock from "./social-floating-dock";


export default function ADHDaptHeroSection() {
    const router = useRouter();
    const [isFullScreen, setIsFullScreen] = useState(false);
    const toggleFullScreen = () => {
      setIsFullScreen(!isFullScreen);
    };

  return (
    <div className="flex max-h-screen flex-col bg-white px-4 dark:bg-black">
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

        <div className="z-10 h-3520 text-center py-10 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <img src="/animation.gif" className="relative -top-20 left-10 w-90 h-auto"/>
            <h1 className="relative -top-50 text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-200">
              <span className="block ">ADHDapt</span>
              <span className="block text-lg md:text-2xl mt-2 text-slate-700 dark:text-slate-400 font-semibold">
                Track. Understand. Thrive.
              </span>
              <img src="/new-unscreen.gif" className="relative -top-40 left-240 w-90 h-auto"/>
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

          <Separator className="relative -top-90 w-[400px] h-[1px] bg-gray-200 dark:bg-slate-400" />


          <p className="relative -top-80 text-4xl md:text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-200">
            We Get You
          </p>

           <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="relative -top-85  mx-auto max-w-4xl py-6 text-lg text-neutral-600 dark:text-neutral-400"
          >
            ADHD isn’t a flaw. It’s a different way of processing the world. We see you. We’re with you.
          </motion.p>


          <motion.div
            initial={false}
            animate={{
              position: isFullScreen ? "fixed" : "relative",
              top: isFullScreen ? 0 : "-330px",
              left: isFullScreen ? 0 : "30px",
              width: isFullScreen ? "100vw" : "95%",
              height: isFullScreen ? "100vh" : "600px",
              zIndex: isFullScreen ? 50 : 10,
              opacity:1, y:0
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="new1 rounded-2xl border border-neutral-200 bg-neutral-100 shadow-md dark:border-neutral-800 dark:bg-neutral-900 aspect-[16/9]"
          >

            <button
              onClick={toggleFullScreen}
              className="relative h-[35px] transform rounded-lg bg-blue-500 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
            >
              {isFullScreen ? "Exit Fullscreen" : "Expand"}
            </button>
            <div className="relative h-[600px] -top-3 left-6">
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
            <div className="relative w-60 left-230 -top-55">
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
            <div className="relative w-60 -top-105 left-230">
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
            </div>

            <div className="relative w-100 h-100 -top-225 left-80">
              <img src="/brain.gif" className="relative top-100 left-35 size-80"></img>
              <img src="/giphy.gif"className="relative w-[180px] h-[160px] top-10 left-0 rotate-180 size-30"></img>
              <img src="/look-arrow.gif" className="relative -top-30 left-100 scale-y-[-1] rotate-x-40 -rotate-25 h-[130px] w-[180px]"></img>
              <img src="/giphy.gif"className="relative w-[180px] h-[160px] top-10 left-100 rotate-180 size-30 scale-y-[-1] scale-x-[-1]"></img>
              <img src="/look-arrow.gif" className="relative -top-25 left-5 scale-x-[-1] rotate-x-40 -rotate-25 h-[130px] w-[180px]"></img>
            </div>
          </motion.div>
          <Separator className="relative -top-70"/>
          <motion.div>
            <div>
              <p className="relative -top-60 text-4xl md:text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-200">
                You're Not Alone
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="relative -top-62 mx-auto max-w-4xl py-6 text-lg text-neutral-600 dark:text-neutral-400"
              >
                ADHD Around the World
              </motion.p>
            </div>
          </motion.div>
          <div className="relative -top-85">
            <ADHDMap/>
          </div>
          <div className="relative -top-111 px-10">
            <div className="flex justify-between items-center w-full max-w-[750px] mx-auto">
              <HoverButton 
                text="World Health Organisation" 
                imgSrc="/who.png" 
                alt="WHO logo" 
                link="https://www.who.int/teams/mental-health-and-substance-use/treatment-care/mental-health-gap-action-programme/evidence-centre/child-and-adolescent-mental-disorders/pharmacological-and-nonpharmacological-interventions-for-children-with-attention-deficit-hyperactivity-disorder-(adhd)"
              />
              <HoverButton 
                text="Centers For Disease Control" 
                imgSrc="/CDC.png" 
                alt="CDC logo" 
                link="https://www.cdc.gov/adhd/data/index.html"
              />
            </div>
            <div>
              <ADHDComprehensiveStats/>
            </div>
            <div className="relative">
                <CardStackDemo />
            </div>
            <div className="h-50 w-240">
              <Testimonials/>
            </div>
            <div className="mt-10">
              <h1>This is a link</h1>
            </div>
            <div className="mt-16 relative top-110">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                  {/* Left Side - ADHD Articles & Resources */}
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200">
                      Learn More About ADHD
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Explore trusted resources and expert insights about ADHD to better understand this
                      neurodevelopmental condition.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-300">Featured Articles</h3>

                      <div className="space-y-3">
                        <HoverButton 
                          text="NIMH: What is ADHD?" 
                          imgSrc="/NIHlogo.png" 
                          alt="WHO logo" 
                          link="https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd"
                        />

                        <HoverButton 
                          text="CHADD: ADHD Overview" 
                          imgSrc="/CHADDlogo.png" 
                          alt="WHO logo" 
                          link="https://chadd.org/about-adhd/overview/"
                        />

                        <HoverButton 
                          text="ADDitude: Understanding ADHD" 
                          imgSrc="/ADDITUDElogo.png" 
                          alt="WHO logo" 
                          link="https://www.additudemag.com/what-is-adhd-symptoms-causes-treatments/"
                        />

                        <HoverButton 
                          text="Understood: ADHD Basics" 
                          imgSrc="/Understoodlogo.png" 
                          alt="WHO logo" 
                          link="https://www.understood.org/en/articles/adhd-what-you-need-to-know"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-200">
                      Ready to Get Started?
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Join our community and start your journey with ADHD support tools designed for your unique needs.
                    </p>

                    <div className="flex flex-col gap-4">
                      <button
                        onClick={() => router.push("/sign-up")}
                        className="w-full transform rounded-lg bg-[#ffd12d] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#49411c] hover:text-white text-lg shadow-lg"
                      >
                        Start Your Journey
                      </button>

                      <button
                        onClick={() => router.push("/resources")}
                        className="w-full transform rounded-lg border-2 border-[#ffd12d] bg-transparent px-8 py-4 font-semibold text-[#ffd12d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffd12d] hover:text-black text-lg"
                      >
                        Browse Resources
                      </button>
                    </div>

                    <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                      <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                        ✨ Free forever • No credit card required
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full flex justify-center items-center border-t border-neutral-200 pt-6 pb-8 mt-0 text-neutral-500 text-sm px-4 gap-10">
        <div className="relative left-38">
          <SocialFloatingDock/>
        </div>
        <div className="relative -bottom-12 -left-48">
          &copy; {new Date().getFullYear()} ADHDapt. All rights reserved.
        </div>
      </footer>
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
