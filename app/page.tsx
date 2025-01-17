"use client"

import { NavBar } from "@/components/nav-bar"
import { SideBar } from "@/components/side-bar"
import { HeroSection } from "@/components/hero-section"
import { CryptoTicker } from "@/components/crypto-ticker"
import { GameSections } from "@/components/game-sections"
import { StatsCards } from "@/components/stats-cards"
import { Jackpots } from "@/components/jackpots"
import { useSidebar } from '../context/SidebarContext'
import { useEffect, useState } from 'react'

export default function Home() {
  const { isCollapsed } = useSidebar()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a loading placeholder
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <main className={`flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 transition-all duration-300 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} mt-16`}>
          <div className="max-w-7xl mx-auto space-y-6">
            <HeroSection />
            <CryptoTicker />
            <Jackpots />
            <GameSections />
            <StatsCards />
          </div>
        </main>
      </div>
    </div>
  )
}

