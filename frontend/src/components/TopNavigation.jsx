import React from "react";
import { MessageSquare, BarChart3, Calendar, Bell, FileText, Settings, MoreHorizontal } from "lucide-react";

const TopNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: "Chat", icon: MessageSquare },
    { name: "Meu Painel", icon: BarChart3 },
    { name: "Agenda", icon: Calendar },
    { name: "Alertas", icon: Bell },
    { name: "Documentos", icon: FileText },
  ];

  return (
    <div className="absolute top-0 right-0 left-0 z-10 flex justify-end pr-4 pt-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-blue-100 px-4 py-2 flex items-center justify-between max-w-fit">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-4">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = tab.name === activeTab;
            
            return (
              <div
                key={index}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-200 ${
                  isActive 
                    ? "bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 shadow-sm" 
                    : "hover:bg-blue-50"
                }`}
              >
                <Icon 
                  size={16} 
                  className={`transition-colors ${
                    isActive ? "text-[#08215D]" : "text-[#64748B] hover:text-[#08215D]"
                  }`} 
                />
                <span className={`text-sm font-['Lato'] transition-colors ${
                  isActive 
                    ? "font-bold text-[#08215D]" 
                    : "font-medium text-[#64748B] hover:text-[#08215D]"
                }`}>
                  {tab.name}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Right Side Icons and Avatar */}
        <div className="flex items-center gap-3 ml-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 flex items-center justify-center cursor-pointer transition-all duration-200">
              <Settings size={16} className="text-[#08215D]" />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 flex items-center justify-center cursor-pointer transition-all duration-200">
              <MoreHorizontal size={16} className="text-[#08215D]" />
            </div>
          </div>
          
          {/* User Avatar */}
          <div className="w-10 h-10 bg-gradient-to-r from-[#08215D] to-[#07C9FD] rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-base font-semibold font-['Inter']">U</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;