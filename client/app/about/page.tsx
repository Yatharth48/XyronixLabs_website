"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-gray-400 text-lg">
            Leading innovation in fire safety technology and research for a safer tomorrow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-400 mb-4 text-justify">
              Xyronix Labs is a forward-thinking technology company dedicated to innovation in AI, IoT, robotics, and data science. We aim to bridge the gap between cutting-edge technology and real-world applications, creating solutions that enhance lives and businesses. One of our flagship products, the Fire Early Warning and Detection System, ensures safety with advanced AI and IoT capabilities, offering early fire detection, precise localization, and efficient suppression.

              Our scalable and reliable solutions cater to diverse industries, including residential, commercial, and industrial sectors. By leveraging intelligent systems powered by neural networks and robust cloud-based platforms, we strive to drive efficiency, safety, and sustainable growth. Guided by the vision of a smarter and safer tomorrow, we focus on creating impactful technologies that embody our motto, Future is Here.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-[300px]"
          >
            <Image src="/placeholder.svg" alt="Lab Research" fill className="object-cover rounded-lg" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-gray-900/50 p-6 rounded-lg"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const team = [
  {
    name: "Aditya Seth",
    role: "Founder & CEO",
    image: "/Aditya.jpg",
  },
  {
    name: "Hemaang Mehra",
    role: "Co-Founder & COO",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Sanjeev Seth",
    role: "Senior Advisor",
    image: "/placeholder.svg",
  },
]

