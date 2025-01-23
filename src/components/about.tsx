import Image from "next/image"
import { Button } from "./ui/button"
import { assets } from "../assets/assets"

export function About() {
  return (
    <section className="py-16 bg-gray-50 px-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <small className="text-[#ffa229]">WELCOME TO REGISTERKARO.IN</small>
            <h2 className="text-3xl font-bold text-navy mb-6">About <span className="#ffa229">Register Karo</span></h2>
            <p className="text-gray-600 mb-6">
              Register Karo is one of the leading business service providers in India. We help entrepreneurs and
              businesses with company registration, compliance, and various legal services. Our team of experts ensures
              a smooth and hassle-free experience for all your business needs.
            </p>
            <p className="text-gray-600 mb-8">
              With years of experience and thousands of satisfied clients, we have established ourselves as a trusted
              partner for businesses across India.
            </p>
            <Button size="lg">Learn More <Image src={assets.lms} alt="Learn More" width={16} height={16} className="invert-image" /></Button>
          </div>
          <div>
            {/* <img src={"/placeholder.svg"} alt="Register Karo Team" className="rounded-lg w-full" /> */}
            <Image src={assets.about} alt="Register Karo Team" className="rounded-lg w-full "  />
          </div>
        </div>
      </div>
    </section>
  )
}

