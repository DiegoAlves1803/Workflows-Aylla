import React from "react";
import { MessageSquare, Settings, MoreHorizontal } from "lucide-react";
import Logo from "./Logo";
import { useTheme } from "../contexts/ThemeContext";

const Sidebar = ({ conversations }) => {
  const { isDark, colors } = useTheme();
  const currentTheme = isDark ? colors.dark : colors.light;

  return (
    <div 
      className="w-80 rounded-3xl p-4 flex flex-col gap-6 backdrop-blur-sm transition-all duration-300 border"
      style={{
        backgroundColor: currentTheme.sidebarBg,
        borderColor: currentTheme.border,
        boxShadow: currentTheme.shadow
      }}
    >
      {/* Logo */}
      <Logo />
      
      {/* Navigation Items */}
      <div className="flex flex-col gap-3">
        <div 
          className="flex items-center gap-2 py-2 px-3 rounded-xl cursor-pointer transition-all duration-200 group hover:scale-[1.02]"
          style={{ 
            backgroundColor: 'transparent',
            ':hover': {
              backgroundColor: isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(59, 130, 246, 0.05)'
            }
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(59, 130, 246, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          <MessageSquare 
            size={20} 
            className="transition-colors group-hover:scale-110 duration-200"
            style={{ color: currentTheme.primary }}
          />
          <span 
            className="text-base font-medium font-['Lato'] transition-colors"
            style={{ color: currentTheme.primary }}
          >
            Nova Conversa
          </span>
        </div>
        <div 
          className="flex items-center gap-2 py-2 px-3 rounded-xl cursor-pointer transition-all duration-200 group hover:scale-[1.02]"
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(59, 130, 246, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          <Settings 
            size={20} 
            className="transition-colors group-hover:scale-110 duration-200"
            style={{ color: currentTheme.primary }}
          />
          <span 
            className="text-base font-medium font-['Lato'] transition-colors"
            style={{ color: currentTheme.primary }}
          >
            Configurações
          </span>
        </div>
      </div>
      
      {/* Divider */}
      <div 
        className="h-px transition-all duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${currentTheme.border}, transparent)`
        }}
      ></div>
      
      {/* Conversations Section */}
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between">
          <span 
            className="text-lg font-medium font-['Lato']"
            style={{ color: currentTheme.text.tertiary }}
          >
            Nossas conversas
          </span>
          <MoreHorizontal 
            size={20} 
            className="cursor-pointer hover:scale-110 transition-all duration-200"
            style={{ color: currentTheme.primary }}
          />
        </div>
        
        {/* Conversation List */}
        <div className="flex flex-col gap-2">
          {conversations.map((conversation, index) => (
            <div 
              key={index} 
              className="cursor-pointer p-3 rounded-xl transition-all duration-200 group hover:scale-[1.02]"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(59, 130, 246, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <div 
                className="text-base font-medium font-['Lato'] transition-colors"
                style={{ color: currentTheme.text.secondary }}
              >
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