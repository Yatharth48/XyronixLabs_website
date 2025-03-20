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
      
      <section className="relative z-10 py-16 bg-[#0b121f] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Our Research & Innovation
          </h2>
        </div>
      </section>



      <section className="relative z-10 py-12 bg-[#011529] text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="max-w-2xl mx-auto">
            Join our journey and stay updated on our latest innovations.
          </p>
          <div className="flex justify-center mt-4 gap-4">
            <Button asChild size="lg" className="bg-[#9fef00] text-black hover:bg-blue-700 hover:text-white">
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
