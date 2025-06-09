"use client"
import { cn } from "@/lib/utils"
import type React from "react"

interface HoverRevealCardProps {
  imageSrc: string
  imageAlt?: string
  content: string | React.ReactNode
  className?: string
  imageClassName?: string
  overlayClassName?: string
  contentClassName?: string
}

export default function HoverRevealCard({
  imageSrc,
  imageAlt = "Card image",
  content,
  className,
  imageClassName,
  overlayClassName,
  contentClassName,
}: HoverRevealCardProps) {
  return (
    <div className={cn("max-w-sm w-full mx-auto", className)}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-xl shadow-lg cursor-pointer",
          "h-60 w-60",
          "transition-all duration-500 ease-in-out",
        )}
      >
        {/* Background Image */}
        <div
          className={cn(
            "absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110",
            imageClassName,
          )}
          style={{
            backgroundImage: `url('${imageSrc}')`,
          }}
        />

        {/* Overlay that appears on hover */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-500 ease-in-out",
            "flex items-center justify-center p-6",
            overlayClassName,
          )}
        >
          <div
            className={cn(
              "text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out",
              contentClassName,
            )}
          >
            {typeof content === "string" ? <p className="text-lg leading-relaxed font-medium">{content}</p> : content}
          </div>
        </div>

        {/* Optional subtle border */}
        <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none" />
      </div>
    </div>
  )
}
