"use client"
import { useEffect, useState, type RefObject } from "react"
import type React from "react"

import { motion, useScroll, useTransform } from "motion/react"

type Card = {
  id: number
  name: string
  designation: string
  emoji: string
  gradient: string
  content: React.ReactNode
}

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
  containerRef,
}: {
  items: Card[]
  offset?: number
  scaleFactor?: number
  containerRef: RefObject<HTMLDivElement | null>
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const delayedProgress = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, 1])
  const cardProgress = useTransform(delayedProgress, [0, 1], [0, items.length - 1])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    return cardProgress.onChange((latest) => {
      const newIndex = Math.max(0, Math.min(Math.floor(latest), items.length - 1))
      setCurrentCardIndex(newIndex)
    })
  }, [cardProgress, items.length])
  const visibleCards = currentCardIndex + 1

  return (
    <div className="relative -top-24 h-72 w-80 md:h-90 md:w-140">
      {items.map((card, index) => {
        const isVisible = index === 0 || index < visibleCards
        const isHovered = hoveredCard === index

        return (
          <motion.div
            key={card.id}
            className="absolute bg-white dark:bg-slate-900 h-72 w-80 md:h-120 md:w-180 rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between cursor-pointer overflow-hidden"
            initial={{
              y: index === 0 ? 0 : 100,
              x: index === 0 ? 0 : 0,
              opacity: index === 0 ? 1 : 0,
              scale: 1,
              zIndex: index + 1,
            }}
            animate={{
              y: isVisible ? index * offset : 100,
              x: isVisible ? -index * offset : 0,
              opacity: isVisible ? 1 : 0,
              scale: isHovered ? 1.05 : 1,
              zIndex: isHovered ? 999 : index + 1,
              rotateY: isHovered ? 5 : 0,
              rotateX: isHovered ? -2 : 0,
            }}
            whileHover={{
              y: isVisible ? index * offset - 10 : 100,
              x: isVisible ? -index * offset + 5 : 0,
              boxShadow: isVisible ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "none",
            }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.gradient}`} />
            <div className="flex-1">{card.content}</div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <div>
                <p className="text-slate-800 dark:text-slate-200 font-semibold text-sm">{card.name}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">{card.designation}</p>
              </div>
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-r ${card.gradient} flex items-center justify-center shadow-lg`}
              >
                <span className="text-white text-lg">{card.emoji}</span>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
