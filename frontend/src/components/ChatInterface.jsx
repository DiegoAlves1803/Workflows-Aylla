import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";
import MainChatArea from "./MainChatArea";
import MeuPainel from "./MeuPainel";
import Agenda from "./Agenda";
import Alertas from "./Alertas";
import Documentos from "./Documentos";
import { mockData } from "../data/mockData";
import { useTheme } from "../contexts/ThemeContext";

const ChatInterface = () => {
  const [activeTab, setActiveTab] = useState("Chat");
  const [conversations, setConversations] = useState(mockData.conversations);
  const { isDark, colors } = useTheme();

  const renderContent = () => {
    switch (activeTab) {
      case "Chat":
        return <MainChatArea />;
      case "Meu Painel":
        return <MeuPainel />;
      case "Agenda":
        return <Agenda />;
      case "Alertas":
        return <Alertas />;
      case "Documentos":
        return <Documentos />;
      default:
        return <MainChatArea />;
    }
  };

  const currentTheme = isDark ? colors.dark : colors.light;

  return (
    <div 
      className="min-h-screen p-4 relative transition-all duration-500"
      style={{ 
        background: currentTheme.background
      }}
    >
      {/* Credits Display */}
      <div className="absolute top-4 left-4 z-50">
        <div 
          className="px-4 py-2 rounded-full text-sm font-['Lato'] font-medium border backdrop-blur-sm transition-all duration-300"
          style={{
            backgroundColor: currentTheme.cardBg,
            borderColor: currentTheme.border,
            color: currentTheme.text.secondary,
            boxShadow: currentTheme.shadow
          }}
        >
          💰 Créditos: 4,92
        </div>
      </div>

      <div className="flex gap-4 h-[calc(100vh-2rem)]">
        {/* Sidebar */}
        <Sidebar conversations={conversations} />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <TopNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {/* Content Area */}
          <div className="flex-1 overflow-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;