import { prisma } from "../../../lib/db"
import { Briefcase, Users, Building2, Calendar, MapPin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { assets } from "../../../assets/assets"

interface Company {
  id: number;
  name: string;
  // Add other properties as needed
}

export async function generateStaticParams() {
  console.log("Generating static params...")
  const companies = await prisma.company.findMany()
  console.log(
    "Companies found:",
    companies.map((c: Company) => c.id),
  )
  return companies.map((company: { id: number }) => ({
    id: company.id.toString(),
  }))
}

export default async function CompanyPage({ params }: { params: { id: string } }) {
  console.log("Params received:", params)
  const company = await prisma.company.findUnique({
    where: { id: Number(params.id) },
    include: { directors: true, services: true },
  })

  if (!company) {
    // console.log("Company not found, calling notFound()")
    notFound()
  }

  return (
    <div className="min-h-screen bg-white px-16">
      {/* Hero Section with Gradient */}
      <div
        className="relative h-[300px] md:h-[400px]"
        style={{
          background: "linear-gradient(96.22deg, #FFA229 9%, #1C4670 59.37%)",
        }}
      >
        <div className="absolute inset-0">
          <Image
            src={assets.h1}
            alt="Background Pattern"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-12 relative">
          <Image
            src={assets.logo}
            alt="RegisterKaro Logo"
            width={200}
            height={50}
            className="mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{company.name}</h1>
          <p className="text-white/90 text-lg max-w-2xl">{company.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Company Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Building2 className="text-[#FFA229]" />
              Company Details
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Calendar className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="font-medium">Established</p>
                  <p className="text-gray-600">2015</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Mumbai, Maharashtra</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative h-[300px] md:h-full min-h-[400px]">
            <Image
              src={assets.h2}
              alt="Company Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Directors Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Users className="text-[#FFA229]" />
            Board of Directors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.directors.map((director: { id: number; name: string; position?: string }) => (
              <div key={director.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{director.name}</h3>
                <p className="text-gray-600 mb-4">{director.position || "Director"}</p>
                <div className="flex flex-wrap gap-2">
                  {["Leadership", "Strategy", "Finance"].map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="px-4 py-2 bg-[#1C4670] text-white rounded-md hover:bg-[#153655] transition-colors"
          >
            Back to Companies
          </Link>
        </div>
      </div>
    </div>
  )
}

