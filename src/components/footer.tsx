"use client"

import { Apple, ArrowUp, Facebook, Instagram,  } from "lucide-react"
import { FaGoogle } from "react-icons/fa";
import Link from "next/link"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    "START A BUSINESS": ["Features", "Solutions", "Integrations", "Enterprise", "Solutions"],
    "GOVERNMENT REGISTRATION": ["Partners", "Community", "Developers", "App", "Blog"],
    "COMPLIANCE & TAX": ["Channels", "Scale", "Watch the Demo", "Our Competition"],
    "BIS & CDSCO": ["About Us", "News", "Leadership", "Media Kit"],
  }

  return (
    <footer className="bg-[#001140] text-white py-16 relative px-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Description and Social Links */}
          <div className="lg:col-span-1">
            <p className="text-gray-300 mb-8">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-80 transition-opacity">
                {/* <img src="/placeholder.svg" alt="Facebook" className="w-6 h-6" /> */}
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                {/* <img src="/placeholder.svg" alt="Google" className="w-6 h-6" /> */}
                <FaGoogle  className="w-6 h-6"/>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                {/* <img src="/placeholder.svg" alt="Apple" className="w-6 h-6" /> */}
                <Apple className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                {/* <img src="/placeholder.svg" alt="Instagram" className="w-6 h-6" /> */}
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h3 className="text-[#FF6B00] font-medium mb-6">{title}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-gray-400">© 2024 Registerkaro. All Rights Reserved.</div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-8 bottom-8 w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center hover:bg-[#FF6B00]/90 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      </div>
    </footer>
  )
}

