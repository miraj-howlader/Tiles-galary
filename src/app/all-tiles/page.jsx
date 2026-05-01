
import TilesCard from '@/components/TilesCard'
import { Button, Input } from '@heroui/react'
import { Search } from 'lucide-react'
import React from 'react'

const AllTiles = async () => {
  

    const res = await fetch("https://tiles-galary-swart.vercel.app/data.json")
    const allTilesData = await res.json()


  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          Explore All Tiles 🧱
        </h1>
        <p className="text-gray-500 mt-2">
          Discover modern, creative and premium tile collections
        </p>
      </div>

      <div className='flex items-center justify-center '>
      <div className='flex gap-4 mb-6'>
          <Input placeholder='Search Title ' className={'w-full h-full border border-gray-300'}/>
        <Button variant='outline'>
            <Search/>
        </Button>
      </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {allTilesData.map((tile) => (
            <div
              key={tile.id}
              className="transform hover:-translate-y-1 transition duration-300"
            >
              <TilesCard tile={tile} />
            </div>
          ))}
        </div>
    
     

    </section>
  )
}

export default AllTiles