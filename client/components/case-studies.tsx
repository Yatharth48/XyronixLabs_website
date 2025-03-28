"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevCase = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src={caseStudies[activeIndex].image || "/placeholder.svg"}
                alt={caseStudies[activeIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600 rounded-full text-xs font-medium text-white">
                {caseStudies[activeIndex].category}
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-3 text-white">{caseStudies[activeIndex].title}</h3>
              <p className="text-gray-300 mb-4">{caseStudies[activeIndex].description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">CHALLENGES</h4>
                <ul className="space-y-2">
                  {caseStudies[activeIndex].challenges.map((challenge, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start text-sm text-gray-300"
                    >
                      <span className="mr-2 text-purple-400">•</span> {challenge}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">SOLUTION</h4>
                <p className="text-sm text-gray-300">{caseStudies[activeIndex].solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">RESULTS</h4>
                <ul className="space-y-2">
                  {caseStudies[activeIndex].results.map((result, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start text-sm text-gray-300"
                    >
                      <span className="mr-2 text-green-400">•</span> {result}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {caseStudies[activeIndex].technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" onClick={prevCase}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-purple-500" : "bg-gray-600"}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={nextCase}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

const caseStudies = [
  {
    title: "Smart Fire Detection & Suppression System",
    category: "Safety & Security",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "An intelligent system that combines early fire detection with autonomous suppression capabilities for industrial environments.",
    challenges: [
      "Traditional fire detection systems had high false alarm rates",
      "Delayed response times in critical situations",
      "Limited effectiveness in large industrial spaces",
      "High maintenance requirements",
    ],
    solution:
      "We developed an IoRT solution that integrates thermal imaging, AI-based detection algorithms, and autonomous suppression robots. The system continuously monitors the environment, identifies potential fire hazards with high accuracy, and deploys targeted suppression when necessary.",
    results: [
      "99.8% accuracy in fire detection with near-zero false positives",
      "Response time reduced by 78% compared to traditional systems",
      "Maintenance costs reduced by 45%",
      "Potential property damage reduced by an estimated 65%",
    ],
    technologies: ["Computer Vision", "Thermal Imaging", "Edge AI", "Autonomous Robotics", "Cloud Analytics"],
  },
  {
    title: "Autonomous Warehouse Management System",
    category: "Logistics & Supply Chain",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A comprehensive IoRT solution that transforms warehouse operations through intelligent automation and real-time optimization.",
    challenges: [
      "Inefficient inventory management and tracking",
      "Labor-intensive picking and packing processes",
      "Suboptimal space utilization",
      "Difficulty scaling operations during peak periods",
    ],
    solution:
      "Our integrated system combines autonomous mobile robots, IoT-enabled shelving, and AI-powered inventory management. The solution optimizes picking routes, automates repetitive tasks, and provides real-time visibility into inventory levels and warehouse operations.",
    results: [
      "Operational efficiency improved by 62%",
      "Order fulfillment time reduced by 47%",
      "Inventory accuracy increased to 99.9%",
      "Labor costs reduced by 35% while increasing throughput",
    ],
    technologies: ["Autonomous Mobile Robots", "RFID Tracking", "Machine Learning", "Cloud Computing", "Digital Twin"],
  },
  {
    title: "Smart Agricultural Monitoring System",
    category: "Agriculture",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "An IoRT solution that revolutionizes farming practices through precision monitoring, analysis, and automated intervention.",
    challenges: [
      "Inefficient water and resource usage",
      "Difficulty monitoring large agricultural areas",
      "Unpredictable crop diseases and pest infestations",
      "Labor-intensive monitoring and maintenance",
    ],
    solution:
      "We created a network of soil sensors, weather stations, and autonomous drones that continuously monitor crop health, soil conditions, and environmental factors. The system uses AI to analyze data, predict potential issues, and automatically adjust irrigation and nutrient delivery.",
    results: [
      "Water usage reduced by 30% while improving crop yields",
      "Early pest detection improved by 85%",
      "Fertilizer and pesticide use optimized, reducing costs by 25%",
      "Crop yields increased by 22% on average",
    ],
    technologies: ["Soil Sensors", "Drone Imaging", "Weather Analytics", "Predictive AI", "Automated Irrigation"],
  },
]

