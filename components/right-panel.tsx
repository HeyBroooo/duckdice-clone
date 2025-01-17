"use client"

import { useState, useEffect } from 'react'
import { Trophy, Clock, Info } from 'lucide-react'
import Image from 'next/image'
import { useSidebar } from '../context/SidebarContext'

const leaderboardData = [
  { rank: 1, username: "CashyFlow_Kick", score: 87.13, prize: 100, points: 10000, level: 5, avatar: "https://www.shutterstock.com/shutterstock/photos/2471601163/display_1500/stock-photo-create-an-avatar-for-an-ai-solution-for-sales-must-be-a-young-woman-with-purple-hair-wearing-2471601163.jpg" },
  { rank: 2, username: "Ykucalycog723", score: 51.60, prize: 75, points: 7500, level: 4, avatar: "https://www.shutterstock.com/shutterstock/photos/2471601163/display_1500/stock-photo-create-an-avatar-for-an-ai-solution-for-sales-must-be-a-young-woman-with-purple-hair-wearing-2471601163.jpg" },
  { rank: 3, username: "phuynh3", score: 44.35, prize: 50, points: 5000, level: 3, avatar: "https://www.shutterstock.com/shutterstock/photos/2471601163/display_1500/stock-photo-create-an-avatar-for-an-ai-solution-for-sales-must-be-a-young-woman-with-purple-hair-wearing-2471601163.jpg" },
  { rank: 4, username: "Yung3000", score: 33.65, prize: 45, points: 4500, level: 3, avatar: "https://www.shutterstock.com/shutterstock/photos/2471601163/display_1500/stock-photo-create-an-avatar-for-an-ai-solution-for-sales-must-be-a-young-woman-with-purple-hair-wearing-2471601163.jpg" },
  { rank: 5, username: "CryptoKing", score: 31.22, prize: 40, points: 4000, level: 4, avatar: "https://www.shutterstock.com/shutterstock/photos/2471601163/display_1500/stock-photo-create-an-avatar-for-an-ai-solution-for-sales-must-be-a-young-woman-with-purple-hair-wearing-2471601163.jpg" },
  { rank: 6, username: "BitMaster", score: 29.87, prize: 35, points: 3500, level: 3, avatar: "https://www.shutterstock.com/shutterstock/photos/2471601163/display_1500/stock-photo-create-an-avatar-for-an-ai-solution-for-sales-must-be-a-young-woman-with-purple-hair-wearing-2471601163.jpg" },
  { rank: 8, username: "Ykucalycog723", score: 51.60, prize: 75, points: 7500, level: 4, avatar: "https://www.shutterstock.com/shutterstock/photos/2471601163/display_1500/stock-photo-create-an-avatar-for-an-ai-solution-for-sales-must-be-a-young-woman-with-purple-hair-wearing-2471601163.jpg" },
 
]






export function RightPanel() {
  const { showRightPanel } = useSidebar()
  const [currentTime, setCurrentTime] = useState("08h:50m:15s")
  const [scrollIndex, setScrollIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % leaderboardData.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Add countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setCurrentTime(`${hours}h:${minutes}m:${seconds}s`)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div 
      className={`
        fixed top-16 right-0 w-64 bg-gray-800 border-l border-gray-700 h-[calc(100vh-4rem)] 
        overflow-hidden flex flex-col transform transition-transform duration-300 ease-in-out
        ${showRightPanel ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      {/* Event Banner */}
      <div className="p-4 bg-gray-800 border-b border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Sniper Race</h3>
          <button className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors">
            JOIN FOR FREE
          </button>
        </div>

        {/* Progress Card */}
        <div className="bg-gray-700/50 rounded-xl p-4">
          <div className="relative overflow-hidden rounded-lg aspect-video mb-3">
            <Image
              src="https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg"
              alt="Catch Target Rolls"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center mb-2">
            <span className="text-sm text-gray-400">Catch Target Rolls</span>
            <div className="text-2xl font-bold text-white">0-100</div>
          </div>
          <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500 w-3/4 rounded-full" />
          </div>
          <div className="mt-2 flex items-center justify-center text-sm">
            <Clock className="w-4 h-4 text-orange-500 mr-1" />
            <span className="text-gray-400">Ends in </span>
            <span className="text-white ml-1">{currentTime}</span>
          </div>
        </div>
      </div>

      {/* Prize Pool */}
      <div className="p-4 border-b border-gray-700">
        <div className="bg-gray-700/50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-semibold">PRIZE POOL</span>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <span className="text-sm text-gray-400">SNIPERS: 69</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-green-500">500</div>
            <div className="text-2xl font-bold text-yellow-500">50,000</div>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <h5 className="text-gray-400 text-center overflow-hidden">LEADERS</h5>

      <div className="flex-1 overflow-hidden">

        <div className="p-4">
          <div className="space-y-2 relative">
            <div 
              className="transition-transform duration-500" 
              style={{ transform: `translateY(-${scrollIndex * 64}px)` }}
            >
              {leaderboardData.map((player) => (
                <div 
                  key={player.username}
                  className="bg-gray-700/50 rounded-lg p-2 flex items-center gap-2 h-16 mb-3"
                >
                  <div className={`
                    w-6 h-6 flex items-center justify-center rounded text-sm
                    ${player.rank === 1 ? 'bg-yellow-500' : 
                      player.rank === 2 ? 'bg-gray-400' :
                      player.rank === 3 ? 'bg-orange-700' : 'bg-gray-600'}
                  `}>
                    {player.rank}
                  </div>
                  <div className="w-8 h-8 relative rounded-full overflow-hidden">
                    <Image
                      src={player.avatar}
                      alt={player.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-white font-medium truncate">{player.username}</span>
                      <div className="flex">
                        {Array.from({ length: player.level }).map((_, i) => (
                          <span key={i} className="text-yellow-500 text-xs">★</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-green-500">{player.score}</span>
                      <Info className="w-3 h-3 text-gray-500" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">${player.prize}</div>
                    <div className="text-sm text-yellow-500">{player.points}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}