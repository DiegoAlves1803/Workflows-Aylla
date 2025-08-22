import React, { useState } from "react";
import { Paperclip, Send, Mic } from "lucide-react";
import MainLogo from "./MainLogo";
import { mockData } from "../data/mockData";

const MainChatArea = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      // Aqui será integrado com AWS para simulação de conversa
      setMessage("");
    }
  };

  const handlePromptClick = (prompt) => {
    setMessage(prompt);
  };

  return (
    <div className="max-w-[800px] mx-auto flex flex-col gap-10 pt-32 px-4 relative">
      {/* Marca d'água */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none z-0">
        <div className="transform rotate-12">
          <img 
            src="https://customer-assets.emergentagent.com/job_schooldata-ai/artifacts/8hiae8g5_Logo%20Aylla.jpg" 
            alt="Aylla Watermark" 
            className="w-96 h-96 object-contain"
          />
        </div>
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* Welcome Section */}
        <div className="flex items-center gap-6">
          <MainLogo />
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-[#0F172A] text-4xl font-['Lexend'] font-medium leading-[48px]">
              Olá! Como posso ajudá-lo hoje?
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
                  className="px-3 py-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 shadow-sm rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md"
                >
                  <span className="text-[#08215D] text-sm font-['Lato'] font-medium leading-[19.6px]">
                    {prompt}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat Input */}
          <div className="h-[88px] px-4 py-6 bg-white/80 backdrop-blur-sm shadow-lg border border-blue-100 rounded-3xl flex items-center gap-3">
            {/* Mic Icon */}
            <div className="w-8 h-8 bg-blue-50 hover:bg-blue-100 shadow-sm border border-blue-200 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200">
              <Mic size={16} className="text-[#08215D]" />
            </div>
            
            {/* Input Field */}
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua mensagem para Aylla"
              className="flex-1 text-[#0F172A] text-base font-['Lato'] font-normal leading-[22.4px] bg-transparent outline-none placeholder:text-[#64748B]"
            />
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-50 hover:bg-blue-100 shadow-sm border border-blue-200 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200">
                <Paperclip size={16} className="text-[#08215D]" />
              </div>
              
              <button
                onClick={handleSend}
                className="w-10 h-10 bg-gradient-to-r from-[#08215D] to-[#07C9FD] hover:from-[#061A4F] hover:to-[#06B8EC] shadow-md rounded-full border border-[#08215D] flex items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-lg"
              >
                <Send size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChatArea;