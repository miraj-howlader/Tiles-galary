import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-white mt-10">
      <div className="max-w-7xl  mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image
            src="/tiles/logo.png"
            width={80}
            height={40}
            alt="logo"
            className="rounded-md"
          />

          <p className="text-gray-400 mt-2 text-sm">
            Premium tiles for modern homes and creative spaces.Designed to bring elegance, durability, and style to every room.Transform your floors and walls with timeless design and quality.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tiles" className="hover:text-white">
                All Tiles
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-white">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            Email: mirajhowlader9999@gmail.com
          </p>
          <p className="text-gray-400 text-sm">Phone: +880 140 457 6127</p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-400 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-400 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-300 text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} TileStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
