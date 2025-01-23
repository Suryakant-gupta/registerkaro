export function Stats() {
  const stats = [
    {
      value: "1M",
      label: "CUSTOMERS",
      gradient: "from-[#FFA229] to-[#1C4670]",
    },
    
    {
      value: "12",
      label: "YEARS OF EXCELLENCE",
      gradient: "from-[#FFA229] to-[#1C4670]",
    },
    {
      value: "41",
      label: "R&D ENGINEERS",
      gradient: "from-[#FFA229] to-[#1C4670]",
    },
    {
      value: "78",
      label: "COUNTRIES",
      gradient: "from-[#FFA229] to-[#1C4670]",
    },
    {
      value: "3287",
      label: "PARTNERS",
      gradient: "from-[#FFA229] to-[#1C4670]",
    },
    {
      value: "41",
      label: "AWARDS RECEIVED",
      gradient: "from-[#FFA229] to-[#1C4670]",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#ff6b00] font-medium block mb-2">WHY REGISTER KARO</span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
            Some Numbers are important
           
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
              >
                {stat.value}
                <sup className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent `}>+</sup>
              </div>
              <div className="text-sm font-semibold text-gray-800">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

