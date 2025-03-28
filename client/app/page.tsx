"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { StatsSection } from "@/components/stats-section1"
import { ImpactChart } from "@/components/impact-chart1"
import { TechnologyShowcase } from "@/components/technology-showcase"
import { IoRTExplainer } from "@/components/iort-explainer"
import { CaseStudies } from "@/components/case-studies"
import { Brain, Cpu, Cloud, Cog, Building2, Factory, Hospital, Car, ShieldCheck, Home as LucideHome } from "lucide-react"
// Remove the IndustryImpact import since we're using ImpactChart directly

const industries = [
  {
    title: "Manufacturing",
    description: "Transforming production lines with intelligent automation and predictive maintenance",
    icon: <Factory className="h-6 w-6 text-purple-400" />,
    applications: [
      "Autonomous quality control systems",
      "Predictive maintenance robots",
      "Collaborative assembly automation",
      "Supply chain optimization",
    ],
  },
  {
    title: "Healthcare",
    description: "Enhancing patient care and medical operations through smart robotic systems",
    icon: <Hospital className="h-6 w-6 text-purple-400" />,
    applications: [
      "Surgical assistance robots",
      "Autonomous patient monitoring",
      "Medical supply delivery systems",
      "Rehabilitation robotics",
    ],
  },
  {
    title: "Smart Cities",
    description: "Building safer, more efficient urban environments with interconnected systems",
    icon: <Building2 className="h-6 w-6 text-purple-400" />,
    applications: [
      "Intelligent traffic management",
      "Autonomous waste collection",
      "Environmental monitoring networks",
      "Emergency response systems",
    ],
  },
  {
    title: "Transportation",
    description: "Revolutionizing mobility with autonomous vehicles and smart logistics",
    icon: <Car className="h-6 w-6 text-purple-400" />,
    applications: [
      "Autonomous delivery fleets",
      "Smart warehouse logistics",
      "Traffic flow optimization",
      "Predictive vehicle maintenance",
    ],
  },
  {
    title: "Home Automation",
    description: "Creating smarter, more responsive living spaces for enhanced comfort and efficiency",
    icon: <span className="h-6 w-6 text-purple-400"><LucideHome /></span>,
    applications: [
      "Domestic assistance robots",
      "Intelligent energy management",
      "Automated security systems",
      "Personalized environment control",
    ],
  },
  {
    title: "Security & Safety",
    description: "Protecting people and assets with advanced monitoring and response systems",
    icon: <ShieldCheck className="h-6 w-6 text-purple-400" />,
    applications: [
      "Autonomous surveillance drones",
      "Fire detection and suppression",
      "Disaster response robotics",
      "Perimeter security systems",
    ],
  },
]

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-fit object-cover z-[-1]">
        <source src="/homepagevid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to improve readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lw"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-right min-h-screen text-Justify px-4">
        <div className="max-w-3xl bg-[#0b121f] bg-opacity-70 p-8 rounded-lg shadow-lg">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Innovating Tomorrow, Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 mt-4"
          >
            Harnessing the power of the Internet of Robotic Things to solve real-world challenges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
          >
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/about">Discover Our Story</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/vision">Explore Our Vision</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* IoRT Introduction Section */}
      <section className="relative z-10 py-16 bg-[#011529] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">The Internet of Robotic Things (IoRT)</h2>
              <p className="text-gray-300 mb-4">
                IoRT represents the convergence of robotics, AI, and IoT technologies, creating intelligent systems that
                can sense, analyze, and act upon their environment without human intervention.
              </p>
              <p className="text-gray-300 mb-6">
                Unlike traditional IoT, IoRT systems incorporate physical manipulation capabilities, enabling them to
                not only monitor but also interact with and modify their surroundings.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-purple-900/30 mt-1">
                    <Brain className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">AI-Powered</h4>
                    <p className="text-sm text-gray-400">Advanced decision-making capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-purple-900/30 mt-1">
                    <Cpu className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Edge Computing</h4>
                    <p className="text-sm text-gray-400">Real-time processing at the source</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-purple-900/30 mt-1">
                    <Cloud className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cloud Integration</h4>
                    <p className="text-sm text-gray-400">Seamless data synchronization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-purple-900/30 mt-1">
                    <Cog className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Autonomous</h4>
                    <p className="text-sm text-gray-400">Self-operating capabilities</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <IoRTExplainer />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative pt-0 pb-0 z-10 py-12 bg-[#011529]">
        <div>
          <StatsSection />
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="relative z-10 py-16 bg-[#011525]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Our Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamlessly integrating cutting-edge technologies to create innovative solutions
            </p>
          </motion.div>
          <TechnologyShowcase />
        </div>
      </section>

      {/* Impact Chart Section */}
      <section className="relative w-full pl-0 pr-0 bg-[#011519] bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-6 pt-0 b-2">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Industry Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Transforming industries through IoRT innovation</p>
          </motion.div>
          <ImpactChart />
        </div>
      </section>

      {/* Industry Applications */}
      <section className="relative z-10 py-16 bg-[#011529] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">IoRT Applications Across Industries</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how IoRT solutions are revolutionizing various sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-gray-800/80 hover:bg-gray-800/60 p-6 rounded-xl transition-all shadow-lg border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="bg-purple-900/30 rounded-full p-3 w-fit mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.applications.map((app, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <span className="mr-2 text-purple-400">•</span> {app}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="relative z-10 py-12 bg-[#011529] text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="max-w-2xl mx-auto">Join our journey and stay updated on our latest innovations.</p>
          <div className="flex justify-center mt-4 gap-4">
            <Button asChild size="lg" className="bg-[#9fef00] text-black hover:bg-blue-700 hover:text-white">
              <Link href="">Subscribe to Newsletter</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

