import Image from "next/image"
import { assets } from "../assets/assets"

export function Features() {
  const features = [
    {
      icon: assets.sym1,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-red-50",
    },
    {
      icon: assets.sym2,
      title: "No Hidden Fee",
      description: "Everything is put before you with no hidden charges or conditions",
      bgColor: "bg-green-50",
    },
    {
      icon: assets.sym3,
      title: "Guaranteed Satisfaction",
      description: "We ensure that you stay 100% satisfied with our offered services",
      bgColor: "bg-blue-50",
    },
    {
      icon: assets.sym4,
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      bgColor: "bg-pink-50",
    },
    {
      icon: assets.sym1,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-red-50",
    },
  ]

  return (
    <section className="py-16 bg-white px-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8">
          {/* Left side content */}
          <div className="col-span-12 lg:col-span-4">
            <span className="text-[#ff6b00] font-medium mb-2 block">WHY REGISTERKARO.IN</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Choose Register Karo</h2>
            <p className="text-gray-600">
              It is with consistent services and results that build trust with the people and that in turn help us to
              serve the business better.
            </p>
          </div>

          {/* Right side features grid */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-2 gap-6">
              {/* Top row - 2 boxes */}
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className={`${feature.bgColor} rounded-lg p-6 text-center`}>
                  <div className="w-12 h-12 mx-auto mb-4">
                    {/* <img
                      src={feature.icon || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    /> */}

                    <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={100} height={100} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}

              {/* Bottom row - 3 boxes */}
              <div className="col-span-2 grid grid-cols-3 gap-6">
                {features.slice(2).map((feature, index) => (
                  <div key={index} className={`${feature.bgColor} rounded-lg p-6 text-center`}>
                    <div className="w-12 h-12 mx-auto mb-4">
                      {/* <img
                        src={feature.icon || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-full object-contain"
                      /> */}

                      <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={100} height={100} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

