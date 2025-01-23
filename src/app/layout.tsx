import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Register Karo - Your Trusted Partner for Compliance Business Needs",
  description: "Online platform for company registration, compliance, and legal services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <html lang="en">
      <body>
        {children}
      </body>
    </html>
    </html>
  )
}

