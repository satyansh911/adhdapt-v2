"use client"

import React, { useState, useEffect, useId } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[]
  /** Time in milliseconds between word transitions */
  interval?: number
  /** Additional CSS classes to apply to the container */
  className?: string
  /** Additional CSS classes to apply to the text */
  textClassName?: string
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number
}

export function ContainerTextFlip({
  words = ["You're Not Doing This Alone"],
  interval = 5000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [width, setWidth] = useState("auto")
  const textRef = React.useRef<HTMLDivElement>(null)
  const [animationKey, setAnimationKey] = useState(0)

  const updateWidthForWord = () => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth + 60
      setWidth(`${textWidth}px`)
    }
  }

  useEffect(() => {
    updateWidthForWord()
  }, [currentWordIndex])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationKey((prev) => prev + 1)
    }, interval)

    return () => clearInterval(intervalId)
  }, [interval])

  return (
    <motion.div
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        "relative inline-block rounded-lg pt-4 pb-5 px-8 text-center text-xl font-bold text-black md:text-4xl lg:text-5xl dark:text-white",
        "[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]",
        "shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db]",
        "dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]",
        "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]",
        className,
      )}
      key={`${words[currentWordIndex]}-${animationKey}`}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block whitespace-nowrap", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.03,
              }}
              className={letter === " " ? "inline-block w-2" : ""}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
