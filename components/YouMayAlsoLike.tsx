'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface TrendingCoin {
  item: {
    id: string
    coin_id: number
    name: string
    symbol: string
    thumb: string
    data: {
      price_change_percentage_24h: {
        usd: number
      }
      sparkline: string
    }
  }
}

export default function YouMayAlsoLike() {
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([])

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
        const data = await response.json()
        setTrendingCoins(data.coins)
      } catch (error) {
        console.error('Error fetching trending coins:', error)
      }
    }

    fetchTrendingCoins()
  }, [])

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-semibold mb-4">You May Also Like</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-4 pb-4">
          {trendingCoins.map((coin) => (
            <div key={coin.item.id} className="bg-white rounded-lg p-4 min-w-[252px]">
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src={coin.item.thumb}
                  alt={coin.item.name}
                  width={24}
                  height={24}
                />
                <span className="font-medium">{coin.item.symbol.toUpperCase()}</span>
                <span className={`ml-auto px-2 py-1 rounded text-sm ${
                  coin.item.data.price_change_percentage_24h.usd >= 0 
                  ? 'bg-[#EBF9F4] text-[#14B079]' 
                  : 'bg-red-100 text-red-500'
                }`}>
                  {coin.item.data.price_change_percentage_24h.usd >= 0 ? '+' : ''}
                  {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                </span>
              </div>
              <div className="font-medium">
                {coin.item.data.sparkline && (
                  <Image
                    src={coin.item.data.sparkline}
                    alt={`${coin.item.name} price graph`}
                    width={200}
                    height={60}
                    className="w-full"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

