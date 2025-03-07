"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <header className="fixed top-0 w-full z-50 border-b bg-black">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/XyronixLabs_logo1.png" alt="Logo" width={32} height={32} className="w-8 h-8" />
          <span className="font-bold text-xl font-serif tracking-widest ">Xyronix Labs</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-sm hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="/products" className="text-sm hover:text-purple-400 transition-colors">
            Products
          </Link>
          <Link href="/services" className="text-sm hover:text-purple-400 transition-colors">
            Services
          </Link>
          <Link href="/research" className="text-sm hover:text-purple-400 transition-colors">
            Research
          </Link>
          <Link href="/jobs" className="text-sm hover:text-purple-400 transition-colors">
            Career
          </Link>
          <Link href="/gallery" className="text-sm hover:text-purple-400 transition-colors">
            Gallery
          </Link>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-6">
              <Link
                href="/about"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/products"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/services"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/research"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Research
              </Link>
              <Link
                href="/gallery"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Button asChild variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

