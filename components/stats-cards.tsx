export function StatsCards() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-center mb-2">
            <img src="/placeholder.svg?height=32&width=32&text=Playing" alt="Playing" className="w-8 h-8" />
          </div>
          <div className="text-center">
            <span className="text-gray-400 text-sm">PLAYING NOW</span>
            <div className="text-2xl font-bold text-white">179</div>
          </div>
        </div>
  
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-center mb-2">
            <img src="/placeholder.svg?height=32&width=32&text=Jackpot" alt="Jackpot" className="w-8 h-8" />
          </div>
          <div className="text-center">
            <span className="text-gray-400 text-sm">JACKPOT</span>
            <div className="text-2xl font-bold text-green-500">127,493</div>
          </div>
        </div>
  
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-center mb-2">
            <img src="/placeholder.svg?height=32&width=32&text=Payouts" alt="Payouts" className="w-8 h-8" />
          </div>
          <div className="text-center">
            <span className="text-gray-400 text-sm">PAYOUTS</span>
            <div className="text-2xl font-bold text-green-500">178,555,244</div>
          </div>
        </div>
  
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-center mb-2">
            <img src="/placeholder.svg?height=32&width=32&text=Bets" alt="Bets" className="w-8 h-8" />
          </div>
          <div className="text-center">
            <span className="text-gray-400 text-sm">BETS</span>
            <div className="text-2xl font-bold text-white">95,632,433,589</div>
          </div>
        </div>
      </div>
    )
  }
  
  