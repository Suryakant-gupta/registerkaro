{/* <antArtifact identifier="updated-page" type="application/vnd.ant.code" language="typescript" title="Updated Page Component"> */ }
import { prisma } from "../lib/db";


import { CompanyShowcase } from "../components/company-showcase"
import { Hero } from "../components/hero"
import { Services } from "../components/services"
import { Testimonials } from "../components/testimonials"
import { FAQ } from "../components/faq"
import { Stats } from "../components/stats"
import { ClientLogos } from "../components/client-logos"
import { Footer } from "../components/footer"
import { Features } from "../components/features"
import { Header } from "../components/header"
import { Newsletter } from "../components/newsletter"
import { TopBar } from "../components/top-bar"
import { About } from "../components/about"
import { VideoIntro } from "../components/video-intro"
import { HappyClients } from "../components/happy-clients"
import { DigitalTransformation } from "../components/digital-transformation"
import { MobileServices } from "../components/mobile-services"


  interface Company {
  id: number
  name: string
  description: string
  directors: string[]
  services: string[]
}

async function getCompanies() {
  return await prisma.company.findMany({
    include: {
      directors: true,
      services: true
    }
  })
}

export default async function Home() {
  const companies = await getCompanies()

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <CompanyShowcase companies={companies} />
        <ClientLogos />
        <Services />
        <About />
        <Features />
        <VideoIntro />
        <HappyClients />
        <DigitalTransformation />
        <Testimonials />
        <FAQ />
        <MobileServices />
        <Stats />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}