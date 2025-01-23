"use client"

import { Check } from "lucide-react"
import { Button } from "./ui/button"

export function Newsletter() {
  const features = ["Instant results", "User-friendly interface", "Personalized customization"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 nwb" />

      <div className="relative container mx-auto px-4 text-center text-white">
        <span className="text-sm font-medium mb-4 block uppercase tracking-wider">1% OF THE INDUSTRY</span>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">Welcome to your new digital reality. Now.</h2>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-12">
          <div className="flex h-14 ">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-6 py-3 rounded-tl-lg rounded-bl-lg  text-gray-900 placeholder-gray-500 focus:outline-none"
              required
            />
            <Button
              type="submit"
              className="px-8 py-3 h-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-medium rounded-tr-lg rounded-br-lg "
            >
              Submit
            </Button>
          </div>
        </form>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

