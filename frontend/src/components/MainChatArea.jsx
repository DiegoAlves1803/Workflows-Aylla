import React, { useState } from "react";
import { Paperclip, Send, Mic } from "lucide-react";
import MainLogo from "./MainLogo";
import { mockData } from "../data/mockData";

const MainChatArea = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      // Here we'll later integrate with backend
      setMessage("");
    }
  };

  const handlePromptClick = (prompt) => {
    setMessage(prompt);
  };

  return (
    <div className="max-w-[800px] mx-auto flex flex-col gap-10 pt-32 px-4">
      {/* Welcome Section */}
      <div className="flex items-center gap-6">
        <MainLogo />
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-[#0F172A] text-4xl font-['Lexend'] font-medium leading-[48px]">
            Olá, Charles Xavier!
          </h1>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col gap-6">
        {/* Instructions */}
        <div className="flex flex-col gap-2">
          <p className="text-[#0F172A] text-lg font-['Lato'] font-normal leading-[25.2px]">
            Faça uma pergunta para Aylla ou use os prompts para começar
          </p>
          
          {/* Prompt Suggestions */}
          <div className="flex items-center gap-2 flex-wrap">
            {mockData.promptSuggestions.map((prompt, index) => (
              <div
                key={index}
                onClick={() => handlePromptClick(prompt)}
                className="px-2 py-1 bg-[#CBD5E1] shadow-[0px_8px_24px_rgba(12,12,13,0.06)] rounded-lg cursor-pointer hover:bg-[#B8C5D1] transition-colors"
              >
                <span className="text-[#334155] text-sm font-['Lato'] font-normal leading-[19.6px]">
                  {prompt}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat Input */}
        <div className="h-[88px] px-4 py-6 bg-white shadow-[0px_8px_24px_rgba(12,12,13,0.06)] rounded-3xl flex items-center gap-3">
          {/* Mic Icon */}
          <div className="w-8 h-8 bg-[#F1F5F9] shadow-[0px_3px_4px_rgba(12,12,13,0.13)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E2E8F0] transition-colors">
            <Mic size={16} className="text-[#08215D]" />
          </div>
          
          {/* Input Field */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Digite sua mensagem para Aylla"
            className="flex-1 text-[#64748B] text-base font-['Lato'] font-normal leading-[22.4px] bg-transparent outline-none placeholder:text-[#64748B]"
          />
          
          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F1F5F9] shadow-[0px_3px_4px_rgba(12,12,13,0.13)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E2E8F0] transition-colors">
              <Paperclip size={16} className="text-[#08215D]" />
            </div>
            
            <button
              onClick={handleSend}
              className="w-10 h-10 bg-[#08215D] shadow-[0px_3px_4px_rgba(12,12,13,0.13)] rounded-full border border-[#08215D] flex items-center justify-center cursor-pointer hover:bg-[#061A4F] transition-colors"
            >
              <Send size={24} className="text-[#F1F5F9]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChatArea;