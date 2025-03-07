"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Gallery</h1>
          <p className="text-gray-400 text-lg">Explore our latest projects and installations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-gray-900/50 border-gray-800">
                <div className="relative h-64">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const galleryItems = [
  {
    title: "Corporate HQ Installation",
    description: "Complete fire safety system implementation for a major corporate client.",
    image: "/placeholder.svg",
  },
  {
    title: "Research Lab Setup",
    description: "Advanced detection systems in our R&D facility.",
    image: "/placeholder.svg",
  },
  {
    title: "Manufacturing Plant",
    description: "Industrial-grade fire suppression system installation.",
    image: "/placeholder.svg",
  },
  {
    title: "Data Center Protection",
    description: "Specialized fire safety solutions for sensitive equipment.",
    image: "/placeholder.svg",
  },
  {
    title: "Hospital Safety System",
    description: "Custom healthcare facility fire protection implementation.",
    image: "/placeholder.svg",
  },
  {
    title: "Smart Building Integration",
    description: "Modern fire safety systems in an intelligent building.",
    image: "/placeholder.svg",
  },
]

