'use client'

import { ArrowRight } from 'lucide-react'
import TrendingCard from './TrendingCard'

export default function TrendingSidebar() {
  return (
    <div className="space-y-5">
      <div className="bg-[#0052FE] text-white p-5 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Get Started with KoinX for FREE</h2>
        <p className="text-sm mb-6">
          With our range of features that you can equip for free,
          KoinX allows you to be more educated and aware of your tax reports.
        </p>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20012131-yaHVUUvz1L5Pmld5PMED7eVdVdfOIT.png"
          alt="KoinX Features"
          className="mx-auto mb-6"
          width={178}
          height={166}
        />
        <button className="w-full bg-white text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2">
          Get Started for FREE <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      
      <TrendingCard />
    </div>
  )
}

