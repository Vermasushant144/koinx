'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const TradingViewWidget = dynamic(() => import('./TradingViewWidget'), { ssr: false })

interface BitcoinData {
  usd: number
  usd_24h_change: number
  inr: number
}

export default function BitcoinOverview() {
  const [bitcoinData, setBitcoinData] = useState<BitcoinData | null>(null)

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true')
        const data = await response.json()
        setBitcoinData(data.bitcoin)
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error)
      }
    }

    fetchBitcoinData()
  }, [])

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Bitcoin Overview</h2>
      {bitcoinData ? (
        <div className="mb-4">
          <p className="text-3xl font-bold">${bitcoinData.usd.toLocaleString()}</p>
          <p className="text-lg">₹{bitcoinData.inr.toLocaleString()}</p>
          <p className={`text-lg ${bitcoinData.usd_24h_change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {bitcoinData.usd_24h_change >= 0 ? '▲' : '▼'} {Math.abs(bitcoinData.usd_24h_change).toFixed(2)}%
          </p>
        </div>
      ) : (
        <p>Loading Bitcoin data...</p>
      )}
      <div className="h-96">
        <TradingViewWidget />
      </div>
    </div>
  )
}

