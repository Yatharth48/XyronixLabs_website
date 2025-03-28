"use client"

import { motion } from "framer-motion"
import { Wifi, Server, Cloud } from "lucide-react"

interface NetworkAnimationProps {
  darkMode: boolean
}

export default function NetworkAnimation({ darkMode }: NetworkAnimationProps) {
  // Create nodes for the network
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    type: i % 3 === 0 ? "server" : i % 3 === 1 ? "wifi" : "cloud",
    connections: [],
  }))

  // Create connections between nodes
  nodes.forEach((node, i) => {
    const connectionCount = Math.floor(Math.random() * 3) + 1
    for (let j = 0; j < connectionCount; j++) {
      const targetIndex = (i + j + 1) % nodes.length
      if (targetIndex !== i) {
        node.connections.push(targetIndex)
      }
    }
  })

  return (
    <div className="relative w-full h-full">
      {/* Network Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className={`absolute ${darkMode ? "bg-gray-800/60" : "bg-gray-200/60"} rounded-lg p-2`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            y: [0, Math.random() * 10 - 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: Math.random() * 3 + 4,
            ease: "easeInOut",
          }}
        >
          {node.type === "server" ? (
            <Server className={`h-4 w-4 ${darkMode ? "text-cyan-400" : "text-cyan-500"}`} />
          ) : node.type === "wifi" ? (
            <Wifi className={`h-4 w-4 ${darkMode ? "text-purple-400" : "text-purple-500"}`} />
          ) : (
            <Cloud className={`h-4 w-4 ${darkMode ? "text-blue-400" : "text-blue-500"}`} />
          )}
        </motion.div>
      ))}

      {/* Network Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {nodes.map((node, i) =>
          node.connections.map((targetIndex, j) => {
            const targetNode = nodes[targetIndex]
            const isHorizontal = Math.random() > 0.5

            // Create path for connection
            const path = isHorizontal
              ? `M ${node.x} ${node.y} L ${(node.x + targetNode.x) / 2} ${node.y} L ${(node.x + targetNode.x) / 2} ${targetNode.y} L ${targetNode.x} ${targetNode.y}`
              : `M ${node.x} ${node.y} L ${node.x} ${(node.y + targetNode.y) / 2} L ${targetNode.x} ${(node.y + targetNode.y) / 2} L ${targetNode.x} ${targetNode.y}`

            return (
              <g key={`${i}-${j}`}>
                <motion.path
                  d={path}
                  stroke={darkMode ? "rgba(139, 92, 246, 0.2)" : "rgba(139, 92, 246, 0.15)"}
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />

                {/* Data Packet */}
                <motion.circle
                  r="3"
                  fill={darkMode ? "rgba(139, 92, 246, 0.6)" : "rgba(139, 92, 246, 0.5)"}
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: Math.random() * 3 + 5,
                    ease: "linear",
                    delay: Math.random() * 2,
                  }}
                  style={{
                    offsetPath: `path("${path}")`,
                  }}
                />
              </g>
            )
          }),
        )}
      </svg>

      {/* Background Glow */}
      <motion.div
        className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full ${darkMode ? "bg-purple-900/10" : "bg-purple-200/20"} blur-3xl`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

