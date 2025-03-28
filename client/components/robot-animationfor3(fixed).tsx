"use client"

import { motion } from "framer-motion"
import { Cpu, Zap, Wifi, Server } from "lucide-react"

interface RobotAnimationProps {
  darkMode: boolean
}

export default function RobotAnimation({ darkMode }: RobotAnimationProps) {
  return (
    <div className="relative w-full h-full">
      {/* Robot Body */}
      <motion.div
        className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-48 ${darkMode ? "bg-gray-800" : "bg-gray-200"} rounded-xl border-2 ${darkMode ? "border-purple-600/50" : "border-purple-400/50"} shadow-lg overflow-hidden`}
        animate={{
          y: [0, -5, 0],
          rotateZ: [0, 1, 0, -1, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          ease: "easeInOut",
        }}
      >
        {/* Robot Head */}
        <motion.div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-16 ${darkMode ? "bg-gray-700" : "bg-gray-300"} rounded-lg border-2 ${darkMode ? "border-purple-600/50" : "border-purple-400/50"}`}
          animate={{
            rotateZ: [0, 2, 0, -2, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          {/* Robot Eyes */}
          <div className="flex justify-center space-x-4 mt-3">
            <motion.div
              className="w-3 h-3 rounded-full bg-cyan-400"
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-cyan-400"
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />
          </div>

          {/* Robot Mouth */}
          <motion.div
            className={`mt-3 mx-auto w-10 h-1 ${darkMode ? "bg-gray-500" : "bg-gray-400"} rounded-full`}
            animate={{
              width: [10, 15, 10],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Robot Body Details */}
        <div className="absolute top-8 left-0 right-0 bottom-0 p-4 flex flex-col justify-between">
          {/* Control Panel */}
          <div className="grid grid-cols-2 gap-2">
            <motion.div
              className={`p-2 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-300"} flex items-center justify-center`}
              animate={{
                backgroundColor: darkMode
                  ? ["rgba(55, 65, 81, 1)", "rgba(55, 65, 81, 0.7)", "rgba(55, 65, 81, 1)"]
                  : ["rgba(209, 213, 219, 1)", "rgba(209, 213, 219, 0.7)", "rgba(209, 213, 219, 1)"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <Cpu className="h-4 w-4 text-purple-500" />
            </motion.div>
            <motion.div
              className={`p-2 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-300"} flex items-center justify-center`}
              animate={{
                backgroundColor: darkMode
                  ? ["rgba(55, 65, 81, 1)", "rgba(55, 65, 81, 0.7)", "rgba(55, 65, 81, 1)"]
                  : ["rgba(209, 213, 219, 1)", "rgba(209, 213, 219, 0.7)", "rgba(209, 213, 219, 1)"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Zap className="h-4 w-4 text-yellow-500" />
            </motion.div>
            <motion.div
              className={`p-2 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-300"} flex items-center justify-center`}
              animate={{
                backgroundColor: darkMode
                  ? ["rgba(55, 65, 81, 1)", "rgba(55, 65, 81, 0.7)", "rgba(55, 65, 81, 1)"]
                  : ["rgba(209, 213, 219, 1)", "rgba(209, 213, 219, 0.7)", "rgba(209, 213, 219, 1)"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Wifi className="h-4 w-4 text-cyan-500" />
            </motion.div>
            <motion.div
              className={`p-2 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-300"} flex items-center justify-center`}
              animate={{
                backgroundColor: darkMode
                  ? ["rgba(55, 65, 81, 1)", "rgba(55, 65, 81, 0.7)", "rgba(55, 65, 81, 1)"]
                  : ["rgba(209, 213, 219, 1)", "rgba(209, 213, 219, 0.7)", "rgba(209, 213, 219, 1)"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <Server className="h-4 w-4 text-green-500" />
            </motion.div>
          </div>

          {/* Status Indicator */}
          <motion.div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden mt-4">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
              animate={{
                width: ["0%", "100%", "0%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "linear",
              }}
            />
          </motion.div>

          {/* Robot Arms */}
          <div className="flex justify-between mt-4">
            {/* Left Arm */}
            <motion.div
              className={`w-2 h-12 ${darkMode ? "bg-gray-700" : "bg-gray-300"} rounded-full origin-top`}
              animate={{
                rotateZ: [0, 15, 0, -15, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              <motion.div
                className={`w-4 h-4 rounded-full ${darkMode ? "bg-gray-600" : "bg-gray-400"} absolute -bottom-2 -left-1`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Right Arm */}
            <motion.div
              className={`w-2 h-12 ${darkMode ? "bg-gray-700" : "bg-gray-300"} rounded-full origin-top`}
              animate={{
                rotateZ: [0, -15, 0, 15, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              <motion.div
                className={`w-4 h-4 rounded-full ${darkMode ? "bg-gray-600" : "bg-gray-400"} absolute -bottom-2 -left-1`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Robot Legs */}
      <motion.div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-32 flex space-x-6">
        {/* Left Leg */}
        <motion.div
          className={`w-3 h-14 ${darkMode ? "bg-gray-700" : "bg-gray-300"} rounded-full origin-top`}
          animate={{
            rotateZ: [0, 5, 0, -5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className={`w-6 h-3 ${darkMode ? "bg-gray-600" : "bg-gray-400"} rounded-md absolute -bottom-2 -left-1.5`}
          />
        </motion.div>

        {/* Right Leg */}
        <motion.div
          className={`w-3 h-14 ${darkMode ? "bg-gray-700" : "bg-gray-300"} rounded-full origin-top`}
          animate={{
            rotateZ: [0, -5, 0, 5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className={`w-6 h-3 ${darkMode ? "bg-gray-600" : "bg-gray-400"} rounded-md absolute -bottom-2 -left-1.5`}
          />
        </motion.div>
      </motion.div>

      {/* Robot Shadow */}
      <motion.div
        className={`absolute left-1/2 bottom-0 transform -translate-x-1/2 w-32 h-4 ${darkMode ? "bg-purple-900/30" : "bg-purple-300/30"} rounded-full blur-md`}
        animate={{
          width: [120, 140, 120],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${darkMode ? "bg-purple-500/40" : "bg-purple-400/40"}`}
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Data Transmission Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(3)].map((_, i) => {
          const startX = 50 + (i * 10 - 10)
          return (
            <motion.path
              key={i}
              d={`M ${startX} 30 C ${startX + 20} 50, ${startX - 20} 70, ${startX} 90`}
              stroke={darkMode ? "rgba(139, 92, 246, 0.3)" : "rgba(139, 92, 246, 0.2)"}
              strokeWidth="1"
              strokeDasharray="5,5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3 + i,
                delay: i * 0.5,
                ease: "linear",
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}

