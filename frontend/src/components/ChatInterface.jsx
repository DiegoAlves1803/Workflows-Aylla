import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";
import MainChatArea from "./MainChatArea";
import MeuPainel from "./MeuPainel";
import Agenda from "./Agenda";
import Alertas from "./Alertas";
import Documentos from "./Documentos";
import { mockData } from "../data/mockData";

const ChatInterface = () => {
  const [activeTab, setActiveTab] = useState("Chat");
  const [conversations, setConversations] = useState(mockData.conversations);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 relative">
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