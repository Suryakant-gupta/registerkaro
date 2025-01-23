import { Play } from "lucide-react"
import Image from "next/image"
import { assets } from "../assets/assets"

export function VideoIntro() {
  return (
    <section className="bg-[#1a2b6d] text-white py-16 px-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Video Introductions</h2>
            <p className="text-gray-300 mb-12">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam
              tincidunt apis dui.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  {/* <div className="w-12 h-12 bg-[#ff6b00] rounded-full flex items-center justify-center"> */}
                    {/* <img src="/placeholder.svg" alt="Explore" className="w-6 h-6" /> */}
                    <Image src={assets.di1} alt="Ideas" width={24} height={24} className="w-12 h-12"/>
                  {/* </div> */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Explore ideas together</h3>
                  <p className="text-gray-300">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  {/* <div className="w-12 h-12 bg-[#ff6b00] rounded-full flex items-center justify-center"> */}
                    {/* <img src="/placeholder.svg" alt="Ideas" className="w-6 h-6" /> */}
                    <Image src={assets.di2} alt="Ideas" width={24} height={24} className="w-12 h-12" />
                  {/* </div> */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bring those ideas to life</h3>
                  <p className="text-gray-300">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            {/* <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201000005965-28i93TcDXtqT2Hpk8ANbPMQEwza1ON.png"
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            /> */}
             <Image src={assets.vid} alt="Ideas" width={100} height={100} className="w-full h-full object-cover" />
            <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white" fill="white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

