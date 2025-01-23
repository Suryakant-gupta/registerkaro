import Image from "next/image";
import { assets } from "../assets/assets";

export function MobileServices() {
    return (
      <section className=" bg-navy text-white px-16">
        <div className="container mx-auto px-4" >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Manage Your Services by your Mobile Phone</h2>
              <p className="text-gray-300 mb-8">
                Access all our services and track your business compliance requirements right from your mobile phone. Our
                user-friendly mobile interface makes it easy to stay on top of your business needs.
              </p>
              <div className="flex gap-4">
                
                <Image src={assets.gp1} alt="Play Store" />
                <Image src={assets.gp2} alt="Play Store" />
                
              </div>
            </div>
            <div className="relative ">
             
                <Image src={assets.gp3} alt="Play Store" className=""/>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  