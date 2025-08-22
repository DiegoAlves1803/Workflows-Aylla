import React from "react";
import { MessageSquare, Settings, MoreHorizontal } from "lucide-react";
import Logo from "./Logo";

const Sidebar = ({ conversations }) => {
  return (
    <div className="w-80 bg-white rounded-3xl shadow-[0px_8px_24px_rgba(12,12,13,0.06)] p-4 flex flex-col gap-6">
      {/* Logo */}
      <Logo />
      
      {/* Navigation Items */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 py-2 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
          <MessageSquare size={20} className="text-[#08215D]" />
          <span className="text-[#08215D] text-base font-medium font-['Lato']">Nova Conversa</span>
        </div>
        <div className="flex items-center gap-2 py-2 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
          <Settings size={20} className="text-[#08215D]" />
          <span className="text-[#08215D] text-base font-medium font-['Lato']">Configurações</span>
        </div>
      </div>
      
      {/* Divider */}
      <div className="h-px bg-[#CBD5E1]"></div>
      
      {/* Conversations Section */}
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-[#64748B] text-lg font-medium font-['Lato']">Nossas conversas</span>
          <MoreHorizontal size={20} className="text-[#08215D] cursor-pointer" />
        </div>
        
        {/* Conversation List */}
        <div className="flex flex-col gap-4">
          {conversations.map((conversation, index) => (
            <div key={index} className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <div className="text-[#334155] text-base font-medium font-['Lato']">
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