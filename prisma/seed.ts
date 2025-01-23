import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create companies with directors and services
  const techCorp = await prisma.company.create({
    data: {
      name: "TechCorp Solutions",
      description: "Leading technology solutions provider",
      directors: {
        create: [
          { name: "John Smith" },
          { name: "Sarah Johnson" },
          { name: "Mike Williams" }
        ]
      },
      services: {
        create: [
          { name: "Software Development" },
          { name: "Cloud Solutions" },
          { name: "IT Consulting" }
        ]
      }
    }
  })

  const globalFinance = await prisma.company.create({
    data: {
      name: "Global Finance Ltd",
      description: "International financial services company",
      directors: {
        create: [
          { name: "Emma Brown" },
          { name: "David Clark" },
          { name: "Lisa Anderson" }
        ]
      },
      services: {
        create: [
          { name: "Investment Banking" },
          { name: "Asset Management" },
          { name: "Financial Planning" }
        ]
      }
    }
  })

  const ecoGreen = await prisma.company.create({
    data: {
      name: "EcoGreen Energy",
      description: "Renewable energy solutions provider",
      directors: {
        create: [
          { name: "Robert Wilson" },
          { name: "Jennifer Lee" },
          { name: "Thomas Moore" }
        ]
      },
      services: {
        create: [
          { name: "Solar Power" },
          { name: "Wind Energy" },
          { name: "Energy Consulting" }
        ]
      }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })