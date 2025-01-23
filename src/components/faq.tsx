"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What services does Register Karo offer?",
    answer:
      "Register Karo offers a wide range of compliance services including company registration, annual compliance, payroll services, and more. We help entrepreneurs and businesses navigate legal and regulatory requirements efficiently.",
  },
  {
    question: "How long does it take to register a company through Register Karo?",
    answer:
      "The time to register a company can vary depending on the type of company and the completeness of the documentation. Typically, it takes 7-10 business days, but we strive to make the process as quick and smooth as possible.",
  },
  {
    question: "Is my company information kept confidential?",
    answer:
      "Yes, we take data privacy very seriously. All company information shared with Register Karo is kept strictly confidential and is only used for the purposes of providing our services.",
  },
  {
    question: "What documents do I need to register my company?",
    answer:
      "The required documents vary depending on the type of company and jurisdiction. Generally, you'll need proof of identity, address proof, and other company-specific documents. Our team will guide you through the exact requirements for your situation.",
  },
  {
    question: "Can Register Karo help with ongoing compliance after company registration?",
    answer:
      "We offer comprehensive annual compliance services to ensure your company remains in good standing. This includes filing annual returns, maintaining statutory registers, and other regulatory requirements.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 flex gap-0 overflow-hidden rounded-lg">
              <button
                className="flex justify-between items-center w-full h-14 text-left py-0 pr-4 bg-gray-100 hover:bg-gray-200 transition-colors "
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
              <div className="w-2 h-full faq-border"></div>
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

