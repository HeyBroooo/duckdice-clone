"use client"

import React, { createContext, useState, useContext, useEffect } from 'react'

type SidebarContextType = {
  isCollapsed: boolean
  toggleSidebar: () => void
  showRightPanel: boolean
  setShowRightPanel: (show: boolean) => void
  isMobile: boolean
}

const SidebarContext = createContext<SidebarContextType>({
  isCollapsed: false,
  toggleSidebar: () => {},
  showRightPanel: false,
  setShowRightPanel: () => {},
  isMobile: false,
})

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [showRightPanel, setShowRightPanel] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Toggle sidebar state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  // Load initial sidebar state
  useEffect(() => {
    const storedState = localStorage.getItem('sidebarCollapsed')
    if (storedState) {
      setIsCollapsed(JSON.parse(storedState))
    }
  }, [])

  // Save sidebar state
  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(isCollapsed))
  }, [isCollapsed])

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      
      // Auto-collapse sidebar on mobile
      if (mobile && !isCollapsed) {
        setIsCollapsed(true)
      }
      
      // Close right panel on mobile
      if (mobile && showRightPanel) {
        setShowRightPanel(false)
      }
    }

    // Initial check
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isCollapsed, showRightPanel])

  // Handle clicks outside panels
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const isRightPanelClick = target.closest('[data-settings-button="true"]')
      const isRightPanel = target.closest('[data-right-panel="true"]')
      const isSidebarClick = target.closest('[data-sidebar-toggle="true"]')
      const isSidebar = target.closest('[data-sidebar="true"]')

      // Close right panel if clicking outside
      if (showRightPanel && !isRightPanelClick && !isRightPanel) {
        setShowRightPanel(false)
      }

      // Collapse sidebar on mobile if clicking outside
      if (isMobile && !isCollapsed && !isSidebarClick && !isSidebar) {
        setIsCollapsed(true)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobile, isCollapsed, showRightPanel])

  return (
    <SidebarContext.Provider value={{
      isCollapsed,
      toggleSidebar,
      showRightPanel,
      setShowRightPanel,
      isMobile,
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)