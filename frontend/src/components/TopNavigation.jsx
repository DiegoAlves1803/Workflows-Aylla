import React from "react";
import { MessageSquare, BarChart3, Calendar, Bell, FileText, Settings, MoreHorizontal } from "lucide-react";

const TopNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: "Chat", icon: MessageSquare, active: true },
    { name: "Meu Painel", icon: BarChart3, active: false },
    { name: "Agenda", icon: Calendar, active: false },
    { name: "Alertas", icon: Bell, active: false },
    { name: "Documentos", icon: FileText, active: false },
  ];

  return (
    <div className="absolute top-0 right-0 left-0 z-10 flex justify-end pr-4 pt-4">
      <div className="bg-white rounded-full shadow-[0px_8px_24px_rgba(12,12,13,0.06)] px-4 py-2 flex items-center justify-between max-w-fit">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-6">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = tab.name === activeTab;
            
            return (
              <div
                key={index}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-1 px-3 py-2 rounded-full cursor-pointer transition-all ${
                  isActive 
                    ? "bg-[#CBD5E1]" 
                    : "hover:bg-gray-100"
                }`}
              >
                <Icon size={16} className="text-[#08215D]" />
                <span className={`text-sm font-['Lato'] text-[#08215D] ${
                  isActive ? "font-bold" : "font-medium"
                }`}>
                  {tab.name}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Right Side Icons and Avatar */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
              <Settings size={20} className="text-[#08215D]" />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
              <MoreHorizontal size={20} className="text-[#08215D]" />
            </div>
          </div>
          
          {/* User Avatar */}
          <div className="w-10 h-10 bg-[#08215D] rounded-full flex items-center justify-center">
            <span className="text-[#F1F5F9] text-base font-semibold font-['Inter']">CX</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;