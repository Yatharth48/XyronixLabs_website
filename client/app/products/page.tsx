"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Products</h1>
          <p className="text-gray-400 text-lg">
            Cutting-edge fire safety solutions designed to protect what matters most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <div className="relative h-48 mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription className="text-gray-400">{product.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const products = [
  {
    name: "FireGuard Pro",
    shortDescription: "Early Warning Detection System",
    image: "/placeholder.svg",
    features: [
      "Advanced smoke and heat detection",
      "Real-time monitoring",
      "Mobile app integration",
      "24/7 alert system",
    ],
  },
  {
    name: "SmartSuppress X1",
    shortDescription: "Automated Fire Suppression",
    image: "/placeholder.svg",
    features: [
      "Intelligent fire suppression",
      "Environmental-friendly agents",
      "Minimal damage to equipment",
      "Rapid response time",
    ],
  },
  {
    name: "SafeZone Controller",
    shortDescription: "Central Management System",
    image: "/placeholder.svg",
    features: ["Centralized monitoring", "Multi-location support", "Custom alert protocols", "Analytics dashboard"],
  },
]

