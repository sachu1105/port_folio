"use client"

import { useEffect, useRef, useState } from "react"

export default function ScrollingText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height

      const startOffset = windowHeight * 1.5
      const endOffset = -elementHeight * 2
      const totalDistance = startOffset - endOffset

      if (elementTop <= startOffset && elementTop >= endOffset) {
        const progress = (startOffset - elementTop) / totalDistance
        setScrollProgress(Math.min(Math.max(progress, 0), 1))
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const text = "Ready to Rise"

  const translateX = (1 - scrollProgress) * (window.innerWidth + 600) - 800
  const opacity = Math.min(scrollProgress * 2, 1) // Fade in faster but stay visible longer

  return (
    <section
      ref={containerRef}
      className="relative min-h-[40vh]  overflow-hidden flex items-center justify-center px-4"
    >
      <div className="relative w-full max-w-full">
        <div
          className="relative whitespace-nowrap"
          style={{
            transform: `translateX(${translateX}px)`,
            opacity: opacity,
            transition: "none", 
          }}
        >
          <h1
            className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-black leading-none tracking-tight"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            {text}
          </h1>
        </div>

       
      </div>
    </section>
  )
}
