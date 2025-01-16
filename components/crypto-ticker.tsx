"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function CryptoTicker() {
  const [tickerPosition, setTickerPosition] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerPosition((prevPosition) => (prevPosition - 1) % -100)
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const cryptos = [
    { name: "Bitcoin", symbol: "BTC", price: "$45,123.45", change: "+2.5%" },
    { name: "Ethereum", symbol: "ETH", price: "$3,456.78", change: "-1.2%" },
    { name: "Dogecoin", symbol: "DOGE", price: "$0.3456", change: "+15.7%" },
    { name: "Litecoin", symbol: "LTC", price: "$178.90", change: "+0.8%" },
    { name: "Ripple", symbol: "XRP", price: "$1.23", change: "-3.4%" },
    { name: "Cardano", symbol: "ADA", price: "$2.34", change: "+5.6%" },
  ]

  return (
    <div className="bg-gray-800 rounded-lg p-4 my-6 overflow-hidden">
      <div 
        className="flex whitespace-nowrap transition-transform duration-1000 ease-linear"
        style={{ transform: `translateX(${tickerPosition}%)` }}
      >
        {cryptos.concat(cryptos).map((crypto, index) => (
          <div key={index} className="inline-flex items-center mx-4">
            <Image
              src={`https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg=${crypto.symbol}`}
              alt={crypto.name}
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="text-white font-semibold">{crypto.name}</span>
            <span className="text-gray-400 mx-2">{crypto.price}</span>
            <span className={crypto.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
              {crypto.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

