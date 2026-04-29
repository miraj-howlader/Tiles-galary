import Image from "next/image"
import Link from "next/link"

const FeaturedTiles = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  })

  const data = await res.json()

  // take only first 4 tiles
  const featured = data.slice(0, 4)

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured Tiles
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {featured.map((tile) => (
          <div
            key={tile.id}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">
                {tile.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {tile.category}
              </p>

              <p className="mt-2 font-bold">
                ${tile.price}
              </p>

              {/* Button */}
              <Link href={`/tiles/${tile.id}`}>
                <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                  View Details
                </button>
              </Link>

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default FeaturedTiles