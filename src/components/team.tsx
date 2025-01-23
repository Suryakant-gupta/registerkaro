const team = [
    { name: "John Doe", role: "CEO & Founder", image: "/placeholder.svg" },
    { name: "Jane Smith", role: "COO", image: "/placeholder.svg" },
    { name: "Mike Johnson", role: "Head of Legal", image: "/placeholder.svg" },
    { name: "Sarah Brown", role: "Customer Success Manager", image: "/placeholder.svg" },
  ]
  
  export function Team() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  