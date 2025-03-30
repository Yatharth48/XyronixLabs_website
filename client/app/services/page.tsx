"use client"

import React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useScroll, useSpring, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tilt } from "react-tilt"
import Link from "next/link"
import {
  ArrowRight,
  Shield,
  Search,
  Zap,
  Leaf,
  Flame,
  FlaskRoundIcon as Flask,
  Sprout,
  Tractor,
  Microscope,
  Home,
  Building,
  BarChart3,
  Code,
  HeartPulse,
  Award,
  CheckSquare,
  Stethoscope,
  GraduationCap,
  Beaker,
  Globe,
  Heart,
  Moon,
  Sun,
  ChevronUp,
  X,
  Filter,
  Sparkles,
  ExternalLink,
  Menu,
  ChevronRight,
} from "lucide-react"

export default function ServicesPage() {
  // State management
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredServices, setFilteredServices] = useState(services)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(true)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Refs for scroll and animations
  const servicesRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: false })
  const modalRef = useRef<HTMLDivElement>(null)

  // Scroll progress for progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Filter services based on search term and category
  useEffect(() => {
    let results = services

    if (searchTerm) {
      results = results.filter(
        (service) =>
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.features.some((feature) => feature.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    if (activeCategory) {
      results = results.filter((service) => service.category === activeCategory)
    }

    setFilteredServices(results)
  }, [searchTerm, activeCategory])

  // Update scroll progress for progress bar
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Set initial dark mode and simulate loading
  useEffect(() => {
    document.documentElement.classList.add("dark")

    // Simulate loading for a smoother experience
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Handle escape key press for modal
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedService) {
        setSelectedService(null)
      }
    }

    window.addEventListener("keydown", handleEscapeKey)
    return () => window.removeEventListener("keydown", handleEscapeKey)
  }, [selectedService])

  // Toggle dark/light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  // Scroll to section function
  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Get unique categories
  const categories = Array.from(new Set(services.map((service) => service.category)))

  // Handle service selection
  const handleServiceSelect = useCallback((service: (typeof services)[0]) => {
    setSelectedService(service)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden"
  }, [])

  // Handle modal close
  const handleModalClose = useCallback(() => {
    setSelectedService(null)
    // Restore body scrolling
    document.body.style.overflow = "auto"
  }, [])

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
            <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 border-2 border-purple-500/20"></div>
          </div>
          <p className="text-gray-300 text-lg mt-4">Loading services...</p>
          <div className="mt-2 text-gray-500 text-sm">Preparing your experience</div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "dark bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100"
          : "bg-gradient-to-b from-gray-50 to-white text-gray-900"
      } transition-colors duration-300`}
    >
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 ${darkMode ? "bg-gray-900/90" : "bg-white/90"} backdrop-blur-md transition-colors duration-300 border-b ${darkMode ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className={`h-6 w-6 ${darkMode ? "text-purple-400" : "text-purple-600"}`} />
              <span className="text-xl font-bold">Xyronix Labs</span>
            </Link>
          </motion.div>

          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex space-x-6"
            >
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About" />
              <NavLink href="/services" label="Services" isActive />
              <NavLink href="/contact" label="Contact" />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-200 text-gray-700"
              } hover:bg-opacity-80 transition-colors`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden overflow-hidden ${darkMode ? "bg-gray-900" : "bg-white"} border-t ${darkMode ? "border-gray-800" : "border-gray-200"}`}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
                <MobileNavLink href="/" label="Home" />
                <MobileNavLink href="/about" label="About" />
                <MobileNavLink href="/services" label="Services" isActive />
                <MobileNavLink href="/contact" label="Contact" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-purple-600 text-white shadow-lg z-40 hover:bg-purple-700 transition-colors"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 mb-6">
              Our Services
            </h1>
            <p className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-700"} mb-8 max-w-2xl mx-auto`}>
              Comprehensive solutions tailored to your needs across multiple industries and domains.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative max-w-md mx-auto mb-8"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search services..."
              className={`pl-10 ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700 focus:border-purple-500"
                  : "bg-white border-gray-300 focus:border-purple-500"
              } focus:ring-purple-500 transition-all duration-300`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>

          {/* Mobile Filter Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:hidden mb-4"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className={`text-sm ${
                darkMode ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-300"
              } transition-all duration-300`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: showFilters || window.innerWidth >= 768 ? 1 : 0,
              height: showFilters || window.innerWidth >= 768 ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:block overflow-hidden"
          >
            <Tabs defaultValue="all" className="w-full mb-8">
              <TabsList
                className={`w-full h-auto flex flex-wrap justify-center  gap-2 p-1 ${
                  darkMode ? "bg-gray-800/50" : "bg-gray-100/80"
                }`}
              >
                <TabsTrigger
                  value="all"
                  onClick={() => setActiveCategory(null)}
                  className={`${
                    activeCategory === null ? "data-[state=active]:bg-purple-600 data-[state=active]:text-white" : ""
                  } transition-all duration-300`}
                >
                  All Services
                </TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className={`${
                      activeCategory === category
                        ? "data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                        : ""
                    } transition-all duration-300`}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              darkMode={darkMode}
              onClick={() => handleServiceSelect(service)}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-400 text-lg mb-2">No services found matching "{searchTerm}"</p>
            <p className="text-gray-500 text-sm mb-4">Try adjusting your search or filter criteria</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm("")
                setActiveCategory(null)
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </main>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceDetailModal service={selectedService} darkMode={darkMode} onClose={handleModalClose} ref={modalRef} />
        )}
      </AnimatePresence>
    </div>
  )
}

// Navigation Link Component
function NavLink({ href, label, isActive = false }: { href: string; label: string; isActive?: boolean }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium hover:text-purple-400 transition-colors relative ${isActive ? "text-purple-400" : ""}`}
    >
      {label}
      {isActive && (
        <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400" layoutId="activeNavSection" />
      )}
    </Link>
  )
}

// Mobile Navigation Link Component
function MobileNavLink({ href, label, isActive = false }: { href: string; label: string; isActive?: boolean }) {
  return (
    <Link
      href={href}
      className={`py-2 px-3 rounded-lg flex justify-between items-center ${
        isActive ? "bg-purple-600/20 text-purple-400" : "hover:bg-gray-800/30"
      } transition-colors`}
    >
      <span>{label}</span>
      {isActive ? (
        <ChevronRight className="h-4 w-4 text-purple-400" />
      ) : (
        <ChevronRight className="h-4 w-4 opacity-50" />
      )}
    </Link>
  )
}

// Service Card Component
function ServiceCard({
  service,
  index,
  darkMode,
  onClick,
}: {
  service: (typeof services)[0]
  index: number
  darkMode: boolean
  onClick: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <Tilt options={{ max: 15, scale: 1.03, speed: 400, glare: true, "max-glare": 0.3 }}>
      <motion.div
        id={`service-${index}`}
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className={`h-full rounded-xl overflow-hidden border ${
          darkMode ? "border-gray-800" : "border-gray-200"
        } shadow-lg cursor-pointer group`}
        onClick={onClick}
      >
        <div
          className={`relative p-6 h-full flex flex-col ${
            darkMode
              ? "bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-800/90"
              : "bg-gradient-to-br from-white via-gray-50/95 to-gray-100/90"
          }`}
        >
          {/* Category Badge */}
          <Badge
            className={`absolute top-4 right-4 ${
              darkMode ? "bg-purple-600/90 hover:bg-purple-700" : "bg-purple-500/90 hover:bg-purple-600"
            } text-white transition-colors duration-300`}
            variant="secondary"
          >
            {service.category}
          </Badge>

          {/* Icon with gradient background */}
          <div className="mb-4 relative">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${
                darkMode ? "bg-purple-900/30" : "bg-purple-100"
              }`}
            >
              {service.icon}
            </div>
            <motion.div
              className={`absolute inset-0 rounded-full ${darkMode ? "bg-purple-600/20" : "bg-purple-300/20"}`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.2, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>

          <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
            {service.title}
          </h3>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-4`}>{service.description}</p>

          {/* Features */}
          <ul className="space-y-2 text-sm mb-6 flex-grow">
            {service.features.slice(0, 2).map((feature, i) => (
              <li key={i} className="flex items-start">
                <ArrowRight
                  className={`mr-2 h-4 w-4 mt-1 flex-shrink-0 ${darkMode ? "text-purple-400" : "text-purple-600"}`}
                />
                <span className={darkMode ? "text-gray-300" : "text-gray-700"}>{feature}</span>
              </li>
            ))}
            {service.features.length > 2 && (
              <li className={`text-sm ${darkMode ? "text-purple-400" : "text-purple-600"} font-medium`}>
                + {service.features.length - 2} more features
              </li>
            )}
          </ul>

          {/* Learn More Button */}
          <div className="mt-auto">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-3 px-4 rounded-lg ${
                darkMode ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-500 hover:bg-purple-600"
              } text-white font-medium text-center flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
            >
              <span>Learn More</span>
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

