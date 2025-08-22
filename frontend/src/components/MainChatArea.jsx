import React, { useState, useEffect } from "react";
import { Paperclip, Send, Mic } from "lucide-react";
import MainLogo from "./MainLogo";
import { mockData } from "../data/mockData";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

const MainChatArea = () => {
  const [message, setMessage] = useState("");
  const [greeting, setGreeting] = useState("");
  const { isDark, colors } = useTheme();
  const { getCurrentGreeting, user } = useAuth();
  const currentTheme = isDark ? colors.dark : colors.light;

  // Atualiza a saudação quando o componente carrega ou o usuário muda
  useEffect(() => {
    setGreeting(getCurrentGreeting());
  }, [user, getCurrentGreeting]);

  // Atualiza a saudação a cada 30 segundos para variar
  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getCurrentGreeting());
    }, 30000);

    return () => clearInterval(interval);
  }, [getCurrentGreeting]);

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

  const getPersonalizedPrompts = () => {
    const basePrompts = mockData.promptSuggestions;
    if (user && user.name !== 'Sr. Oriovaldo') {
      return [
        ...basePrompts,
        `Como está o desempenho da ${user.municipality || 'nossa região'}?`,
        `Relatório personalizado para ${user.name}`
      ];
    }
    return basePrompts;
  };

  return (
    <div className="max-w-[800px] mx-auto flex flex-col gap-10 pt-32 px-4 relative">
      {/* Marca d'água */}
      <div className="absolute inset-0 flex items-center justify-center opacity-3 pointer-events-none z-0">
        <div className="transform rotate-12 flex flex-col items-center gap-8">
          {/* Logo Principal */}
          <img 
            src="/images/aylla-logo.jpg" 
            alt="Aylla Watermark" 
            className="w-80 h-80 object-contain"
          />
          {/* Logos Secundárias */}
          <div className="flex gap-12">
            <img 
              src="/images/aylla-logo.jpg" 
              alt="Aylla Secondary" 
              className="w-32 h-32 object-contain opacity-50"
            />
            <img 
              src="/images/aylla-logo.jpg" 
              alt="Aylla Secondary" 
              className="w-32 h-32 object-contain opacity-50"
            />
          </div>
          {/* Padrão de Logos Menores */}
          <div className="grid grid-cols-3 gap-8 opacity-30">
            {Array.from({ length: 6 }, (_, i) => (
              <img 
                key={`watermark-${i}`}
                src="/images/aylla-logo.jpg" 
                alt="Aylla Pattern" 
                className="w-16 h-16 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* Welcome Section */}
        <div className="flex items-center gap-6">
          {/* Logo da Aylla apenas */}
          <div className="w-[80px] h-16 flex items-center justify-center">
            <img 
              src="/images/aylla-logo.jpg" 
              alt="Aylla" 
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h1 className="aylla-greeting transition-all duration-500">
              {greeting}
            </h1>
            {user && user.name !== 'Sr. Oriovaldo' && (
              <p className="text-sm font-['Lato'] opacity-75 transition-colors duration-300" style={{ color: currentTheme.text.tertiary }}>
                Bem-vindo de volta, {user.role} • {user.municipality}
              </p>
            )}
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col gap-6">
          {/* Instructions */}
          <div className="flex flex-col gap-2">
            <p className="aylla-instruction transition-colors duration-300">
              Faça uma pergunta para Aylla ou use os prompts para começar
            </p>
            
            {/* Prompt Suggestions */}
            <div className="flex items-center gap-2 flex-wrap">
              {getPersonalizedPrompts().map((prompt, index) => (
                <div
                  key={`prompt-${index}-${prompt.slice(0, 10)}`}
                  onClick={() => handlePromptClick(prompt)}
                  className="px-3 py-2 border rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 backdrop-blur-sm"
                  style={{
                    backgroundColor: isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(8, 33, 93, 0.05)',
                    borderColor: 'var(--Border-primary)'
                  }}
                >
                  <span className="aylla-prompt-suggestion">
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
              borderColor: 'var(--Border-primary)',
              boxShadow: currentTheme.shadow
            }}
          >
            {/* Mic Icon */}
            <div 
              className="w-8 h-8 border rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(8, 33, 93, 0.05)',
                borderColor: 'var(--Border-primary)'
              }}
            >
              <Mic size={16} style={{ color: 'var(--Brand-primary)' }} />
            </div>
            
            {/* Input Field */}
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={`Digite sua mensagem para Aylla${user ? `, ${user.name}` : ''}`}
              className="flex-1 bg-transparent outline-none transition-colors duration-300 aylla-input-placeholder"
              style={{ 
                color: 'var(--Text-primary)'
              }}
            />
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 border rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(8, 33, 93, 0.05)',
                  borderColor: 'var(--Border-primary)'
                }}
              >
                <Paperclip size={16} style={{ color: 'var(--Brand-primary)' }} />
              </div>
              
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, var(--Brand-primary) 0%, var(--Brand-secondary) 100%)`,
                  borderColor: 'var(--Brand-primary)'
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