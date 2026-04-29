// import Image from "next/image"
// import Link from "next/link"

// const FeaturedTiles = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/data.json", {
//       cache: "no-store",
//     })

//     const data = await res.json()

//     const featured = data.slice(0, 4)

//     return (
//       <section className="max-w-7xl mx-auto px-4 py-16">
//         <h2 className="text-3xl font-bold mb-8 text-center">
//           Featured Tiles
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {featured.map((tile) => (
//             <div key={tile.id} className="border rounded-xl overflow-hidden">
              
//               <div className="relative w-full h-48">
//                 <Image
//                   src={tile.image}
//                   alt={tile.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <div className="p-4">
//                 <h3 className="font-semibold">{tile.title}</h3>

//                 <Link href={`/tiles/${tile.id}`}>
//                   <button className="mt-3 w-full bg-black text-white py-2 rounded">
//                     View Details
//                   </button>
//                 </Link>
//               </div>

//             </div>
//           ))}
//         </div>
//       </section>
//     )
//   } catch (error) {
//     console.log(error)
//     return <p>Failed to load tiles</p>
//   }
// }

// export default FeaturedTiles