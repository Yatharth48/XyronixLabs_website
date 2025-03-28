"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Building2, Cpu, Globe, BarChart3, Zap, ShieldCheck } from "lucide-react"
import CountUp from "react-countup"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 flex flex-col items-center text-center"
          >
            <div className="p-2 rounded-full bg-purple-900/30 mb-3">{stat.icon}</div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
              {isVisible && <CountUp end={stat.value} duration={2} separator="," suffix={stat.suffix} />}
            </div>
            <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

const stats = [
  {
    value: 85,
    label: "Efficiency Increase",
    suffix: "%",
    icon: <BarChart3 className="h-5 w-5 text-purple-400" />,
  },
  {
    value: 40,
    label: "Cost Reduction",
    suffix: "%",
    icon: <Zap className="h-5 w-5 text-cyan-400" />,
  },
  {
    value: 99.9,
    label: "System Reliability",
    suffix: "%",
    icon: <ShieldCheck className="h-5 w-5 text-green-400" />,
  },
  {
    value: 12,
    label: "Industries Served",
    suffix: "+",
    icon: <Building2 className="h-5 w-5 text-yellow-400" />,
  },
  {
    value: 24,
    label: "Countries Reached",
    suffix: "+",
    icon: <Globe className="h-5 w-5 text-blue-400" />,
  },
  {
    value: 50,
    label: "IoRT Devices",
    suffix: "M+",
    icon: <Cpu className="h-5 w-5 text-red-400" />,
  },
]

