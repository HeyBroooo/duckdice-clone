"use client"

import { Bell, Settings, Mail, Menu, X, DollarSign, ListPlus, ListVideo } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useSidebar } from '../context/SidebarContext'
import { LanguageSelector } from './language-selector'

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isCollapsed, toggleSidebar } = useSidebar()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a loading placeholder
  }

  return (
    <nav className="bg-gray-800/95 backdrop-blur-sm text-gray-300 p-2 sticky top-0 z-50 h-16">
      <div className="max-w-9xl mx-auto flex items-center justify-between h-full">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
          >
            {isCollapsed ? <ListVideo className="w-6 h-6" /> : <ListPlus className="w-6 h-6" />}
          </button>
          <div className="flex items-center space-x-2">
            <DollarSign className="w-8 h-8 text-yellow-500" />
            <div className="text-xl font-bold text-white">DuckDice</div>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-xs">
            <span className="px-2 py-1 bg-gray-700/50 rounded">Online: 179</span>
            <span className="px-2 py-1 bg-gray-700/50 rounded">BTC Price: $58274.77</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-4 py-1 rounded text-sm hidden sm:block">
            REGISTER
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 transition-colors text-white px-4 py-1 rounded text-sm hidden sm:block">
            LOG IN
          </button>
          <div className="hidden sm:flex items-center space-x-2">
            <Settings className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
            <Bell className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
            <Mail className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
            <LanguageSelector />
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-2 space-y-2 animate-fadeIn">
          <button className="bg-orange-500 text-white w-full py-2 rounded">
            REGISTER
          </button>
          <button className="bg-gray-700 text-white w-full py-2 rounded">
            LOG IN
          </button>
          <div className="flex justify-around py-2">
            <Settings className="w-5 h-5" />
            <Bell className="w-5 h-5" />
            <Mail className="w-5 h-5" />
            <LanguageSelector />
          </div>
        </div>
      )}
    </nav>
  )
}

