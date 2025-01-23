import { Star } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"
import { assets } from "../assets/assets"

export function Hero() {
  return (
    <div className="relative apply-bg ">
      <div className="container mx-auto px-4 py-16">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              <span className="font-medium">Google Rating</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2b6d] mb-6">
              Your Trusted Partner
              <br />
              For <span className="text-[#ff6b00]">Compliance</span> needs
            </h1>

            <p className="text-gray-700 text-lg mb-8">
              An online business compliance platform that helps entrepreneurs and other individuals with various,{" "}
              <span className="font-medium">registrations</span>, <span className="font-medium">tax filings</span>, and
              other <span className="font-medium">legal matters</span>.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold">4.5+</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold">20,000+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold">99.8%</div>
                <div className="text-sm text-gray-600">Financial Stability</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#1a2b6d] hover:bg-[#1a2b6d]/90">
                Get Started For Free
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#ff6b00]" />
                See how it works
              </Button>
            </div>
          </div>

          <div className="relative">
            

            <Image
              src={assets.h2}
              alt="Hero Illustration"
              className="w-full h-auto"
            />

            <div className="absolute top-0 right-0 flex flex-col gap-2">
              <div className="bg-white py-2 px-4 rounded-full shadow-lg">Annual Compliance</div>
              <div className="bg-white py-2 px-4 rounded-full shadow-lg">Payroll Services</div>
              <div className="bg-white py-2 px-4 rounded-full shadow-lg">Company Formation</div>
              <div className="bg-white py-2 px-4 rounded-full shadow-lg">Annual Compliance</div>
            </div>
          </div>

          <Image
            src={assets.h3}
            alt="Hero Illustration"
            className="absolute bottom-0 right-0  "
          />

        </div>
      </div>
    </div>
  )
}

