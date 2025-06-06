"use client";

import { motion } from "framer-motion";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white px-4 dark:bg-black">
      <Navbar />

      {/* Decorative borders */}
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
            We’re Satyansh Singh (B.Tech, IIIT Sonepat) and Kushagra Saxena (B.Tech, IIIT Ranchi), two students passionate about mental health and meaningful tech. ADHDapt was born from a simple yet powerful idea: we believe everyone experiences some symptoms of ADHD—distraction, procrastination, burnout—especially in today’s digital world.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-md text-black dark:text-neutral-400 mb-10 max-w-3xl mx-auto text-center"
          >
            ADHDapt is our way of turning empathy into impact. We’ve combined structured scheduling, gamified task management, mood tracking, journaling, and peer interaction to build a toolkit for anyone struggling with focus, time blindness, or emotional overwhelm. Whether diagnosed or not, ADHDapt is here to help people take control of their day, mindfully and meaningfully.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#ffd12d]/20 dark:bg-[#ffd12d]/10 px-6 py-4 rounded-xl text-center mb-10 max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-[#ffd12d] mb-2">Our Mission</h3>
            <p className="text-md text-black dark:text-neutral-300">
              To reimagine how ADHD is managed—not as a flaw, but as a unique way of thinking. Through digital wellness tools, we aim to reduce stigma, support structure, and empower self-growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="w-full rounded-3xl overflow-hidden mb-12 shadow-md border border-neutral-300 dark:border-neutral-700"
          >
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80"
              alt="Team working"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="italic text-2xl font-semibold text-black dark:text-white text-center mb-6"
          >
            “This platform isn’t just a tool — it’s a support system.”
            <div className="text-[#ffd12d]/70 text-base mt-2">– Satyansh & Kushagra, Co-founders</div>
          </motion.blockquote>

          <section className="grid md:grid-cols-2 gap-10 mt-20">
            <div className="grid grid-cols-2 gap-6">
              {["men/32", "women/44", "men/65", "women/68"].map((path, i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/${path}.jpg`}
                  alt="Team member"
                  className="w-full h-48 object-cover rounded-xl bg-[#ffd12d]/10"
                />
              ))}
            </div>
            <div>
              <h2 className="text-4xl font-extrabold mb-4 text-[#ffd12d]">
                THE TEAM.
              </h2>
              <p className="text-md text-black dark:text-neutral-300 mb-6">
                Our team consists of two driven developers who are also users of the platform. We understand the chaos of unmanaged tasks, scattered thoughts, and endless mental to-dos—because we’ve lived it. Backed by research and user feedback, we’ve translated our vision into a product that not only tracks productivity, but nurtures well-being.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[{ count: "100+", label: "Users onboarded" }, { count: "40+", label: "Daily tasks managed" }, { count: "25+", label: "Journal entries daily" }, { count: "10+", label: "Active beta testers" }].map((item, i) => (
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
