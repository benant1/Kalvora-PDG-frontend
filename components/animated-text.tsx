"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  colors?: string[]
  intervalMs?: number
}

const defaultColors = [
  "text-cyan-400",
  "text-primary dark:text-foreground",
  "text-cyan-400",
  "text-primary dark:text-foreground",
  "text-cyan-400",
  "text-primary dark:text-foreground",
]

export function AnimatedText({ text, className = "", colors = defaultColors, intervalMs = 600 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDark, setIsDark] = useState(false)
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, intervalMs)

      return () => clearTimeout(timer)
    }
    // Une fois terminé, on laisse le texte affiché (pas de boucle)
  }, [currentIndex, intervalMs, text])

  // Detect theme (dark / light) to adapt text shadow for readability
  useEffect(() => {
    const doc = document.documentElement
    rootRef.current = doc
    const check = () => setIsDark(doc.classList.contains("dark") || window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)
    check()

    // Watch for class changes on <html> (theme toggle may flip class)
    const obs = new MutationObserver(() => check())
    obs.observe(doc, { attributes: true, attributeFilter: ["class"] })

    // Also listen to media changes
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)")
    const mqHandler = () => check()
    if (mq && mq.addEventListener) mq.addEventListener("change", mqHandler)

    return () => {
      obs.disconnect()
      if (mq && mq.removeEventListener) mq.removeEventListener("change", mqHandler)
    }
  }, [])

  return (
    <span className={className}>
      {displayedText.split("").map((char, index) => {
        const colorClass = colors[index % colors.length]
        // adaptive shadow for contrast
        const textShadow = isDark
          ? "0 1px 0 rgba(255,255,255,0.06), 0 4px 18px rgba(0,0,0,0.6)"
          : "0 1px 0 rgba(0,0,0,0.6), 0 6px 24px rgba(0,0,0,0.12)"

        return (
          <span
            key={index}
            className={`${colorClass} transition-all duration-500 inline-block`}
            style={{ textShadow }}
          >
            {char}
          </span>
        )
      })}
    </span>
  )
}
