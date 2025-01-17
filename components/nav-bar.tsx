"use client"

import React, { useState } from 'react';
import { 
  X, 
  Bitcoin, 
  Wallet,
  ChevronDown, 
  Settings2
} from 'lucide-react';

// Currency Modal Component
interface CurrencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CurrencyModal: React.FC<CurrencyModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('crypto');
  const [searchQuery, setSearchQuery] = useState('');
  const [hideZeroBalances, setHideZeroBalances] = useState(false);
  const [isSetAsDefault, setIsSetAsDefault] = useState(false);
  const [isShowHint, setIsShowHint] = useState(false); 

  const currencies = [
    { id: 'btc', name: 'Bitcoin', symbol: 'BTC', balance: 0.00, icon: Bitcoin },
    { id: 'usdt', name: 'Tether', symbol: 'USDT', balance: 0.00, icon: Wallet },
    { id: 'ltc', name: 'Litecoin', symbol: 'LTC', balance: 0.00, icon: Wallet },
    { id: 'trx', name: 'TRON', symbol: 'TRX', balance: 0.00, icon: Wallet },
    { id: 'doge', name: 'Dogecoin', symbol: 'DOGE', balance: 0.00, icon: Wallet },
  ];

  const filteredCurrencies = currencies.filter(currency => {
    const matchesSearch = currency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         currency.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBalance = !hideZeroBalances || currency.balance > 0;
    return matchesSearch && matchesBalance;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm">
      <div className="fixed inset-0 flex items-center justify-center p-4" onClick={onClose}>
        <div 
          className="bg-gray-800 rounded-lg w-full max-w-md" 
          onClick={e => e.stopPropagation()}
        >
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">All Currencies</h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-300" />
              </button>
            </div>

            <div className="flex gap-2">
              <button
                className={`flex-1 py-2 rounded transition-colors ${
                  activeTab === 'crypto'
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-900 text-gray-400'
                }`}
                onClick={() => setActiveTab('crypto')}
              >
                Crypto
              </button>
              <button
                className={`flex-1 py-2 rounded transition-colors ${
                  activeTab === 'cash'
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-900 text-gray-400'
                }`}
                onClick={() => setActiveTab('cash')}
              >
                Cash
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-900 rounded py-2 px-4 pr-10 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Settings2 className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
            </div>

            <div className="space-y-2 max-h-[300px] overflow-y-auto custom-scrollbar">
              {filteredCurrencies.map((currency) => (
                <div
                  key={currency.id}
                  className="flex items-center justify-between p-2 hover:bg-gray-700 rounded cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <currency.icon className="w-6 h-6 text-gray-300" />
                    <div>
                      <div className="font-medium text-white">{currency.symbol}</div>
                      <div className="text-sm text-gray-400">{currency.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white">{currency.balance.toFixed(2)}</div>
                    <div className="text-sm text-gray-400">$0.00</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start justify-between pt-4 border-t border-gray-700">
  <span className="text-sm text-gray-400">Hide zero balances</span>
  <button
    onClick={() => setHideZeroBalances(!hideZeroBalances)}
    className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
      hideZeroBalances ? 'bg-green-600' : 'bg-gray-700'
    }`}
  >
    <div
      className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${
        hideZeroBalances ? 'translate-x-6' : 'translate-x-0'
      }`}
    />
  </button>
</div>

<div className='border border-gray-500 rounded-xl p-2 mx-2'>
      <div className="flex items-start justify-between pt-4 border-gray-700">
        <span className="text-sm text-gray-400">SET AS DEFAULT</span>
        <button
          onClick={() => setIsSetAsDefault(!isSetAsDefault)} 
          className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
            isSetAsDefault ? 'bg-green-600' : 'bg-gray-700'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${
              isSetAsDefault ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      <div className="flex items-start justify-between pt-3 border-t mt-2 border-gray-700">
        <span className="text-sm text-gray-400">SHOW HINT</span>
        <button
          onClick={() => setIsShowHint(!isShowHint)} 
          className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
            isShowHint ? 'bg-green-600' : 'bg-gray-700'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${
              isShowHint ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};


import { 
  Bell, 
  Settings, 
  Mail, 
  Menu, 
  DollarSign, 
  ListPlus, 
  ListVideo,
} from 'lucide-react'
import {  useEffect } from 'react'
import { useSidebar } from '../context/SidebarContext'
import { LanguageSelector } from './language-selector'

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false);
  const { isCollapsed, toggleSidebar, showRightPanel, setShowRightPanel } = useSidebar()
  const [isMounted, setIsMounted] = useState(false)
  const currentBalance = "$1234.56"
  const userName = "John Doe"
  const userLevel = 5

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSettingsClick = () => {
    setShowRightPanel(!showRightPanel)
  }

  const handleWalletClick = () => {
    setIsCurrencyModalOpen(true);
  };


  if (!isMounted) {
    return null
  }

  return (
    <>
    <nav className="bg-gray-800/95 backdrop-blur-sm text-gray-300 p-2 sticky top-0 z-50 h-16 border-b border-gray-700">
      <div className="max-w-9xl mx-auto flex items-center justify-between h-full">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-700/70 transition-colors duration-200"
          >
            {isCollapsed ? <ListVideo className="w-6 h-6" /> : <ListPlus className="w-6 h-6" />}
          </button>
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-2">
              <DollarSign className="w-6 h-6 text-gray-900" />
            </div>
            <div className="text-xl font-bold text-white">DuckDice</div>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-xs">
            <span className="px-3 py-1.5 bg-gray-700/50 rounded-lg flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Online: 179
            </span>
            <span className="px-3 py-1.5 bg-gray-700/50 rounded-lg flex items-center">
              <span className="text-yellow-500 mr-1">₿</span>
              BTC: $58,274.77
            </span>
          </div>
        </div>

        {/* Middle Section - Wallet */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="px-4 py-1.5 bg-gray-700/50 rounded-lg">
            <span className="text-sm text-gray-400">Balance:</span>
            <span className="ml-2 text-white font-medium">{currentBalance}</span>
          </div>
          <button
                      onClick={handleWalletClick}

          className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-1.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
            <Wallet className="w-5 h-5" />
            <span>Deposit</span>
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-3">
            <button className="w-9 h-9 rounded-lg bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-colors">
              <Settings
                className={`w-5 h-5 transition-colors ${
                  showRightPanel ? 'text-orange-500' : 'text-gray-300'
                }`}
                onClick={handleSettingsClick}
              />
            </button>
            <button className="w-9 h-9 rounded-lg bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="w-9 h-9 rounded-lg bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-colors">
              <Mail className="w-5 h-5" />
            </button>
            <div className="w-9 h-9 rounded-lg hover:bg-gray-700 flex items-center justify-center transition-colors">
              <LanguageSelector />
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 p-0.5">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://www.shutterstock.com/shutterstock/photos/2471601163/display_1500/stock-photo-create-an-avatar-for-an-ai-solution-for-sales-must-be-a-young-woman-with-purple-hair-wearing-2471601163.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-xs text-white font-bold">
                {userLevel}
              </div>
            </div>
            <span className="text-sm font-medium text-white hidden sm:block">{userName}</span>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden w-9 h-9 rounded-lg bg-gray-700/50 flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-2 p-2 space-y-2 bg-gray-800 rounded-lg border border-gray-700 animate-fadeIn">
          <div className="flex items-center justify-between p-2 bg-gray-700/50 rounded-lg">
            <span className="text-sm text-gray-400">Balance:</span>
            <span className="text-white font-medium">{currentBalance}</span>
          </div>
          <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white w-full py-2 rounded-lg font-medium">
            <Wallet className="w-5 h-5" />
            <span>Deposit</span>
          </button>
          <div className="grid grid-cols-4 gap-2 pt-2">
            <button className="p-2 rounded-lg bg-gray-700/50 flex items-center justify-center">
              <Settings
                className={showRightPanel ? 'text-orange-500' : ''}
                onClick={handleSettingsClick}
              />
            </button>
            <button className="p-2 rounded-lg bg-gray-700/50 flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg bg-gray-700/50 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </button>
            <div className="p-2 rounded-lg bg-gray-700/50 flex items-center justify-center">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </nav>

<CurrencyModal 
isOpen={isCurrencyModalOpen} 
onClose={() => setIsCurrencyModalOpen(false)} 
/>
</>
  )
}