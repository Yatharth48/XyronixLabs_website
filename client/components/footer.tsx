import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
export default function Footer() {
  return (
    <footer className="border-t bg-[#090c14]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-extrabold text-xl ">Xyronix Labs</h3>
            <p className="text-sm text-gray-400">Future is Here.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-sm text-gray-400 hover:text-white">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/research" className="text-sm text-gray-400 hover:text-white">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-gray-400 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Socials</h4>
            <ul className="space-y-2"> {/* Stacks items vertically */}
              <li>
                <Link href="https://twitter.com/XyronixLabs" target="_blank" className="flex items-center text-sm text-gray-400 hover:text-white">
                  <Image src="/twitter480.svg" alt="Twitter" width={28} height={28} className="mr-2" />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/XyronixLabs" target="_blank" className="flex items-center text-sm text-gray-400 hover:text-white">
                  <Image src="/instagram480.svg" alt="Instagram" width={28} height={28} className="mr-2" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/xyronixlabs" target="_blank" className="flex items-center text-sm text-gray-400 hover:text-white">
                  <Image src="/linkedin480.svg" alt="LinkedIn" width={28} height={28} className="mr-2" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Xyronix Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