// Service Detail Modal Component
const ServiceDetailModal = React.forwardRef(function ServiceDetailModal(
  {
    service,
    darkMode,
    onClose,
  }: {
    service: (typeof services)[0]
    darkMode: boolean
    onClose: () => void
  },
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  // Find related services (same category)
  const relatedServices = services
    .filter((s) => s.category === service.category && s.title !== service.title)
    .slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center  p-4 bg-black/70 backdrop-blur-sm overflow-y-auto mt-16"
      onClick={onClose}
    >
      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className={`relative max-w-4xl w-full max-h-[80vh] ${darkMode ? "bg-gray-900" : "bg-white"} rounded-2xl shadow-2xl  overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header with gradient */}
        <div
          className={`absolute top-0 left-0 right-0 h-24 ${
            darkMode
              ? "bg-gradient-to-r from-purple-900/30 via-gray-900 to-cyan-900/30"
              : "bg-gradient-to-r from-purple-100 via-white to-cyan-100"
          }`}
        />

        <button
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 md:p-8 relative z-10">
          <div className="flex items-y-center space-y-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`w-14 h-14 rounded-full flex items-center justify-center ${
                darkMode ? "bg-purple-900/30" : "bg-purple-100"
              } mr-4`}
            >
              {service.icon}
            </motion.div>
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold leading-tight"
              >
                {service.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  darkMode ? "bg-purple-600/90" : "bg-purple-500/90"
                } text-white mt-2`}
              >
                {service.category}
              </motion.div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className={`prose max-w-none ${darkMode ? "prose-invert" : ""}`}>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg"
                >
                  {service.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold mt-6 mb-4 flex items-center">
                    <Sparkles className={`mr-2 h-5 w-5 ${darkMode ? "text-purple-400" : "text-purple-600"}`} />
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                        className="flex items-start items-center"
                      >
                        <div
                          className={`p-1 rounded-full ${darkMode ? "bg-purple-900/30" : "bg-purple-100"} mr-3 mt-1`}
                        >
                          <CheckSquare className={`h-5 w-5  ${darkMode ? "text-purple-400" : "text-purple-600"}`} />
                        </div>
                        <div>
                          <p>{feature}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h3 className="text-xl font-bold mt-8 mb-4 flex items-center">
                    <span className={`p-1 rounded-full ${darkMode ? "bg-purple-900/30" : "bg-purple-100"} mr-2`}>
                      <ArrowRight className={`h-5 w-5 ${darkMode ? "text-purple-400" : "text-purple-600"}`} />
                    </span>
                    Our Approach
                  </h3>
                  <p>We follow a systematic approach to deliver our {service.title} service:</p>
                  <ol className="list-decimal pl-6 space-y-2 mb-6">
                    <li>Initial consultation and requirement gathering</li>
                    <li>Detailed analysis and planning</li>
                    <li>Implementation with regular progress updates</li>
                    <li>Quality assurance and testing</li>
                    <li>Delivery and post-implementation support</li>
                  </ol>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="text-xl font-bold mt-8 mb-4 flex items-center">
                    <span className={`p-1 rounded-full ${darkMode ? "bg-purple-900/30" : "bg-purple-100"} mr-2`}>
                      <ArrowRight className={`h-5 w-5 ${darkMode ? "text-purple-400" : "text-purple-600"}`} />
                    </span>
                    Why Choose Us
                  </h3>
                  <p>
                    With years of experience in providing {service.title}, we have developed expertise that sets us
                    apart:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>Experienced team of professionals</li>
                    <li>Cutting-edge technology and methodologies</li>
                    <li>Customized solutions for your specific needs</li>
                    <li>Ongoing support and maintenance</li>
                    <li>Competitive pricing and flexible packages</li>
                  </ul>
                </motion.div>
              </div>
            </div>

            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800/80" : "bg-gray-100/80"
                } backdrop-blur-sm sticky top-8 border ${darkMode ? "border-gray-700/50" : "border-gray-200"}`}
              >
                <h3 className="text-xl font-bold mb-4">Get Started</h3>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-6 text-justify`}>
                  Interested in our {service.title} service? Contact us today for a free consultation.
                </p>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button className="w-full mb-4 bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
                    Request a Quote
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </motion.div>

                {relatedServices.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-8"
                  >
                    <h4 className="font-medium mb-4">Related Services</h4>
                    <div className="space-y-3">
                      {relatedServices.map((relatedService, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 5 }}
                          className={`p-3 rounded-lg ${
                            darkMode ? "bg-gray-900/80 hover:bg-gray-900" : "bg-white/80 hover:bg-white"
                          } cursor-pointer transition-colors group border ${darkMode ? "border-gray-800" : "border-gray-200"}`}
                          onClick={(e) => {
                            e.stopPropagation()
                            // Find the service index
                            const serviceIndex = services.findIndex((s) => s.title === relatedService.title)
                            // Close current modal
                            onClose()
                            // Wait for animation to complete
                            setTimeout(() => {
                              // Find the service element and scroll to it
                              const element = document.getElementById(`service-${serviceIndex}`)
                              if (element) {
                                element.scrollIntoView({ behavior: "smooth" })
                                // Simulate click on the service card
                                element.click()
                              }
                            }, 300)
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`relative w-10 h-10 rounded-full flex items-center justify-center ${
                                darkMode ? "bg-purple-900/30" : "bg-purple-100"
                              } mr-3`}
                            >
                              {relatedService.icon}
                            </div>
                            <div>
                              <h5
                                className={`font-medium group-hover:text-purple-400 transition-colors flex items-center`}
                              >
                                {relatedService.title}
                                <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h5>
                              
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-8 p-4 bg-purple-900/20 rounded-lg border border-purple-900/30 text-center flex flex-col items-center"
                >
                  <h4 className="font-medium mb-2">Need more information?</h4>
                  <p className="text-sm text-gray-400 mb-4">
                    Our team is ready to answer any questions you might have about our {service.title} service.
                  </p>
                  <Button variant="link" className="text-purple-400 p-0 h-auto">
                    Schedule a consultation call
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
})

// Services Data with Categories
export const services = [
  {
    title: "Technical Audits",
    slug: "technical-audits",
    category: "Auditing",
    description: "Comprehensive assessment of system reliability and performance.",
    icon: <Shield className="h-8 w-8 text-purple-400" />,
    features: [
      "System reliability evaluation",
      "Performance bottleneck identification",
      "Security vulnerability assessment",
      "Detailed recommendations report",
    ],
  },
  {
    title: "Environmental Audit",
    slug: "environmental-audit",
    category: "Auditing",
    description: "Thorough evaluation of environmental impact and compliance.",
    icon: <Leaf className="h-8 w-8 text-green-400" />,
    features: [
      "Compliance with environmental regulations",
      "Waste management assessment",
      "Resource utilization analysis",
      "Environmental impact reduction strategies",
    ],
  },
  {
    title: "Green Audit",
    slug: "green-audit",
    category: "Auditing",
    description: "Assessment of sustainability practices and eco-friendly initiatives.",
    icon: <Sprout className="h-8 w-8 text-green-400" />,
    features: [
      "Carbon footprint analysis",
      "Sustainable practices evaluation",
      "Green technology recommendations",
      "Eco-friendly certification guidance",
    ],
  },
  {
    title: "Energy Audit",
    slug: "energy-audit",
    category: "Auditing",
    description: "Detailed analysis of energy consumption and efficiency opportunities.",
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
    features: [
      "Energy consumption assessment",
      "Efficiency improvement recommendations",
      "Cost-saving opportunities",
      "Renewable energy integration planning",
    ],
  },
  {
    title: "Fire Preparation Audit",
    slug: "fire-preparation-audit",
    category: "Safety",
    description: "Comprehensive evaluation of fire safety measures and preparedness.",
    icon: <Flame className="h-8 w-8 text-red-400" />,
    features: [
      "Fire safety compliance check",
      "Emergency response evaluation",
      "Equipment and system assessment",
      "Staff preparedness training",
    ],
  },
  {
    title: "Pharma Formulations",
    slug: "pharma-formulations",
    category: "Healthcare",
    description: "Expert pharmaceutical formulation development and optimization.",
    icon: <Flask className="h-8 w-8 text-blue-400" />,
    features: [
      "Custom formulation development",
      "Stability testing and analysis",
      "Manufacturing process optimization",
      "Regulatory compliance guidance",
    ],
  },
  {
    title: "Organic Farming Conversion",
    slug: "organic-farming-conversion",
    category: "Agriculture",
    description: "Comprehensive support for transitioning to organic farming practices.",
    icon: <Sprout className="h-8 w-8 text-green-400" />,
    features: [
      "Organic certification guidance",
      "Sustainable farming techniques",
      "Pest management strategies",
      "Soil health improvement",
    ],
  },
  {
    title: "Farm Automation",
    slug: "farm-automation",
    category: "Agriculture",
    description: "Cutting-edge automation solutions for modern agricultural operations.",
    icon: <Tractor className="h-8 w-8 text-green-400" />,
    features: [
      "Precision agriculture systems",
      "IoT sensor integration",
      "Automated irrigation solutions",
      "Harvest optimization technology",
    ],
  },
  {
    title: "Research Assistance",
    slug: "research-assistance",
    category: "Research",
    description: "Comprehensive support for scientific and technical research projects.",
    icon: <Microscope className="h-8 w-8 text-purple-400" />,
    features: [
      "Experimental design consultation",
      "Data analysis and interpretation",
      "Literature review assistance",
      "Research methodology optimization",
    ],
  },
  {
    title: "Home Automation",
    slug: "home-automation",
    category: "Automation",
    description: "Smart home solutions for comfort, security, and energy efficiency.",
    icon: <Home className="h-8 w-8 text-blue-400" />,
    features: [
      "Smart lighting and climate control",
      "Security system integration",
      "Voice-controlled home management",
      "Energy consumption optimization",
    ],
  },
  {
    title: "Lab Automation",
    slug: "lab-automation",
    category: "Automation",
    description: "Advanced automation solutions for laboratory environments.",
    icon: <Flask className="h-8 w-8 text-blue-400" />,
    features: [
      "Automated testing procedures",
      "Sample handling systems",
      "Data collection and analysis",
      "Workflow optimization",
    ],
  },
  {
    title: "Fire System Installation",
    slug: "fire-system-installation",
    category: "Safety",
    description: "Professional installation of comprehensive fire safety systems.",
    icon: <Flame className="h-8 w-8 text-red-400" />,
    features: [
      "Custom system design",
      "Detection and alarm installation",
      "Suppression system deployment",
      "Compliance certification",
    ],
  },
  {
    title: "Office Automation",
    slug: "office-automation",
    category: "Automation",
    description: "Streamlined office operations through intelligent automation solutions.",
    icon: <Building className="h-8 w-8 text-blue-400" />,
    features: [
      "Workflow automation",
      "Document management systems",
      "Meeting room technology",
      "Smart office environment",
    ],
  },
  {
    title: "SaaS Solutions",
    slug: "saas-solutions",
    category: "Software",
    description: "Custom Software-as-a-Service solutions for business operations.",
    icon: <BarChart3 className="h-8 w-8 text-blue-400" />,
    features: [
      "Cloud-based application development",
      "Subscription model implementation",
      "Multi-tenant architecture",
      "Scalable infrastructure design",
    ],
  },
  {
    title: "Software Development",
    slug: "software-development",
    category: "Software",
    description: "Custom software solutions tailored to your business needs.",
    icon: <Code className="h-8 w-8 text-blue-400" />,
    features: [
      "Custom application development",
      "Legacy system modernization",
      "API integration services",
      "Mobile app development",
    ],
  },
  {
    title: "Hospital Management",
    slug: "hospital-management",
    category: "Healthcare",
    description: "Comprehensive hospital management systems and consulting.",
    icon: <HeartPulse className="h-8 w-8 text-red-400" />,
    features: [
      "Patient management systems",
      "Resource allocation optimization",
      "Staff scheduling solutions",
      "Regulatory compliance guidance",
    ],
  },
  {
    title: "ISO Certifications",
    slug: "iso-certifications",
    category: "Certification",
    description: "Expert guidance for obtaining and maintaining ISO certifications.",
    icon: <Award className="h-8 w-8 text-yellow-400" />,
    features: [
      "Gap analysis and preparation",
      "Documentation development",
      "Implementation support",
      "Audit preparation assistance",
    ],
  },
  {
    title: "NABL for Engineering",
    slug: "nabl-engineering",
    category: "Certification",
    description: "NABL accreditation support for engineering testing laboratories.",
    icon: <CheckSquare className="h-8 w-8 text-green-400" />,
    features: [
      "Quality management system development",
      "Technical competence assessment",
      "Documentation preparation",
      "Pre-assessment evaluation",
    ],
  },
  {
    title: "NABL & NABH for Healthcare",
    slug: "nabl-nabh-healthcare",
    category: "Healthcare",
    description: "Accreditation support for hospitals and diagnostic laboratories.",
    icon: <Stethoscope className="h-8 w-8 text-red-400" />,
    features: [
      "Quality and patient safety standards",
      "Laboratory testing accreditation",
      "Healthcare facility certification",
      "Continuous improvement programs",
    ],
  },
  {
    title: "Educational Institution Setup",
    slug: "educational-institution-setup",
    category: "Education",
    description: "End-to-end consultancy for university and institutional establishment.",
    icon: <GraduationCap className="h-8 w-8 text-blue-400" />,
    features: [
      "Infrastructure planning",
      "Curriculum development",
      "Regulatory compliance",
      "Faculty recruitment assistance",
    ],
  },
  {
    title: "Engineering Lab Setup",
    slug: "engineering-lab-setup",
    category: "Education",
    description: "Comprehensive setup of laboratories for all engineering branches.",
    icon: <Beaker className="h-8 w-8 text-purple-400" />,
    features: [
      "Equipment specification and procurement",
      "Lab layout and design",
      "Safety protocol implementation",
      "Training and documentation",
    ],
  },
  {
    title: "Accreditation Consultancy",
    slug: "accreditation-consultancy",
    category: "Education",
    description: "End-to-end consultancy for national and international accreditations.",
    icon: <Award className="h-8 w-8 text-yellow-400" />,
    features: [
      "NAAC, NIRF preparation",
      "QS ranking improvement strategies",
      "JCI and GCP compliance",
      "Documentation and evidence compilation",
    ],
  },
  {
    title: "Digital Services",
    slug: "digital-services",
    category: "Software",
    description: "Comprehensive digital transformation and service implementation.",
    icon: <Globe className="h-8 w-8 text-blue-400" />,
    features: [
      "Digital strategy development",
      "Web and mobile solutions",
      "E-commerce implementation",
      "Digital marketing services",
    ],
  },
  {
    title: "CSR Initiatives",
    slug: "csr-initiatives",
    category: "Consulting",
    description: "Corporate Social Responsibility program development and implementation.",
    icon: <Heart className="h-8 w-8 text-red-400" />,
    features: [
      "CSR strategy development",
      "Community program implementation",
      "Impact assessment and reporting",
      "Stakeholder engagement",
    ],
  },
]

