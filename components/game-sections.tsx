import Image from 'next/image'

export function GameSections() {
  const popularGames = [
    {
      name: 'Dice',
      description: 'Classic dice game with multipliers',
      image: 'https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg',
      color: 'from-purple-600 to-purple-900'
    },
    {
      name: 'Crash',
      description: 'Watch the multiplier grow until it crashes',
      image: 'https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg',
      color: 'from-red-600 to-red-900'
    },
    {
      name: 'Plinko',
      description: 'Drop the ball and watch it bounce',
      image: 'https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg',
      color: 'from-blue-600 to-blue-900'
    },
    {
      name: 'Mines',
      description: 'Avoid the mines and collect gems',
      image: 'https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg',
      color: 'from-green-600 to-green-900'
    },
    {
      name: 'Wheel',
      description: 'Spin the wheel of fortune',
      image: 'https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg',
      color: 'from-yellow-600 to-yellow-900'
    },
    {
      name: 'Blackjack',
      description: 'Classic casino card game',
      image: 'https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg',
      color: 'from-pink-600 to-pink-900'
    }
  ]

  return (
    <div className="space-y-8 my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularGames.map((game) => (
          <div 
            key={game.name}
            className={`relative group overflow-hidden rounded-xl bg-gradient-to-br ${game.color} transform hover:scale-105 transition-all duration-300`}
          >
            <div className="relative h-48 w-full">
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
              <p className="text-gray-200 mb-4">{game.description}</p>
              <div className="flex items-center justify-between">
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                  Play Now
                </button>
                <div className="text-white/80">
                  <span className="text-sm">Current Players:</span>
                  <span className="ml-2 font-bold animate-pulse">{Math.floor(Math.random() * 1000)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6">Live Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden group hover:ring-2 hover:ring-yellow-500 transition-all">
              <div className="relative h-32">
                <Image
                  src={"https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg"}
                  alt={`Live Game ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-700 px-2 py-1 rounded text-xs text-white animate-pulse">
                  LIVE
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">Table #{index + 1}</span>
                  <span className="text-green-400">$0.01 - $1000</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  {Math.floor(Math.random() * 50)} players
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6">Recent Winners</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Game</th>
                <th scope="col" className="px-6 py-3">Player</th>
                <th scope="col" className="px-6 py-3">Bet</th>
                <th scope="col" className="px-6 py-3">Multiplier</th>
                <th scope="col" className="px-6 py-3">Profit</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index} className="border-b bg-gray-800 border-gray-700">
                  <td className="px-6 py-4">{popularGames[index % popularGames.length].name}</td>
                  <td className="px-6 py-4">Player{index + 1}</td>
                  <td className="px-6 py-4">{(Math.random() * 0.1).toFixed(8)} BTC</td>
                  <td className="px-6 py-4">{(Math.random() * 10 + 1).toFixed(2)}x</td>
                  <td className="px-6 py-4 text-green-400">+{(Math.random() * 0.1).toFixed(8)} BTC</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

