"use client"
import { useRef } from "react"
import type React from "react"
import { motion } from "framer-motion";
import { CardStack } from "@/components/ui/card-stack"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation";

export default function CardStackDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter();
  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="h-[1000vh] relative"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative -top-5 -left-40">
            <p className="text-2xl md:text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-200">
              Your<br/>ADHDapt<br/>Toolkit
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="relative mx-auto max-w-4xl py-6 text-lg text-neutral-600 dark:text-neutral-400"
            >
              ADHD isn’t a flaw.<br/> It’s a different way of<br/> processing the world.<br/> We see you.<br/> We’re with you.
            </motion.p>
            <button onClick={() => router.push("/sign-up")} className="w-50 transform rounded-lg bg-[#ffd12d] px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#49411c] hover:text-white dark:bg-emerald-500 dark:hover:bg-emerald-600">
              Get Started Now
            </button>
          </div>
          <CardStack items={ADHD_FEATURES} containerRef={containerRef} />
        </div>
      </div>
    </div>
  )
}
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5 rounded",
        className,
      )}
    >
      {children}
    </span>
  )
}

const ADHD_FEATURES = [
  {
    id: 0,
    name: "Focus & Productivity",
    designation: "Core Features",
    emoji: "🎯",
    gradient: "from-red-500 to-orange-500",
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🎯</span>
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Gamified Focus Tools</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          Turn focus sessions into engaging games with <Highlight>rewards, streaks, and achievements</Highlight> that
          make staying on task fun and motivating.
        </p>
      </div>
    ),
  },
  {
    id: 1,
    name: "Smart Scheduling",
    designation: "AI-Powered",
    emoji: "⏰",
    gradient: "from-blue-500 to-cyan-500",
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">⏰</span>
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">AI-Driven Scheduler</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          Smart scheduling with <Highlight>adaptive timers and intelligent notifications</Highlight> that learn your
          patterns and optimize your day.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Wellness & Mood",
    designation: "Mental Health",
    emoji: "🎧",
    gradient: "from-green-500 to-teal-500",
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🎧</span>
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Mood & Relaxation</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          Track your emotional patterns with <Highlight>mood analytics and curated relaxation audios</Highlight> for
          stress management and mindfulness.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    name: "Self-Reflection",
    designation: "Personal Growth",
    emoji: "🧠",
    gradient: "from-purple-500 to-pink-500",
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🧠</span>
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Journaling & Insights</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          Digital journaling with <Highlight>reflective graphs and progress tracking</Highlight> to understand your ADHD
          patterns better.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    name: "Task Management",
    designation: "Productivity",
    emoji: "✅",
    gradient: "from-indigo-500 to-blue-500",
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">✅</span>
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Smart Task Breakdown</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          Break complex tasks into manageable steps with <Highlight>distraction-hiding features</Highlight> to maintain
          focus and momentum.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    name: "Support Network",
    designation: "Family & Care",
    emoji: "👥",
    gradient: "from-amber-500 to-orange-500",
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">👥</span>
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Parent & Therapist Modes</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          Dedicated interfaces for <Highlight>parents and therapists</Highlight> to monitor progress and provide
          targeted support.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    name: "Community",
    designation: "Social Support",
    emoji: "💬",
    gradient: "from-rose-500 to-pink-500",
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">💬</span>
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Community & Groups</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          Connect with others through <Highlight>secure messaging and support groups</Highlight> for shared experiences
          and encouragement.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    name: "Learning Hub",
    designation: "Education",
    emoji: "📘",
    gradient: "from-violet-500 to-purple-500",
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">📘</span>
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Educational Resources</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          Access <Highlight>expert articles, research-backed blogs</Highlight> and educational content tailored for ADHD
          understanding.
        </p>
      </div>
    ),
  },
]
