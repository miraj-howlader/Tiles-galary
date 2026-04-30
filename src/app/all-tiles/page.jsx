import TilesCard from '@/components/TilesCard'
import React from 'react'

const AllTiles = async () => {
  let allTiles = []

  try {
    const res = await fetch("https://tiles-galary-swart.vercel.app/data.json", {
      cache: "no-store",
    })

    allTiles = await res.json()
  } catch (error) {
    console.log("Failed to fetch tiles:", error)
  }

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

    
      {allTiles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {allTiles.map((tile) => (
            <div
              key={tile.id}
              className="transform hover:-translate-y-1 transition duration-300"
            >
              <TilesCard tile={tile} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          No tiles found 😢
        </div>
      )}

    </section>
  )
}

export default AllTiles