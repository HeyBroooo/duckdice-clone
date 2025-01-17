"use client";

import {
  Trophy,
  Gift,
  Calendar,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  Crown,
  Coins,
  Target,
  Users,
  TrendingUp,
  Zap,
  Settings,
} from "lucide-react";
import { useSidebar } from "../context/SidebarContext";
import { useState, useEffect } from "react";

export function SideBar() {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const menuItems = [
    { icon: <Trophy className="w-5 h-5 text-yellow-500" />, label: "VIP Club", badge: "NEW", badgeColor: "bg-green-500" },
    { icon: <Crown className="w-5 h-5 text-yellow-500" />, label: "DD Club" },
    { icon: <Coins className="w-5 h-5 text-green-500" />, label: "Staking 2.0", badge: "APY UP TO 171%", badgeColor: "text-green-500" },
    {
      icon: <Gift className="w-5 h-5 text-yellow-500" />,
      label: "Bonuses",
      submenu: [
        { label: "Contest", value: "$15,000" },
        { label: "Deposit Bonus", value: "+100%" },
        { label: "Decoy Pot", value: "up to $10,000" },
      ],
    },
    { icon: <Calendar className="w-5 h-5 text-blue-500" />, label: "Monthly Event" },
    { icon: <MessageSquare className="w-5 h-5 text-purple-500" />, label: "Forum" },
    { icon: <Target className="w-5 h-5 text-red-500" />, label: "Sports" },
    { icon: <Users className="w-5 h-5 text-indigo-500" />, label: "Affiliates" },
    { icon: <TrendingUp className="w-5 h-5 text-green-500" />, label: "Statistics" },
    { icon: <Zap className="w-5 h-5 text-yellow-500" />, label: "Tournaments" },
    { icon: <Settings className="w-5 h-5 text-gray-400" />, label: "Settings" },
  ];

  const handleSubmenuToggle = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)]
          ${isCollapsed ? "w-16" : "w-64"} 
          bg-gray-800 text-gray-300
          transform transition-all duration-300 ease-in-out
          ${isCollapsed ? "-translate-x-full lg:translate-x-0" : "translate-x-0"}
          z-40 overflow-y-auto
        `}
      >
        <div className="h-full flex flex-col justify-between py-4">
          {/* Menu Items */}
          <div className="space-y-2 px-2">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <div
                  className={`
                    flex items-center rounded-lg p-2
                    ${!item.submenu ? "hover:bg-gray-700" : ""}
                    transition-colors cursor-pointer
                  `}
                  onClick={() => item.submenu && handleSubmenuToggle(item.label)}
                >
                  <div
                    className={`flex items-center ${isCollapsed ? "justify-center w-full" : ""}`}
                  >
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    {!isCollapsed && <span className="ml-3 text-sm">{item.label}</span>}
                  </div>
                  {!isCollapsed && item.badge && (
                    <span
                      className={`
                        ml-auto text-xs px-1.5 py-0.5 rounded
                        ${item.badgeColor}
                        ${item.badgeColor.startsWith("text") ? "" : "text-white"}
                        ${item.badge === "NEW" ? "animate-pulse" : ""}
                      `}
                    >
                      {item.badge}
                    </span>
                  )}
                  {!isCollapsed && item.submenu && (
                    <ChevronRight
                      className={`w-4 h-4 ml-auto transition-transform ${
                        activeSubmenu === item.label ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </div>
                {!isCollapsed && item.submenu && activeSubmenu === item.label && (
                  <div className="mt-2 ml-6 space-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <div key={subIndex} className="flex justify-between items-center text-sm">
                        <span>{subItem.label}</span>
                        <span className="text-green-500">{subItem.value}</span>
                      </div>
                    ))}
                  </div>
                )}
                {isCollapsed && (
                  <div
                    className="
                      absolute left-full top-0 ml-2 p-2 bg-gray-900 rounded-md
                      invisible group-hover:visible opacity-0 group-hover:opacity-100
                      transition-opacity duration-200 whitespace-nowrap z-50
                    "
                  >
                    <span className="text-sm">{item.label}</span>
                    {item.badge && (
                      <span
                        className={`
                          ml-2 text-xs px-1.5 py-0.5 rounded
                          ${item.badgeColor}
                          ${item.badgeColor.startsWith("text") ? "" : "text-white"}
                        `}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Collapse Button */}
          {!isMobile && (
            <button
              onClick={toggleSidebar}
              className="
                absolute bottom-4 right-2
                bg-gray-700 hover:bg-gray-600 rounded-full p-1.5
                transition-colors duration-200
              "
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          )}
        </div>
      </aside>

      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="
            fixed top-20 left-4
            bg-gray-700 hover:bg-gray-600 rounded-full p-2
            transition-colors duration-200
            z-50
          "
        >
          {isCollapsed ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
        </button>
      )}
    </>
  );
}
