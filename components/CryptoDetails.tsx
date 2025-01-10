'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const TradingViewWidget = dynamic(() => import('./TradingViewWidget'), { ssr: false })

interface BitcoinData {
  bitcoin: {
    usd: number
    usd_24h_change: number
    inr: number
  }
}

export default function CryptoDetails() {
  const [bitcoinData, setBitcoinData] = useState<BitcoinData | null>(null)

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true'
        )
        const data = await response.json()
        setBitcoinData(data)
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error)
      }
    }

    fetchBitcoinData()
  }, [])

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Image
          src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
          alt="Bitcoin"
          width={32}
          height={32}
        />
        <h1 className="text-2xl font-semibold">Bitcoin</h1>
        <span className="text-sm text-gray-500">BTC</span>
        <span className="ml-8 bg-[#808A9D] text-white px-3 py-2 rounded-lg">Rank #1</span>
      </div>

      <div className="mb-6">
        {bitcoinData ? (
          <>
            <div className="flex items-baseline gap-8">
              <span className="text-3xl font-semibold">
                ${bitcoinData.bitcoin.usd.toLocaleString()}
              </span>
              <span className={`px-2 py-1 rounded flex items-center gap-1 ${
                bitcoinData.bitcoin.usd_24h_change >= 0 
                ? 'bg-[#EBF9F4] text-[#14B079]' 
                : 'bg-red-100 text-red-500'
              }`}>
                {bitcoinData.bitcoin.usd_24h_change >= 0 ? '▲' : '▼'}
                {Math.abs(bitcoinData.bitcoin.usd_24h_change).toFixed(2)}%
              </span>
            </div>
            <span className="text-sm text-gray-500">
              ₹ {bitcoinData.bitcoin.inr.toLocaleString()}
            </span>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <div className="h-[420px] w-full">
        <TradingViewWidget />
      </div>
    </div>
  )
}

