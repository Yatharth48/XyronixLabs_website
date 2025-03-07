"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, Settings, LineChart } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-gray-400 text-lg">Comprehensive fire safety solutions tailored to your needs.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 p-6 rounded-lg"
            >
              <div className="mb-4 text-purple-400">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Learn More</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const services = [
  {
    title: "System Installation",
    description: "Professional installation of fire safety systems with minimal disruption to your operations.",
    icon: <Shield className="h-8 w-8" />,
    features: [
      "Site assessment and planning",
      "Custom system design",
      "Professional installation",
      "System testing and certification",
    ],
  },
  {
    title: "Maintenance & Support",
    description: "Regular maintenance and 24/7 support to ensure your systems operate at peak performance.",
    icon: <Settings className="h-8 w-8" />,
    features: ["Scheduled maintenance", "Emergency support", "System updates", "Performance monitoring"],
  },
  {
    title: "Consulting Services",
    description: "Expert advice on fire safety strategies and compliance requirements.",
    icon: <LineChart className="h-8 w-8" />,
    features: ["Risk assessment", "Compliance review", "Safety training", "Emergency planning"],
  },
]

