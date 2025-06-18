"use client"
import { useEffect, useState, type RefObject } from "react"
import type React from "react"
import { motion, useScroll, useTransform } from "motion/react"
import Button from "./button2"

type Feature = {
  icon: React.ReactNode
  text: string
}

type Card = {
  id: number
  name: string
  designation: string
  emoji: string
  gradient: string
  content: React.ReactNode
  features: Feature[]
  price?: string
  images?: string[]
  button?: {
    label: string
    bgcolor: string
    hovercolor: string
  }
}

export const CardStack = ({
  items = [],
  offset = 10,
  containerRef,
}: {
  items?: Card[]
  offset?: number
  containerRef: RefObject<HTMLDivElement | null>
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const delayedProgress = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 0, 1])
  const cardProgress = useTransform(delayedProgress, [0, 1], [0, Math.max(0, items.length - 1)])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    if (items.length === 0) return

    return cardProgress.onChange((latest) => {
      const newIndex = Math.max(0, Math.min(Math.floor(latest), items.length - 1))
      setCurrentCardIndex(newIndex)
    })
  }, [cardProgress, items.length])

  if (!items || items.length === 0) {
    return (
      <div className="relative h-[28rem] w-80 md:h-[30rem] md:w-96 flex items-center justify-center">
        <p className="text-slate-500">No cards to display</p>
      </div>
    )
  }

  const visibleCards = currentCardIndex + 1
  const getImageClassName = (imageIndex: number, cardId: number) => {
    const imageClassSets = {
      0: [
        "relative left-50 size-24",
        "relative left-25 size-24 w-40",
        "size-24 w-30",
      ],
      1: [
        "relative left-40 size-24 w-30",
        "relative left-20 size-24 w-40",
        "size-24",
      ],
      2: [
        "relative left-47 size-24 w-35",
        "relative left-23 size-24 w-40",
        "size-24 w-35",
      ],
      3: [
        "relative left-35 size-24 w-30",
        "relative left-18 size-24 w-35",
        "size-24 w-30",
      ],
      4: [
        "relative left-40 size-24 w-25",
        "relative -top-5 left-25 size-30 w-25",
        "size-24 w-35",
      ],
      5: [
        "relative left-40 size-30 w-30",
        "relative left-30 size-30 w-30",
        "relative left-10 size-30 w-40",
      ],
      6: [
        "relative -top-5 left-15 size-30 w-40",
        "relative -top-5 left-0 size-24 w-60",
      ],
      7: [
        "relative -top-5 left-35 size-40 w-40",
        "relative -top-6 left-15 size-30 w-30",
        "relative -top-5 left-0 size-30 w-30",
      ],
    }
    return imageClassSets[cardId as keyof typeof imageClassSets]?.[imageIndex] || "relative w-20 h-20 rounded-lg"
  }
  return (
    <div className="relative h-[28rem] w-80 md:h-[30rem] md:w-96">
      {items.map((card, index) => {
        const isVisible = index === 0 || index < visibleCards
        const isHovered = hoveredCard === index
        const gradientMap: Record<string, string> = {
          "from-red-500 to-orange-500": "bg-gradient-to-r from-red-500 to-orange-500",
          "from-blue-500 to-cyan-500": "bg-gradient-to-r from-blue-500 to-cyan-500",
          "from-green-500 to-teal-500": "bg-gradient-to-r from-green-500 to-teal-500",
          "from-purple-500 to-pink-500": "bg-gradient-to-r from-purple-500 to-pink-500",
          "from-indigo-500 to-blue-500": "bg-gradient-to-r from-indigo-500 to-blue-500",
          "from-amber-500 to-orange-500": "bg-gradient-to-r from-amber-500 to-orange-500",
          "from-rose-500 to-pink-500": "bg-gradient-to-r from-rose-500 to-pink-500",
          "from-violet-500 to-purple-500": "bg-gradient-to-r from-violet-500 to-purple-500",
        }
        const headerGradient = gradientMap[card.gradient] || "bg-gradient-to-r from-blue-500 to-cyan-500"
        const accentColor = card.gradient.includes("blue")
          ? "bg-blue-500"
          : card.gradient.includes("red")
            ? "bg-red-500"
            : card.gradient.includes("green")
              ? "bg-green-500"
              : card.gradient.includes("purple")
                ? "bg-purple-500"
                : card.gradient.includes("indigo")
                  ? "bg-indigo-500"
                  : card.gradient.includes("amber")
                    ? "bg-amber-500"
                    : card.gradient.includes("rose")
                      ? "bg-rose-500"
                      : card.gradient.includes("violet")
                        ? "bg-violet-500"
                        : "bg-cyan-500"
        return (
          <motion.div
            key={card.id}
            className="absolute -top-10 -left-35 bg-white dark:bg-slate-900 h-[28rem] w-80 md:h-[30rem] md:w-200 rounded-xl border-[0.35em] border-slate-900 dark:border-white shadow-[0.7em_0.7em_0_rgba(0,0,0,0.8)] dark:shadow-[0.7em_0.7em_0_rgba(255,255,255,0.2)] overflow-hidden cursor-pointer"
            initial={{ y: index === 0 ? 0 : 100, x: 0, opacity: index === 0 ? 1 : 0, scale: 1, zIndex: index + 1 }}
            animate={{
              y: isVisible ? index * offset : 100,
              x: isVisible ? -index * offset : 0,
              opacity: isVisible ? 1 : 0,
              scale: isHovered ? 1.02 : 1,
              zIndex: isHovered ? 999 : index + 1,
              rotateY: isHovered ? 5 : 0,
              rotateX: isHovered ? -2 : 0,
            }}
            whileHover={{
              y: isVisible ? index * offset - 10 : 100,
              x: isVisible ? -index * offset + 5 : 0,
              boxShadow: isVisible ? "1em 1em 0 rgba(0, 0, 0, 0.8)" : "none",
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:0.5em_0.5em] opacity-50 pointer-events-none z-[1]" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:1em_1em] bg-[position:-0.5em_-0.5em] opacity-0 hover:opacity-100 transition-opacity duration-400 pointer-events-none z-[1]" />
            <div className="absolute top-0 right-0 w-16 h-16 bg-teal-400 dark:bg-teal-600 transform rotate-45 translate-x-6 -translate-y-6 z-[1]" />
            <div className="absolute top-2 right-2 text-xl font-bold z-[2]">★</div>
            <div
              className={`relative p-5 ${headerGradient} text-white font-extrabold text-lg flex justify-between items-center border-b-[0.35em] border-slate-900 dark:border-white uppercase tracking-wider z-[2] overflow-hidden`}
            >
              <div className="relative z-10">{card.name}</div>
              <div className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white text-xs font-extrabold py-1 px-3 border-[0.15em] border-slate-900 dark:border-white rounded shadow-[0.2em_0.2em_0_rgba(0,0,0,0.8)] dark:shadow-[0.2em_0.2em_0_rgba(255,255,255,0.2)] uppercase tracking-widest transform rotate-3 transition-transform duration-300 hover:rotate-[-2deg] hover:scale-110">
                {card.designation}
              </div>
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_0.5em,transparent_0.5em,transparent_1em)] pointer-events-none opacity-30" />
            </div>
            <div className="relative p-6 z-[2]">
              <div className="mb-6 text-slate-800 dark:text-slate-200 text-sm leading-relaxed font-medium">
                {card.content}
              </div>
              <div className="flex justify-between items-center mb-6 px-2">
                {card.features?.slice(0, 3).map((feature, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-110"
                  >
                    <div
                      className={`w-10 h-10 flex items-center justify-center ${accentColor.replace("bg-", "bg-").replace("500", "500")} border-[0.15em] border-slate-900 dark:border-white rounded-lg shadow-[0.2em_0.2em_0_rgba(0,0,0,0.2)] transition-all duration-200 hover:rotate-[-5deg]`}
                    >
                      <span className="text-white text-lg">{feature.icon}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 text-center max-w-[4rem]">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-6 pt-5 border-t-[0.15em] border-dashed border-slate-200 dark:border-slate-700 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 rotate-90 bg-white dark:bg-slate-900 px-2 text-slate-400">
                  ✂
                </div>
                {card.button && (
                  <Button label={card.button.label} bgcolor={card.button.bgcolor} hovercolor={card.button.hovercolor} />
                )}
                {card.images?.map((src, i) => (
                  <img
                    key={i}
                    src={src || "/placeholder.svg"}
                    className={getImageClassName(i, card.id)}
                    alt={`Feature ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute bottom-8 left-[-2em] w-32 h-16 opacity-30 transform rotate-[-10deg] pointer-events-none z-[1]">
              <svg viewBox="0 0 80 40" className="w-full h-full">
                {[...Array(4)].map((_, i) => (
                  <circle key={i} fill="#000" r={3} cy={10} cx={10 + i * 20} />
                ))}
                {[...Array(3)].map((_, i) => (
                  <circle key={4 + i} fill="#000" r={3} cy={20} cx={20 + i * 20} />
                ))}
                {[...Array(4)].map((_, i) => (
                  <circle key={7 + i} fill="#000" r={3} cy={30} cx={10 + i * 20} />
                ))}
              </svg>
            </div>
            <div
              className={`absolute w-10 h-10 ${accentColor} border-[0.15em] border-slate-900 dark:border-white rounded transform rotate-45 -bottom-5 right-8 z-0 transition-transform duration-300 group-hover:rotate-[55deg] group-hover:scale-110`}
            />
            <div className="absolute bottom-0 left-0 w-6 h-6 bg-white dark:bg-slate-900 border-r-[0.25em] border-t-[0.25em] border-slate-900 dark:border-white rounded-tr-lg z-[1]" />
          </motion.div>
        )
      })}
    </div>
  )
}
