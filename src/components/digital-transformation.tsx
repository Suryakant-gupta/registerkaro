import Image from "next/image"
import { assets } from "../assets/assets"
import { Button } from "./ui/button"

const services = [
  {
    image: assets.image,
    title: "Small Business & Startup",
    description: "Comprehensive solutions for small businesses",
    price: "Starting at ₹999",
  },
  {
    image: assets.image1,
    title: "Scale Up Company Offer",
    description: "Growth solutions for scaling companies",
    price: "Starting at ₹1999",
  },
  {
    image: assets.image2,
    title: "Business Success Package",
    description: "Complete business success solutions",
    price: "Starting at ₹2999",
  },
  {
    image:assets.image3,
    title: "Scale Up Company Offer",
    description: "Advanced scaling solutions",
    price: "Starting at ₹3999",
  },
  {
    image: assets.image4,
    title: "Scale Up Company Offer",
    description: "Premium business services",
    price: "Starting at ₹4999",
  },
  {
    image: assets.image5,
    title: "Start Up Company Offer",
    description: "Startup-focused solutions",
    price: "Starting at ₹5999",
  },
]

export function DigitalTransformation() {
  return (
    <section className="py-16 bg-white px-16">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-center text-black text-navy mb-12"><small className="text-[#ffa229] text-center text-xs">EXPLORE OUR BLOGS</small> <br />Accelerate Digital Transformation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                {/* <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                /> */}

                <Image src={service.image || "/placeholder.svg"} alt={service.title} width={100} height={100} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-2">{service.description}</p>
              <p className="text-primary font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">Show more blog <Image src={assets.lms} alt="Learn More" width={16} height={16} className="invert-image" /></Button>
        </div>
      </div>
    </section>
  )
}

