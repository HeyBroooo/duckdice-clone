"use client"

import { SidebarProvider, useSidebar } from '../context/SidebarContext'
import { NavBar } from '@/components/nav-bar'
import { SideBar } from '@/components/side-bar'
import { RightPanel } from '@/components/right-panel'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="min-h-screen bg-gray-900 flex flex-col">
            <NavBar />
            <div className="flex flex-1 overflow-hidden relative">
              <SideBar />
              <main 
                className="flex-1 overflow-y-auto transition-all duration-300"
                onClick={() => {
                  const { isMobile, showRightPanel, setShowRightPanel } = useSidebar()
                  if (isMobile) {
                    if (showRightPanel) setShowRightPanel(false)
                  }
                }}
              >
                {children}
              </main>
              <RightPanel />
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}