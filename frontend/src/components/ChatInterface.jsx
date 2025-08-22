import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";
import MainChatArea from "./MainChatArea";
import { mockData } from "../data/mockData";

const ChatInterface = () => {
  const [activeTab, setActiveTab] = useState("Chat");
  const [conversations, setConversations] = useState(mockData.conversations);

  return (
    <div className="min-h-screen bg-[#F6F9FF] p-4">
      <div className="flex gap-4 h-[calc(100vh-2rem)]">
        {/* Sidebar */}
        <Sidebar conversations={conversations} />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <TopNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {/* Main Chat Area */}
          <div className="flex-1 pt-16">
            <MainChatArea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;