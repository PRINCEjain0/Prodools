"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false); // State for menu visibility

  return (
    <nav className="bg-[#f3efe5] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-gray-800 cursor-pointer ml-10">Prodools</span>
        </Link>
        <div className="hidden sm:flex space-x-4"> 
          <Link href="/" className="text-gray-800 hover:text-black">Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-black">About</Link>
          <Link href="/services" className="text-gray-800 hover:text-black">Services</Link>
          <Link href="/contact" className="text-gray-800 hover:text-black">Contact</Link>
        </div>
        <div className="sm:hidden"> 
          <button
            className={`w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 mb-2
                        ${showMenu ? 'text-black bg-gray-200' : ''}`} 
            onClick={() => setShowMenu(!showMenu)} // Toggle menu visibility
          >
            {showMenu ? 'Hide Navigation' : 'Show Navigation'}
          </button>
          {showMenu && ( 
            <ul className="space-y-2"> 
              <li className="text-xl hover:underline">
                <Link href="/" className="text-gray-800 hover:text-blue-500">Home</Link>
              </li>
              <li className="text-xl hover:underline">
                <Link href="/about" className="text-gray-800 hover:text-blue-500">About</Link>
              </li>
              <li className="text-xl hover:underline">
                <Link href="/services" className="text-gray-800 hover:text-blue-500">Services</Link>
              </li>
              <li className="text-xl hover:underline">
                <Link href="/contact" className="text-gray-800 hover:text-blue-500">Contact</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
