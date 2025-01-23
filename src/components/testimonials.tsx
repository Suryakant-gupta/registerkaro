"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Chris",
    role: "President and CEO, PrintReach, USA",
    image: "/placeholder.svg",
    rating: 4.5,
  },
  {
    id: 2,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Chris",
    role: "President and CEO, PrintReach, USA",
    image: "/placeholder.svg",
    rating: 4.5,
  },
  {
    id: 3,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Chris",
    role: "President and CEO, PrintReach, USA",
    image: "/placeholder.svg",
    rating: 4.5,
  },
  {
    id: 4,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Chris",
    role: "President and CEO, PrintReach, USA",
    image: "/placeholder.svg",
    rating: 4.5,
  },
  {
    id: 5,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Chris",
    role: "President and CEO, PrintReach, USA",
    image: "/placeholder.svg",
    rating: 4.5,
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % (testimonials.length - 2))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2))
  }

  const goToTestimonial = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="py-16 bg-[#1a2b6d]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What peoples says about us</h2>
          <div className="flex gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-colors hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-[#1a2b6d]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#ff6b00] flex items-center justify-center transition-colors hover:bg-[#ff6b00]/90"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 33.333}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-full lg:w-1/3 flex-shrink-0 px-3">
                <div className="bg-white rounded-lg p-8 h-full">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl text-gray-300 leading-none">"</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(testimonial.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400 opacity-50"
                                : "text-gray-300 fill-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8 min-h-[120px]">{testimonial.text}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.author}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[...Array(testimonials.length - 2)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === activeIndex ? "bg-[#ff6b00]" : "bg-white/20 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

