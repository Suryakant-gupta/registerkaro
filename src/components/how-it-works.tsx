import { ArrowRight } from "lucide-react"

const steps = [
  { title: "Register", description: "Create your account and provide basic information" },
  { title: "Choose Service", description: "Select the compliance service you need" },
  { title: "Submit Documents", description: "Upload required documents securely" },
  { title: "Expert Review", description: "Our team reviews and processes your application" },
  { title: "Completion", description: "Receive your compliance documents and certificates" },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 max-w-[200px]">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-6 h-6 text-gray-400 mt-4 rotate-90 md:rotate-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

