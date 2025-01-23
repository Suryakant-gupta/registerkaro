import Image from "next/image"
import {assets} from "../assets/assets"

export function ClientLogos() {
    const logos = ["oracle.svg", "samsung.svg", "microsoft.svg", "google.svg", "apple.svg"]
  
    return (
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">Trusted by 10K+ Companies and Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* {logos.map((logo, index) => (
              <img
                key={index}
                src={`/placeholder.svg`}
                alt={`Client Logo ${index + 1}`}
                className="h-12 grayscale hover:grayscale-0 transition-all"
              />
            
            ))} */}

            <Image
              src={assets.logobar1}
              alt="Client Logo 1"
            />
          </div>
        </div>
      </section>
    )
  }
  
  