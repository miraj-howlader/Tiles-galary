'use client'
import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        
        <div className="flex items-center">
          <Image
            src="/tiles/logo.png"
            width={80}
            height={40}
            alt="logo"
            className="rounded-full"
          />
        </div>

       
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/tiles" className="hover:text-blue-500">
            All Tiles
          </Link>
          <Link href="/profile" className="hover:text-blue-500">
            Profile
          </Link>
        </div>

        
        <div className="flex items-center gap-3">
          <Button className="px-4 py-1 border rounded-md hover:bg-gray-500">
            Login
          </Button>
          <Button className="px-4 py-1 bg-black text-white rounded-md hover:bg-gray-800">
            Signup
          </Button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar