"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ParticleBackground from "../Assets/Components/ParticleBackground"
import { Button } from "@/components/ui/button"
import { ChevronRight, BotIcon as Robot, Brain, Network, FlaskConical } from "lucide-react"

export default function Home() {
  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="../Assets/Graphics/hero.jpg"
            alt="AI Technology Background"
            className="object-cover w-full h-full opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-orange-500 mb-6">
              Xyronix Labs
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              The Future is Here
            </p>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg rounded-full">
              Explore Our Work <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 40 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Combining cutting-edge robotics with artificial intelligence to solve complex challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Robot, title: "Robotics", desc: "Advanced robotic systems development" },
              { icon: Brain, title: "AI Integration", desc: "Intelligent decision-making systems" },
              { icon: Network, title: "IoT Solutions", desc: "Connected device ecosystems" },
              { icon: FlaskConical, title: "Research", desc: "Groundbreaking scientific exploration" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
              >
                <feature.icon className="w-12 h-12 text-cyan-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Showcase */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView2 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src='../Assets/Graphics/portrait-person-ai-robot1.jpg'
                alt="Human-Robot Interaction"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Advancing Human-Robot Interaction</h2>
              <p className="text-gray-400 mb-6">
                Our research focuses on developing intuitive interfaces between humans and robots, enabling seamless
                collaboration in various applications from healthcare to manufacturing.
              </p>
              <Button variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <img
            src='../Assets/Graphics/portrait-person-ai-robot1.jpg'
            alt="AI Future"
            className="object-cover w-full h-full opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        </div>

        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 40 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Shape the Future with Us</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our team of researchers and engineers in pushing the boundaries of robotics and AI technology.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full">
              Join Our Team
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg rounded-full">
              View Publications
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  )
}