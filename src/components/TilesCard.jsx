import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TilesCard = ({tile}) => {
  return (
     <div
            key={tile.id}
            className="group border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition duration-300"
          >

            
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

        
            <div className="p-4">
              <h3 className="font-semibold text-lg group-hover:text-black">
                {tile.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {tile.category}
              </p>

              <p className="mt-2 font-bold text-gray-900">
                ${tile.price}
              </p>

              
              <Link
                href={`/all-tiles/${tile.id}`}
                className="mt-4 inline-block w-full text-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
              >
                View Details
              </Link>

            </div>
          </div>
  )
}

export default TilesCard