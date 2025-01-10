'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex justify-between items-center h-20">
         <div className="flex-shrink-0 flex items-center">
         <Image
      src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
      alt="Bitcoin Logo"
      width={100}
      height={100}
    />
                <span className="text-xl font-bold">KoinX</span>
              </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-base font-semibold">Crypto Taxes</a>
            <a href="#" className="text-base font-semibold">Free Tools</a>
            <a href="#" className="text-base font-semibold">Resource Center</a>
            <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white px-6 py-2 rounded-lg font-semibold">
              Get Started
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 border-t border-gray-200">
          <a href="#" className="block py-2 text-base font-semibold">Crypto Taxes</a>
          <a href="#" className="block py-2 text-base font-semibold">Free Tools</a>
          <a href="#" className="block py-2 text-base font-semibold">Resource Center</a>
          <button className="w-full bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white px-6 py-2 rounded-lg font-semibold mt-2">
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}

