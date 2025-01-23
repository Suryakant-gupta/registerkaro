import { Metadata } from 'next'
import { prisma } from "../../../lib/db"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { assets } from "../../../assets/assets"
import { 
  Building2, Calendar, MapPin, Mail, Phone, Users 
} from "lucide-react"

// Define proper types for Next.js page props
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Define company type if you haven't already
interface Company {
  id: number
  name: string
  description: string
  directors: Array<{
    id: number
    name: string
  }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const company = await prisma.company.findUnique({
    where: { id: Number(params.id) },
  })

  return {
    title: company?.name || 'Company Details',
    description: company?.description || 'Company Information'
  }
}

export async function generateStaticParams() {
  const companies = await prisma.company.findMany({
    select: { id: true }
  })

  return companies.map((company) => ({
    id: company.id.toString()
  }))
}

// Use the Props type for the page component
export default async function CompanyPage({ params }: Props) {
  const company = await prisma.company.findUnique({
    where: { id: Number(params.id) },
    include: { directors: true }
  })

  if (!company) {
    notFound()
  }


  return (
    <div className="min-h-screen bg-white px-16">
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {company.name}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl">
            {company.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
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

          <div className="relative h-[300px] md:h-full min-h-[400px]">
            <Image
              src={assets.h2}
              alt="Company Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Users className="text-[#FFA229]" />
            Board of Directors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.directors.map((director) => (
              <div key={director.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{director.name}</h3>
                {/* <p className="text-gray-600 mb-4">{director.position || "Director"}</p> */}
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