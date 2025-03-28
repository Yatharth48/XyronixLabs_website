"use client"

import { motion } from "framer-motion"
import { Brain } from "lucide-react"

interface AIBrainAnimationProps {
  darkMode: boolean
}

export default function AIBrainAnimation({ darkMode }: AIBrainAnimationProps) {
  return (
    <div className="relative w-full h-full">
      {/* Neural Network Nodes */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${darkMode ? "bg-purple-500/30" : "bg-purple-400/20"}`}
          style={{
            width: Math.random() * 8 + 2,
            height: Math.random() * 8 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: Math.random() * 4 + 3,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Neural Network Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(50)].map((_, i) => {
          const x1 = Math.random() * 100
          const y1 = Math.random() * 100
          const x2 = Math.random() * 100
          const y2 = Math.random() * 100

          return (
            <motion.line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke={darkMode ? "rgba(139, 92, 246, 0.15)" : "rgba(139, 92, 246, 0.1)"}
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 3,
                ease: "linear",
              }}
            />
          )
        })}
      </svg>

      {/* Brain Pulses */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <Brain className={`h-16 w-16 ${darkMode ? "text-purple-500/30" : "text-purple-400/20"}`} />
      </motion.div>

      {/* Pulse Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border ${darkMode ? "border-purple-500/30" : "border-purple-400/20"}`}
          animate={{
            scale: [1, 2, 3],
            opacity: [0.5, 0.2, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
            delay: i * 1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Data Particles */}
      {[...Array(15)].map((_, i) => {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * 40 + 20
        const x = Math.cos(angle) * distance
        const y = Math.sin(angle) * distance

        return (
          <motion.div
            key={i}
            className={`absolute left-1/2 top-1/2 w-2 h-2 rounded-full ${darkMode ? "bg-cyan-500/50" : "bg-cyan-400/40"}`}
            style={{
              x: 0,
              y: 0,
            }}
            animate={{
              x: [0, x],
              y: [0, y],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: Math.random() * 2 + 2,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        )
      })}
    </div>
  )
}

