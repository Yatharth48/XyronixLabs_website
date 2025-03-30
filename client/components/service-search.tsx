"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"
import Link from "next/link"

interface ServiceSearchProps {
  onSelect?: (serviceId: string) => void
  className?: string
}

export function ServiceSearch({ onSelect, className = "" }: ServiceSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<typeof services>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (searchTerm.length > 1) {
      const filtered = services.filter(
        (service) =>
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.features.some((feature) => feature.toLowerCase().includes(searchTerm.toLowerCase())),
      )
      setResults(filtered)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [searchTerm])

  const handleSelect = (serviceId: string) => {
    setSearchTerm("")
    setIsOpen(false)
    if (onSelect) {
      onSelect(serviceId)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search services..."
          className="pl-10 bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => searchTerm.length > 1 && setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-gray-900 border border-gray-800 rounded-md shadow-lg max-h-60 overflow-auto">
          {results.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="block px-4 py-2 hover:bg-gray-800 transition-colors"
              onClick={() => handleSelect(`service-${index}`)}
            >
              <div className="font-medium">{service.title}</div>
              <div className="text-sm text-gray-400 truncate">{service.description}</div>
            </Link>
          ))}
        </div>
      )}

      {isOpen && searchTerm.length > 1 && results.length === 0 && (
        <div className="absolute z-10 mt-1 w-full bg-gray-900 border border-gray-800 rounded-md shadow-lg p-4 text-center">
          <p className="text-gray-400">No services found matching "{searchTerm}"</p>
          <Button variant="link" className="mt-1 text-purple-400" onClick={() => setSearchTerm("")}>
            Clear search
          </Button>
        </div>
      )}
    </div>
  )
}

