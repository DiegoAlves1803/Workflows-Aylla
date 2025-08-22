import React from "react";
import { MessageSquare, Settings, MoreHorizontal } from "lucide-react";
import Logo from "./Logo";

const Sidebar = ({ conversations }) => {
  return (
    <div className="w-80 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-blue-100 p-4 flex flex-col gap-6">
      {/* Logo */}
      <Logo />
      
      {/* Navigation Items */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 py-2 px-3 rounded-xl cursor-pointer hover:bg-blue-50 transition-all duration-200 group">
          <MessageSquare size={20} className="text-[#08215D] group-hover:text-[#07C9FD] transition-colors" />
          <span className="text-[#08215D] text-base font-medium font-['Lato'] group-hover:text-[#07C9FD] transition-colors">
            Nova Conversa
          </span>
        </div>
        <div className="flex items-center gap-2 py-2 px-3 rounded-xl cursor-pointer hover:bg-blue-50 transition-all duration-200 group">
          <Settings size={20} className="text-[#08215D] group-hover:text-[#07C9FD] transition-colors" />
          <span className="text-[#08215D] text-base font-medium font-['Lato'] group-hover:text-[#07C9FD] transition-colors">
            Configurações
          </span>
        </div>
      </div>
      
      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
      
      {/* Conversations Section */}
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-[#64748B] text-lg font-medium font-['Lato']">Nossas conversas</span>
          <MoreHorizontal size={20} className="text-[#08215D] cursor-pointer hover:text-[#07C9FD] transition-colors" />
        </div>
        
        {/* Conversation List */}
        <div className="flex flex-col gap-2">
          {conversations.map((conversation, index) => (
            <div key={index} className="cursor-pointer hover:bg-blue-50 p-3 rounded-xl transition-all duration-200 group">
              <div className="text-[#334155] text-base font-medium font-['Lato'] group-hover:text-[#08215D] transition-colors">
                {conversation.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;