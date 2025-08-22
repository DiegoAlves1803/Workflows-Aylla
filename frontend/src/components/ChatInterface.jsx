import React, { useState, useCallback, useMemo } from "react";
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
  const [conversations] = useState(mockData.conversations);
  const { isDark, colors } = useTheme();

  const currentTheme = useMemo(() => 
    isDark ? colors.dark : colors.light, 
    [isDark, colors]
  );

  const renderContent = useCallback(() => {
    const components = {
      "Chat": <MainChatArea key="main-chat" />,
      "Meu Painel": <MeuPainel key="meu-painel" />,
      "Agenda": <Agenda key="agenda" />,
      "Alertas": <Alertas key="alertas" />,
      "Documentos": <Documentos key="documentos" />
    };
    
    return components[activeTab] || components["Chat"];
  }, [activeTab]);

  return (
    <div 
      className="min-h-screen p-4 relative transition-all duration-500"
      style={{ 
        background: currentTheme.background
      }}
    >
      <div className="flex gap-4 h-[calc(100vh-2rem)]">
        {/* Sidebar */}
        <Sidebar conversations={conversations} key="sidebar" />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <TopNavigation 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            key="top-nav"
          />
          
          {/* Content Area */}
          <div className="flex-1 overflow-auto" key={`content-${activeTab}`}>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;