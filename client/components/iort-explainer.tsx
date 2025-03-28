"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Brain, Cpu, Cloud, Wifi, BotIcon as Robot, Database, Zap } from "lucide-react"

export function IoRTExplainer() {
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAnimating(true)
        }
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-[400px] md:h-[500px] bg-gradient-to-b from-gray-900/50 to-purple-900/20 rounded-xl overflow-hidden border border-purple-900/30"
    >
      {/* Central Robot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isAnimating ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <div className="p-4 bg-purple-900/50 rounded-full">
            <Robot className="h-16 w-16 text-purple-400" />
          </div>
          <motion.div
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={isAnimating ? { opacity: [0.3, 0.6, 0.3], scale: [0.8, 1.2, 0.8] } : {}}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border-2 border-purple-500/30"
          />
        </div>
      </motion.div>

      {/* Connected Components */}
      {ioTComponents.map((component, index) => {
        const angle = (index * (2 * Math.PI)) / ioTComponents.length
        const radius = 150
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={isAnimating ? { opacity: 1, x, y } : {}}
            transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="p-3 bg-gray-800/80 rounded-full">{component.icon}</div>
            <motion.div
              initial={{ width: 0 }}
              animate={isAnimating ? { width: "100%" } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="absolute top-1/2 left-1/2 h-0.5 bg-purple-500/50 origin-left"
              style={{
                width: Math.sqrt(x * x + y * y),
                transform: `rotate(${Math.atan2(y, x)}rad)`,
              }}
            />
          </motion.div>
        )
      })}

      {/* Data Flow Animation */}
      {isAnimating &&
        ioTComponents.map((_, index) => {
          const angle = (index * (2 * Math.PI)) / ioTComponents.length
          const radius = 150
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <motion.div
              key={`data-${index}`}
              className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-cyan-400"
              initial={{ x: x, y: y }}
              animate={{ x: 0, y: 0 }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                delay: index * 0.5,
                ease: "linear",
              }}
            />
          )
        })}

      
    </div>
  )
}

const ioTComponents = [
  { icon: <Brain className="h-6 w-6 text-cyan-400" /> },
  { icon: <Cpu className="h-6 w-6 text-cyan-400" /> },
  { icon: <Cloud className="h-6 w-6 text-cyan-400" /> },
  { icon: <Wifi className="h-6 w-6 text-cyan-400" /> },
  { icon: <Database className="h-6 w-6 text-cyan-400" /> },
  { icon: <Zap className="h-6 w-6 text-cyan-400" /> },
]

