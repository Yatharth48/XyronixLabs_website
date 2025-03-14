import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Xyronix Labs",
  description: "Innovative solutions for a better future",
  icons: {
    icon: "/XyronixLabs_logo1.png", // For browsers
    apple: "/XyronixLabs_logo1.png", // For Apple devices
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gradient-to-b from-background to-secondary/20 bg-[#011529] text-white`}>
        <div className="relative min-h-screen">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
            <main className="relative z-10">{children}</main>
          </ThemeProvider>
          <Footer />
        </div>
      </body>
    </html>
  )
}