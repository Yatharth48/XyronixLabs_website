"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Research & Insights</h1>
          <p className="text-gray-400 text-lg">
            Exploring the future of fire safety through innovative research and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <div className="relative h-48 mb-4">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="text-gray-400">{article.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 line-clamp-3">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read More
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

const articles = [
  {
    title: "Advancing Early Fire Detection Through AI",
    date: "February 2024",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing fire detection systems and improving response times.",
    image: "/placeholder.svg",
  },
  {
    title: "Environmental Impact of Modern Fire Suppression Agents",
    date: "January 2024",
    excerpt:
      "Research into eco-friendly fire suppression solutions that maintain effectiveness while reducing environmental impact.",
    image: "/placeholder.svg",
  },
  {
    title: "IoT Integration in Fire Safety Systems",
    date: "December 2023",
    excerpt:
      "How Internet of Things technology is enhancing fire safety system connectivity and monitoring capabilities.",
    image: "/placeholder.svg",
  },
]

