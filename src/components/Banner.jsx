import { Button } from "@heroui/react"
import Image from "next/image"
import Link from "next/link"

const Banner = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">

      
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover Your Perfect Aesthetic
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Premium tiles for modern homes and creative spaces.  
            Transform your floors and walls with style and elegance.
          </p>

          <Link href="/tiles">
            <Button className="mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
              Browse Now
            </Button>
          </Link>
        </div>

        
        <div className="flex-1 flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            <Image
              src="/tiles/banner.webp"
              alt="Tiles Banner"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Banner