"use client"

import React, { createContext, useState, useContext, useEffect } from 'react'

type SidebarContextType = {
  isCollapsed: boolean
  toggleSidebar: () => void
  showRightPanel: boolean
  setShowRightPanel: (show: boolean) => void
}

const SidebarContext = createContext<SidebarContextType>({
  isCollapsed: false,
  toggleSidebar: () => {},
  showRightPanel: false,
  setShowRightPanel: () => {},
})

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [showRightPanel, setShowRightPanel] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  useEffect(() => {
    const storedState = localStorage.getItem('sidebarCollapsed')
    if (storedState) {
      setIsCollapsed(JSON.parse(storedState))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(isCollapsed))
  }, [isCollapsed])

  return (
    <SidebarContext.Provider value={{ 
      isCollapsed, 
      toggleSidebar, 
      showRightPanel, 
      setShowRightPanel 
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)

