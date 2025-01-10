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
    }
  }
}

export default function TrendingCard() {
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([])

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
        const data = await response.json()
        setTrendingCoins(data.coins.slice(0, 3))
      } catch (error) {
        console.error('Error fetching trending coins:', error)
      }
    }

    fetchTrendingCoins()
  }, [])

  return (
    <div className="bg-white rounded-2xl p-5">
      <h2 className="text-2xl font-semibold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={coin.item.thumb}
                alt={coin.item.name}
                width={24}
                height={24}
              />
              <span className="font-medium">{coin.item.name} ({coin.item.symbol.toUpperCase()})</span>
            </div>
            <div className={`px-2 py-1 rounded flex items-center gap-1 ${
              coin.item.data.price_change_percentage_24h.usd >= 0 
              ? 'bg-[#EBF9F4] text-[#14B079]' 
              : 'bg-red-100 text-red-500'
            }`}>
              {coin.item.data.price_change_percentage_24h.usd >= 0 ? '▲' : '▼'}
              {Math.abs(coin.item.data.price_change_percentage_24h.usd).toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

