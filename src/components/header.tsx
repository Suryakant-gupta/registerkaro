"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Search } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"
import { assets } from "../assets/assets"

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    "Company Registration",
    "Trademark Registration",
    "GST Registration",
    "FSSAI Registration",
    "Import Export Code",
  ]

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative">
            <Image src={assets.logo} alt="Register Karo Logo" className="" />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#ff6b00] transition-colors">
              Home
            </Link>

            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-[#ff6b00] transition-colors gap-1"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Our Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#ff6b00] transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="text-gray-700 hover:text-[#ff6b00] transition-colors">
              Blog
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-[#ff6b00] transition-colors">
              Contact Us
            </Link>

            <Link href="/about" className="text-gray-700 hover:text-[#ff6b00] transition-colors">
              About us
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-[#ff6b00] transition-colors">
              <Search className="w-5 h-5" />
            </button>

            <Button className="bg-[#ff6b00] hover:bg-[#ff6b00]/90 text-white">Talk An Expert</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

