import { Check } from "lucide-react"
import { Button } from "./ui/button"

const plans = [
  {
    name: "Basic",
    price: "$99",
    features: ["Company Registration", "Basic Compliance Support", "Annual Return Filing", "24/7 Customer Support"],
  },
  {
    name: "Pro",
    price: "$199",
    features: [
      "All Basic features",
      "Advanced Compliance Support",
      "Tax Filing Assistance",
      "Dedicated Account Manager",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["All Pro features", "Multiple Company Management", "Custom Compliance Solutions", "Priority Support"],
  },
]

export function Pricing() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-6 flex flex-col">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">{plan.price}</div>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Choose Plan</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

