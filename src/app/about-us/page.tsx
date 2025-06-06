"use client";

import { motion } from "framer-motion";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white px-4 dark:bg-black">
      <Navbar />

      {/* Decorative borders */}
      <div className="relative -top-10 flex flex-1 flex-col items-center justify-center">
        <div className="absolute inset-y-0 left-0 w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-[#ffd12d] to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-[#ffd12d] to-transparent" />
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-[#ffd12d] to-transparent" />
        </div>

        {/* Content */}
        <div className="z-10 w-full max-w-6xl py-10 md:py-20 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight text-slate-900 text-center"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-black dark:text-neutral-300 mb-6 max-w-3xl mx-auto text-center"
          >
            ADHDapt is a digital support system crafted to assist individuals facing challenges associated with attention, focus, organization, and emotional regulation. Rooted in research-backed strategies and behavioral design, it addresses everyday struggles in a way that's structured, intuitive, and user-centric.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-md text-black dark:text-neutral-400 mb-10 max-w-3xl mx-auto text-center"
          >
            The platform integrates scheduling, mood tracking, task breakdowns, journaling, and gamified engagement to foster sustainable productivity. Its core purpose is to reduce overwhelm, increase self-awareness, and create a consistent rhythm for day-to-day life—especially for individuals navigating ADHD traits in academic, personal, or professional contexts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#ffd12d]/20 dark:bg-[#ffd12d]/10 px-6 py-4 rounded-xl text-center mb-10 max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-[#ffd12d] mb-2">Purpose</h3>
            <p className="text-md text-black dark:text-neutral-300">
              ADHDapt exists to bridge the gap between intention and execution. In a world full of distractions and mental fatigue, it provides structure, clarity, and emotional balance—tools vital for both neurodivergent and neurotypical users alike.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="w-full rounded-3xl overflow-hidden mb-12 shadow-md border border-neutral-300 dark:border-neutral-700"
          >
            <video
              className="w-full h-[400px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls={false} // set to true if you want video controls
            >
              <source src="/about us.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="italic text-2xl font-semibold text-black dark:text-white text-center mb-6"
          >
            “This platform isn’t just a tool — it’s a support system.”
            <div className="text-[#ffd12d]/70 text-base mt-2">– Satyansh & Kushagra, Co-founders</div>
          </motion.blockquote>

          {/* Team Section */}
          <section className="grid md:grid-cols-2 gap-10 mt-20">
              <AnimatedTestimonials
                testimonials={[
                  {
                    quote:
                      "I wanted to build a tool that could empower people like me—who sometimes feel scattered—to take charge of their day with structure and clarity.",
                    name: "Satyansh Singh",
                    designation: "Student, IIIT Sonepat",
                    src: "/Satyansh.jpg",
                  },
                  {
                    quote:
                      "We’ve always believed mental health tools should be as intuitive as the problems they aim to solve. ADHDapt is that bridge.",
                    name: "Kushagra Saxena",
                    designation: "Student, IIIT Ranchi",
                    src: "/Kushagra.jpg",
                  },
                ]}
              />

            <div>
              <h2 className="text-4xl font-extrabold mb-4 text-[#ffd12d]">
                THE TEAM.
              </h2>
              <p className="text-md text-black dark:text-neutral-300 mb-6">
                ADHDapt was conceptualized and brought to life by Satyansh Singh (B.Tech, IIIT Sonepat) and Kushagra Saxena (B.Tech, IIIT Ranchi), both with strong academic backgrounds and a shared interest in mental wellness and user-centric technology. Their combined expertise in development and human behavior shaped the foundation of the platform. With deep empathy for users and continuous feedback, they aim to evolve ADHDapt into a long-term mental productivity companion.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { count: "100+", label: "Users onboarded" },
                  { count: "40+", label: "Daily tasks managed" },
                  { count: "25+", label: "Journal entries daily" },
                  { count: "10+", label: "Active beta testers" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-[#ffd12d]">{item.count}</div>
                    <div className="text-sm text-black dark:text-neutral-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center border-t border-black dark:border-neutral-800 pt-6 pb-8 mt-8 text-black dark:text-white text-sm gap-2 px-4">
        <div>&copy; {new Date().getFullYear()} ADHDapt. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">instagram.</a>
          <a href="#" className="hover:underline">facebook.</a>
          <a href="#" className="hover:underline">twitter.</a>
        </div>
      </footer>
    </div>
  );
}

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <img src="/logo.png" className="size-10 rounded-full" />
        <h1 className="text-lg font-bold md:text-2xl text-black dark:text-white">
          ADHDapt
        </h1>
      </div>
      <div className="flex items-center gap-3">
        {[
          { label: "Home", href: "/" },
          { label: "Login", href: "/sign-in" },
          { label: "Sign Up", href: "/sign-up" },
          { label: "Contact", href: "/contact" },
        ].map((btn, i) => (
          <button
            key={i}
            onClick={() => router.push(btn.href)}
            className="w-24 transform rounded-lg bg-[#ffd12d] px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#49411c] hover:text-white md:w-32 dark:bg-emerald-500 dark:hover:bg-emerald-600"
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
