import React, { useState } from "react";
import { Paperclip, Send, Mic } from "lucide-react";
import MainLogo from "./MainLogo";
import { mockData } from "../data/mockData";
import { useTheme } from "../contexts/ThemeContext";

const MainChatArea = () => {
  const [message, setMessage] = useState("");
  const { isDark, colors } = useTheme();
  const currentTheme = isDark ? colors.dark : colors.light;

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
            src="/images/aylla-logo.jpg" 
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
            <h1 
              className="text-4xl font-['Lexend'] font-medium leading-[48px] transition-colors duration-300"
              style={{ color: currentTheme.text.primary }}
            >
              Olá! Como posso ajudá-lo hoje?
            </h1>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col gap-6">
          {/* Instructions */}
          <div className="flex flex-col gap-2">
            <p 
              className="text-lg font-['Lato'] font-normal leading-[25.2px] transition-colors duration-300"
              style={{ color: currentTheme.text.primary }}
            >
              Faça uma pergunta para Aylla ou use os prompts para começar
            </p>
            
            {/* Prompt Suggestions */}
            <div className="flex items-center gap-2 flex-wrap">
              {mockData.promptSuggestions.map((prompt, index) => (
                <div
                  key={index}
                  onClick={() => handlePromptClick(prompt)}
                  className="px-3 py-2 border rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 backdrop-blur-sm"
                  style={{
                    backgroundColor: isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(59, 130, 246, 0.05)',
                    borderColor: currentTheme.border,
                    color: currentTheme.primary
                  }}
                >
                  <span className="text-sm font-['Lato'] font-medium leading-[19.6px]">
                    {prompt}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat Input */}
          <div 
            className="h-[88px] px-4 py-6 backdrop-blur-sm border rounded-3xl flex items-center gap-3 transition-all duration-300"
            style={{
              backgroundColor: currentTheme.cardBg,
              borderColor: currentTheme.border,
              boxShadow: currentTheme.shadow
            }}
          >
            {/* Mic Icon */}
            <div 
              className="w-8 h-8 border rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(59, 130, 246, 0.05)',
                borderColor: currentTheme.border
              }}
            >
              <Mic size={16} style={{ color: currentTheme.primary }} />
            </div>
            
            {/* Input Field */}
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua mensagem para Aylla"
              className="flex-1 text-base font-['Lato'] font-normal leading-[22.4px] bg-transparent outline-none transition-colors duration-300"
              style={{ 
                color: currentTheme.text.primary,
                '::placeholder': { color: currentTheme.text.tertiary }
              }}
            />
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 border rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(59, 130, 246, 0.05)',
                  borderColor: currentTheme.border
                }}
              >
                <Paperclip size={16} style={{ color: currentTheme.primary }} />
              </div>
              
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.secondary} 100%)`,
                  borderColor: currentTheme.primary
                }}
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