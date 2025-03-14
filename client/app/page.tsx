"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Video from "next-video"
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-fit object-cover z-[-1]"
      >
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

      {/* Additional Sections */}
      <section className="relative z-10 py-16 bg-[#011529] text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Story & Mission</h2>
          <p className="max-w-2xl mx-auto">
            Xyronix Labs was founded to address real-world problems using multi-domain research and sustainable, innovative solutions.
          </p>
        </div>
      </section>



      <section className="relative z-10 py-16 bg-[#0b121f] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Our Research & Innovation
          </h2>

          {/* Robotics & AI - Text on Right, Image on Left */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 min-h-screen">
            <div className="w-full md:w-1/2 relative min-h-[85vh]">
              <Image
                src="/futuristic-robot-hummingbird.jpg"
                alt="Robotics & AI"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 text-left">
              <h3 className="text-3xl font-semibold mb-4">Robotics & AI</h3>
              <p className="text-gray-300">
                We develop autonomous robotic systems that utilize AI-driven decision-making for industrial automation, healthcare, and disaster management.
              </p>
            </div>
          </div>

          {/* IoT & Smart Networks - Text on Left, Image on Right */}
          <div className="flex flex-col md:flex-row items-center mb-12 min-h-screen">
            <div className="w-full md:w-1/2 h-80 relative min-h-screen">
              <Image
                src="/images/iot-network.jpg"
                alt="IoT & Smart Networks"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pr-12 text-left">
              <h3 className="text-3xl font-semibold mb-4">IoT & Smart Networks</h3>
              <p className="text-gray-300">
                Our IoT solutions connect smart devices to create efficient, data-driven systems for smart cities, precision agriculture, and industrial monitoring.
              </p>
            </div>
          </div>

          {/* Digital Twins & Simulation - Text on Right, Image on Left */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 min-h-screen">
            <div className="w-full md:w-1/2 h-80 relative min-h-screen">
              <Image
                src="/images/digital-twin.jpg"
                alt="Digital Twins & Simulation"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 text-left">
              <h3 className="text-3xl font-semibold mb-4">Digital Twins & Simulation</h3>
              <p className="text-gray-300">
                We use digital twins to replicate real-world processes, enabling predictive analysis and enhanced system optimization in various industries.
              </p>
            </div>
          </div>

          {/* AI-Driven Cybersecurity - Text on Left, Image on Right */}
          <div className="flex flex-col md:flex-row items-center mb-12 min-h-screen">
            <div className="w-full md:w-1/2 h-80 relative min-h-screen">
              <Image
                src="/images/cybersecurity-ai.jpg"
                alt="AI-Driven Cybersecurity"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pr-12 text-left">
              <h3 className="text-3xl font-semibold mb-4">AI-Driven Cybersecurity</h3>
              <p className="text-gray-300">
                Implementing AI-powered threat detection and real-time response mechanisms to safeguard digital ecosystems from cyber threats.
              </p>
            </div>
          </div>

          {/* Sustainable Energy Solutions - Text on Right, Image on Left */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 min-h-screen">
            <div className="w-full md:w-1/2 h-80 relative min-h-screen">
              <Image
                src="/images/sustainable-energy.jpg"
                alt="Sustainable Energy Solutions"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 text-left">
              <h3 className="text-3xl font-semibold mb-4">Sustainable Energy Solutions</h3>
              <p className="text-gray-300">
                Researching innovative methods to enhance energy efficiency, including AI-powered grid optimization and renewable energy integration.
              </p>
            </div>
          </div>

          {/* Biomedical Engineering - Text on Left, Image on Right */}
          <div className="flex flex-col md:flex-row items-center min-h-screen">
            <div className="w-full md:w-1/2 h-80 relative min-h-screen">
              <Image
                src="/images/biomedical-research.jpg"
                alt="Biomedical Engineering"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pr-12 text-left">
              <h3 className="text-3xl font-semibold mb-4">Biomedical Engineering</h3>
              <p className="text-gray-300">
                Advancing medical technology with AI-assisted diagnostics, prosthetics, and bio-robotics for improved patient care and treatment solutions.
              </p>
            </div>
          </div>

        </div>
      </section>


      <section className="relative z-10 py-16 bg-[#011529] text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Impact & Vision for the Future</h2>
          <p className="max-w-2xl mx-auto">
            Our research and innovations are shaping the future, making a real impact on industries and communities.
          </p>
        </div>
      </section>

      <section className="relative z-10 py-16 bg-[#0b121f] text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Community & Collaborations</h2>
          <p className="max-w-2xl mx-auto">
            We collaborate with top research institutions and industry leaders to push the boundaries of innovation.
          </p>
        </div>
      </section>

      <section className="relative z-10 py-12 bg-[#011529] text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="max-w-2xl mx-auto">
            Join our journey and stay updated on our latest innovations.
          </p>
          <div className="flex justify-center mt-4 gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/newsletter">Subscribe to Newsletter</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
