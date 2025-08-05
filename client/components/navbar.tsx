"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Use appropriate font weights
  display: "swap",
});


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
    <header className="fixed top-0 w-full z-50 border-b bg-[#0b121f]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/Group10(2).png" alt="Logo" width={28} height={28} className="w-8 h-8" />
          <span className="text-3xl font-bold tracking-tight ${jetBrainsMono.className}} ">Xyronix Labs</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-sm hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="/underdevelopmentpage" className="text-sm hover:text-purple-400 transition-colors">
            Services
          </Link>
          <Link href="/career" className="text-sm hover:text-purple-400 transition-colors">
            Career
          </Link>
          <Link href="/gallery" className="text-sm hover:text-purple-400 transition-colors">
            Gallery
          </Link>
{/*           <Button asChild variant="outline" className="bg-[#9fef00] text-black"> */}
{/*             <Link href="/signin">Sign In</Link> */}
{/*          // </Button> */}
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
                href="/underdevelopmentpage"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link href="/career" 
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
                >
                Career
              </Link>
{/*               <Button asChild variant="outline" className="w-full bg-[#9fef00]" onClick={() => setIsOpen(false)}> */}
{/*                 <Link href="/signin">Sign In</Link> */}
{/*                 </Button>*/}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

