import Image from "next/image"
import Link from "next/link"
import TilesCard from "./TilesCard"

const FeaturedTiles = async () => {
  let data = []

  try {
    const res = await fetch("https://tiles-galary-swart.vercel.app/data.json", {
      cache: "no-store", 
    })

    data = await res.json()
  } catch (error) {
    console.log("Failed to fetch tiles:", error)
  }

  const featured = data.slice(0, 4)

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

     
      <h2 className="text-3xl font-bold mb-10 text-center">
        Featured Tiles
      </h2>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {featured.map((tile) => (
         <TilesCard key={tile.id} tile={tile}/>
        ))}

      </div>
    </section>
  )
}

export default FeaturedTiles