"use client"

import { useState } from 'react'
import { Trophy, Gift, Calendar, MessageSquare, ChevronRight, ChevronLeft, Crown, Coins, Target, Users, TrendingUp, Zap, Settings } from 'lucide-react'

export function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    {
      icon: <Trophy className="w-5 h-5 text-yellow-500" />,
      label: 'VIP Club',
      badge: 'NEW',
      badgeColor: 'bg-green-500'
    },
    {
      icon: <Crown className="w-5 h-5 text-yellow-500" />,
      label: 'DD Club'
    },
    {
      icon: <Coins className="w-5 h-5 text-green-500" />,
      label: 'Staking 2.0',
      badge: 'APY UP TO 171%',
      badgeColor: 'text-green-500'
    },
    {
      icon: <Gift className="w-5 h-5 text-yellow-500" />,
      label: 'Bonuses',
      submenu: [
        { label: 'Contest', value: '$15,000' },
        { label: 'Deposit Bonus', value: '+100%' },
        { label: 'Decoy Pot', value: 'up to $10,000' }
      ]
    },
    {
      icon: <Calendar className="w-5 h-5 text-blue-500" />,
      label: 'Monthly Event'
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-purple-500" />,
      label: 'Forum'
    },
    {
      icon: <Target className="w-5 h-5 text-red-500" />,
      label: 'Sports'
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-500" />,
      label: 'Affiliates'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-green-500" />,
      label: 'Statistics'
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      label: 'Tournaments'
    },
    {
      icon: <Settings className="w-5 h-5 text-gray-400" />,
      label: 'Settings'
    }
  ]

  return (
    <>
      {/* Mobile overlay */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsCollapsed(true)}
        />
      )}

      <aside 
        className={`
          fixed lg:relative top-[64px] h-[calc(100vh-64px)]
          ${isCollapsed ? 'w-16' : 'w-64'} 
          bg-gray-800 text-gray-300
          transform transition-all duration-300 ease-in-out
          ${isCollapsed ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}
          z-50 overflow-hidden
        `}
      >
        <div className="h-full flex flex-col justify-between py-4">
          <div className="space-y-2 px-2">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <div className={`
                  flex items-center rounded-lg p-2
                  ${!item.submenu ? 'hover:bg-gray-700' : ''}
                  transition-colors cursor-pointer
                `}>
                  <div className={`
                    flex items-center
                    ${isCollapsed ? 'justify-center w-full' : ''}
                  `}>
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    {!isCollapsed && (
                      <span className="ml-3 text-sm">{item.label}</span>
                    )}
                  </div>
                  {!isCollapsed && item.badge && (
                    <span className={`
                      ml-auto text-xs px-1.5 py-0.5 rounded
                      ${item.badgeColor}
                      ${item.badgeColor.startsWith('text') ? '' : 'text-white'}
                      ${item.badge === 'NEW' ? 'animate-pulse' : ''}
                    `}>
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="
                    absolute left-full top-0 ml-2 p-2 bg-gray-900 rounded-md
                    invisible group-hover:visible opacity-0 group-hover:opacity-100
                    transition-opacity duration-200 whitespace-nowrap z-50
                  ">
                    <span className="text-sm">{item.label}</span>
                    {item.badge && (
                      <span className={`
                        ml-2 text-xs px-1.5 py-0.5 rounded
                        ${item.badgeColor}
                        ${item.badgeColor.startsWith('text') ? '' : 'text-white'}
                      `}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Collapse toggle button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="
              absolute bottom-4 right-2
              bg-gray-700 hover:bg-gray-600 rounded-full p-1.5
              transition-colors duration-200
              hidden lg:block
            "
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="
            absolute top-2 -right-10 
            bg-gray-700 hover:bg-gray-600 rounded-full p-2
            transition-colors duration-200
            lg:hidden
          "
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </aside>
    </>
  )
}

