"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Building2 } from 'lucide-react'
import { Button } from './ui/button'

interface Company {
  id: number
  name: string
  description: string
  directors: { name: string }[]
  services: { name: string }[]
}

interface CompanyShowcaseProps {
  companies: Company[]
}

export function CompanyShowcase({ companies }: CompanyShowcaseProps) {
  // Removing any server-side specific logic
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 ">Featured Companies <small>(Section for given assignment)</small></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {companies.map((company) => (
            <Link 
              key={company.id} 
              href={`/companies/${company.id}`}
              className="no-underline"
            >
              <Button
                variant="outline"
                className="h-auto py-4 w-full flex items-center justify-center gap-2"
              >
                <Building2 className="w-5 h-5" />
                {company.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}