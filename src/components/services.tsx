import { Button } from "./ui/button"
import { assets } from "../assets/assets"
import Image from "next/image"

const services = [
  {
    icon: assets.s1,
    title: "Company Formation Services",
    description: "Get expert assistance in company registration and formation process",
  },
  {
    icon: assets.s2,
    title: "Company Registration Services",
    description: "Complete support for registering your company with all legal requirements",
  },
  {
    icon: assets.s3,
    title: "Bookkeeping Services",
    description: "Professional bookkeeping and accounting services for your business",
  },
  {
    icon:assets.s4,
    title: "Annual Compliance Services",
    description: "Stay compliant with annual filing and regulatory requirements",
  },
  {
    icon: assets.s5,
    title: "Payroll Services",
    description: "Comprehensive payroll management and processing services",
  },
  {
    icon: assets.s6,
    title: "Trademark Services",
    description: "Protect your brand with our trademark registration services",
  },
]

export function Services() {
  return (
    <section className="py-16 bg-white px-16">
      <div className="container mx-auto px-4  ">
        <h2 className="text-3xl font-bold text-center text-navy mb-4">Explore Our Services</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We offer a wide range of business services to help you start and grow your company
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow flex flex-col items-center justify-center">
              <Image
                src={service.icon || '/placeholder.svg'}
                alt={service.title}
                width={48} // Adjust as needed
                height={48} // Adjust as needed
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{service.description}</p>
              <Button variant="outline" className="w-full">
                Learn More <Image src={assets.lms} alt="Learn More" width={16} height={16} />
              </Button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">View All Services</Button>
        </div>
      </div>
    </section>
  )
}

