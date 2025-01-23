"use client"

import { useState } from "react"
import { ChevronRight, FileText, CreditCard, UserCheck, Mail } from "lucide-react"
import { assets } from "../assets/assets";
import Image from "next/image";

export function HappyClients() {
  const [showAll, setShowAll] = useState(false)

  const logos = [
    { x: "10%", y: "20%", size: "lg", icon: assets.l1 },
    { x: "25%", y: "15%", size: "md", icon: assets.l2 },
    { x: "40%", y: "25%", size: "sm", icon: assets.l3 },
    { x: "60%", y: "20%", size: "lg", icon: assets.l4 },
    { x: "75%", y: "15%", size: "md", icon: assets.l5 },
    { x: "85%", y: "25%", size: "sm", icon: assets.l6 },
    { x: "15%", y: "45%", size: "sm", icon: assets.l7 },
    { x: "35%", y: "40%", size: "lg", icon: assets.l8 },
    { x: "50%", y: "45%", size: "md", icon: assets.l9 },
    { x: "70%", y: "40%", size: "sm", icon: assets.l10 },
    { x: "90%", y: "45%", size: "lg", icon: assets.l11 },
    { x: "20%", y: "65%", size: "md", icon: assets.l12 },
    { x: "40%", y: "60%", size: "sm", icon: assets.l13 },
    { x: "55%", y: "65%", size: "lg", icon: assets.l14 },
    { x: "75%", y: "60%", size: "md", icon: assets.l15 },
    { x: "85%", y: "65%", size: "sm", icon: assets.l16 },
    { x: "10%", y: "75%", size: "lg", icon: assets.l17 },
    { x: "25%", y: "80%", size: "md", icon: assets.l18 },
    { x: "40%", y: "75%", size: "sm", icon: assets.l19 },
    { x: "60%", y: "80%", size: "lg", icon: assets.l20 },
    { x: "75%", y: "75%", size: "md", icon: assets.l21 },
    { x: "85%", y: "80%", size: "sm", icon: assets.l22 },
    { x: "90%", y: "85%", size: "lg", icon: assets.l23 },
  ];

  const processSteps = [
    {
      icon: FileText,
      title: "Fill up Application Form",
    },
    {
      icon: CreditCard,
      title: "Make Online Payment",
    },
    {
      icon: UserCheck,
      title: "Executive will Process Application",
    },
    {
      icon: Mail,
      title: "Get Confirm Mail",
    },
  ]

  const visibleLogos = showAll ? logos : logos.slice(0, 12)

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Happy Clients</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate
            resource-leveling customer service for state of the art customer service.
          </p>
        </div>

        <div className="relative h-[600px] mb-8">
          {visibleLogos.map((logo, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-300 hover:-translate-y-2 ${
                logo.size === "lg" ? "w-24 h-24" : logo.size === "md" ? "w-20 h-20" : "w-16 h-16"
              }`}
              style={{
                left: logo.x,
                top: logo.y,
              }}
            >
              <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center p-4">
                
                {/* <img src={logo.icon} alt={`Client Logo ${index + 1}`} className="w-full h-full object-contain" /> */}
                <Image src={logo.icon} alt={`Client Logo ${index + 1}`} width={100} height={100} className="w-full h-full object-contain"/>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center text-navy hover:text-primary transition-colors font-medium"
          >
            Show more
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Process Steps */}
        <div className="bg-[#ffa229] py-8 rounded-lg px-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center relative">
              {/* Connection lines */}
              {/* <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20  " /> */}

              {processSteps.map((step, index) => (
                <div key={index} className="relative  flex gap-4 items-center w-full md:w-auto mb-8 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 relative z-10">
                    <step.icon className="w-8 h-8 text-[#ffa229]" />
                  </div>
                  <h3 className="text-black text-center font-medium">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

