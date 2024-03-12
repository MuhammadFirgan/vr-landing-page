'use client'

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <nav>
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white">Logo</span>
        </div>
        {/* Navbar */}
        <div className="hidden sm:flex sm:items-center sm:space-x-4">
          <Link href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
          <Link href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
          <Link href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="flex sm:hidden">
          <button onClick={toggleNavbar} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    {/* Mobile Menu */}
    <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
      <div className="px-2 pt-2 pb-3">
        <Link href="#" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md text-base font-medium">Home</Link>
        <Link href="#" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md text-base font-medium">About</Link>
        <Link href="#" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md text-base font-medium">Services</Link>
        <Link href="#" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md text-base font-medium">Contact</Link>
      </div>
    </div>
  </nav>
  )
}
