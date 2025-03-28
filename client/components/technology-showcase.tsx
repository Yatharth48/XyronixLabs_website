"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Cpu, Cloud, Wifi, BotIcon as Robot, Cog, Zap, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TechnologyShowcase() {
  const [activeCategory, setActiveCategory] = useState("ai")

  return (
    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`${
              activeCategory === category.id ? "bg-purple-600 hover:bg-purple-700" : "bg-transparent hover:bg-gray-800"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon}
            <span className="ml-2">{category.name}</span>
          </Button>
        ))}
      </div>

      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {categories.map(
            (category) =>
              activeCategory === category.id && (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{category.name}</h3>
                    <p className="text-gray-300 mb-6">{category.description}</p>
                    <ul className="space-y-3">
                      {category.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      {category.visualization}
                    </motion.div>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      
    </div>
  )
}

const AIVisualization = () => (
  <div className="relative h-64 w-64">
    <div className="absolute inset-0 rounded-full bg-purple-900/20 animate-pulse"></div>
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        rotateY: [0, 180, 360],
      }}
      transition={{
        duration: 10,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <Brain className="h-24 w-24 text-purple-400" />
    </motion.div>
    {[...Array(8)].map((_, i) => {
      const angle = (i * Math.PI) / 4
      const x = Math.cos(angle) * 80
      const y = Math.sin(angle) * 80

      return (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-purple-500"
          style={{
            x: x,
            y: y,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            delay: i * 0.25,
            ease: "easeInOut",
          }}
        />
      )
    })}
  </div>
)

const IoTVisualization = () => (
  <div className="relative h-64 w-64">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="absolute inset-0"
    >
      {[...Array(12)].map((_, i) => {
        const angle = (i * Math.PI) / 6
        const radius = 80
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-cyan-400"
            style={{
              x: x,
              y: y,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              delay: i * 0.2,
            }}
          />
        )
      })}
    </motion.div>
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>
        <Wifi className="h-24 w-24 text-cyan-400" />
      </motion.div>
    </div>
  </div>
)

const RoboticsVisualization = () => (
  <div className="relative h-64 w-64">
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <Robot className="h-32 w-32 text-yellow-400" />
    </motion.div>
    <motion.div
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      className="absolute inset-0 rounded-full border-2 border-yellow-500/30"
    />
    <motion.div
      animate={{ opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
      className="absolute inset-0 rounded-full border-2 border-yellow-500/20"
    />
  </div>
)

const CloudVisualization = () => (
  <div className="relative h-64 w-64">
    <motion.div
      animate={{
        y: [0, -5, 0, 5, 0],
        x: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <Cloud className="h-24 w-24 text-blue-400" />
    </motion.div>
    {[...Array(20)].map((_, i) => {
      const top = Math.random() * 100
      const left = Math.random() * 100
      const size = Math.random() * 4 + 1

      return (
        <motion.div
          key={i}
          className="absolute bg-blue-300/30 rounded-full"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: size,
            height: size,
          }}
          animate={{
            y: [0, -20],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
          }}
        />
      )
    })}
  </div>
)

const ElectronicsVisualization = () => (
  <div className="relative h-64 w-64">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="absolute inset-0"
    >
      {[...Array(8)].map((_, i) => {
        const angle = (i * Math.PI) / 4
        const radius = 70
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-green-400"
            style={{
              x: x,
              y: y,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              delay: i * 0.25,
            }}
          />
        )
      })}
    </motion.div>
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>
        <Cpu className="h-24 w-24 text-green-400" />
      </motion.div>
    </div>
  </div>
)

const MechanicalVisualization = () => (
  <div className="relative h-64 w-64">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <Cog className="h-32 w-32 text-orange-400" />
    </motion.div>
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="absolute inset-0 flex items-center justify-center"
      style={{ transform: "translate(40px, -20px)" }}
    >
      <Cog className="h-20 w-20 text-orange-300" />
    </motion.div>
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="absolute inset-0 flex items-center justify-center"
      style={{ transform: "translate(-40px, 30px)" }}
    >
      <Cog className="h-16 w-16 text-orange-500" />
    </motion.div>
  </div>
)

const categories = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    icon: <Brain className="h-4 w-4" />,
    description:
      "Our AI systems leverage deep learning and neural networks to enable machines to perceive, learn, and make decisions with minimal human intervention.",
    features: [
      "Advanced neural networks for pattern recognition",
      "Natural language processing for human-machine interaction",
      "Computer vision systems for environmental awareness",
      "Reinforcement learning for adaptive behavior",
      "Predictive analytics for anticipatory actions",
    ],
    visualization: <AIVisualization />,
  },
  {
    id: "iot",
    name: "Internet of Things",
    icon: <Wifi className="h-4 w-4" />,
    description:
      "Our IoT infrastructure creates a network of interconnected devices that collect, share, and act on data in real-time across various environments.",
    features: [
      "Low-power, high-reliability sensor networks",
      "Secure data transmission protocols",
      "Edge computing for reduced latency",
      "Scalable device management systems",
      "Interoperable communication standards",
    ],
    visualization: <IoTVisualization />,
  },
  {
    id: "robotics",
    name: "Robotics",
    icon: <Robot className="h-4 w-4" />,
    description:
      "Our robotic systems combine mechanical engineering, electronics, and AI to create machines capable of physical interaction with the world.",
    features: [
      "Precision actuators and control systems",
      "Advanced mobility solutions for various terrains",
      "Haptic feedback for sensitive manipulation",
      "Autonomous navigation capabilities",
      "Human-robot collaboration frameworks",
    ],
    visualization: <RoboticsVisualization />,
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    icon: <Cloud className="h-4 w-4" />,
    description:
      "Our cloud infrastructure provides the computational backbone for our IoRT systems, enabling scalable processing, storage, and analytics.",
    features: [
      "Distributed computing for high-performance processing",
      "Scalable storage solutions for big data",
      "Real-time analytics and visualization",
      "Secure multi-tenant architecture",
      "Seamless integration with edge devices",
    ],
    visualization: <CloudVisualization />,
  },
  {
    id: "electronics",
    name: "Electronics & Electrical",
    icon: <Zap className="h-4 w-4" />,
    description:
      "Our electronic systems form the nervous system of our IoRT solutions, enabling sensing, processing, and communication capabilities.",
    features: [
      "Custom sensor design for specific applications",
      "Energy-efficient circuit design",
      "Power management systems for extended operation",
      "Signal processing for noise reduction",
      "Miniaturized components for compact solutions",
    ],
    visualization: <ElectronicsVisualization />,
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    icon: <Cog className="h-4 w-4" />,
    description:
      "Our mechanical engineering expertise enables the physical implementation of our IoRT solutions, ensuring durability, efficiency, and precision.",
    features: [
      "Precision mechanical design for reliability",
      "Thermal management for optimal performance",
      "Material selection for specific environments",
      "Structural analysis for durability",
      "Ergonomic design for human interaction",
    ],
    visualization: <MechanicalVisualization />,
  },
]

