import { Mail, Phone } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-navy text-white py-2 text-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <span>info@registerkaro.in</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <span>+91 1234567890</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-primary">
            Support
          </a>
          <a href="#" className="hover:text-primary">
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

