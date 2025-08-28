import React, { useState, useEffect } from "react";
import { Paperclip, Send, Mic } from "lucide-react";
import { mockData } from "../data/mockData";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";
import ChatMessages from "./ChatMessages";
import { EducationKnowledge } from "../services/educationKnowledge";

const MainChatArea = () => {
  const [message, setMessage] = useState("");
  const [greeting, setGreeting] = useState("");
  const [nextUpdateIn, setNextUpdateIn] = useState(120);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  
  const { isDark, colors } = useTheme();
  const { getCurrentGreeting, user } = useAuth();
  const currentTheme = isDark ? colors.dark : colors.light;
  
  const educationKB = new EducationKnowledge();

  // Atualiza a saudação quando o componente carrega ou o usuário muda
  useEffect(() => {
    setGreeting(getCurrentGreeting());
    setNextUpdateIn(30);
  }, [user, getCurrentGreeting]);

  // Atualiza a saudação a cada 30 segundos para variar
  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getCurrentGreeting());
      setNextUpdateIn(30);
    }, 30000);

    return () => clearInterval(interval);
  }, [getCurrentGreeting]);

  // Contador regressivo para próxima atualização
  useEffect(() => {
    const countdown = setInterval(() => {
      setNextUpdateIn(prev => prev > 0 ? prev - 1 : 30);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleManualUpdate = () => {
    setGreeting(getCurrentGreeting());
    setNextUpdateIn(30);
  };

  const handleSend = async () => {
    if (message.trim()) {
      // Prevenir sons do sistema
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      
      const userMessage = {
        type: 'user',
        content: message.trim(),
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, userMessage]);
      setMessage("");
      setIsLoading(true);
      setShowChat(true);

      // Simula delay de resposta realista
      setTimeout(() => {
        const response = educationKB.findResponse(userMessage.content);
        const assistantMessage = {
          type: 'assistant',
          content: response,
          timestamp: new Date().toISOString()
        };

        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1000 + Math.random() * 2000);
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

  const startNewConversation = () => {
    setMessages([]);
    setShowChat(false);
  };

  if (showChat) {
    return (
      <div className="max-w-[1000px] mx-auto flex flex-col h-full pt-32 px-4 relative">
        {/* Chat Header */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b" style={{ borderColor: 'var(--Border-primary)' }}>
          <div className="flex items-center gap-3">
            <img 
              src="/images/aylla-logo.jpg" 
              alt="Aylla" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h2 className="text-xl font-['Lexend'] font-medium" style={{ color: currentTheme.text.primary }}>
                Conversa com Aylla
              </h2>
              <p className="text-sm" style={{ color: currentTheme.text.tertiary }}>
                Assistente Educacional Inteligente
              </p>
            </div>
          </div>
          
          <button
            onClick={startNewConversation}
            className="px-4 py-2 rounded-lg border text-sm font-['Lato'] transition-all duration-200 hover:scale-105"
            style={{
              borderColor: 'var(--Brand-primary)',
              color: 'var(--Brand-primary)',
              backgroundColor: isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(8, 33, 93, 0.05)'
            }}
          >
            Nova Conversa
          </button>
        </div>

        {/* Messages Area */}
        <ChatMessages messages={messages} isLoading={isLoading} />

        {/* Input Area */}
        <div 
          className="mt-4 p-4 backdrop-blur-sm border rounded-3xl flex items-center gap-3 transition-all duration-300"
          style={{
            backgroundColor: currentTheme.cardBg,
            borderColor: 'var(--Border-primary)',
            boxShadow: currentTheme.shadow
          }}
        >
          <div 
            className="w-8 h-8 border rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(8, 33, 93, 0.05)',
              borderColor: 'var(--Border-primary)'
            }}
          >
            <Mic size={16} style={{ color: 'var(--Brand-primary)' }} />
          </div>
          
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={`Digite sua mensagem para Aylla, Senhor Secretário`}
            className="flex-1 bg-transparent outline-none transition-colors duration-300 font-['Lato']"
            style={{ 
              color: currentTheme.text.primary
            }}
            autoComplete="off"
            spellCheck="false"
          />
          
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
              onClick={(e) => {
                e.preventDefault();
                handleSend();
              }}
              disabled={!message.trim() || isLoading}
              className="w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: message.trim() && !isLoading 
                  ? `linear-gradient(135deg, var(--Brand-primary) 0%, var(--Brand-secondary) 100%)`
                  : 'var(--Border-primary)',
                borderColor: 'var(--Brand-primary)'
              }}
            >
              <Send size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[800px] mx-auto flex flex-col gap-10 pt-32 px-4 relative">
      {/* Marca d'água Aylla - Padrão Elegante */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 flex items-center justify-center opacity-4">
          <div className="transform rotate-12">
            <img 
              src="/images/aylla-logo.jpg" 
              alt="Aylla Watermark" 
              className="w-96 h-96 object-contain"
            />
          </div>
        </div>
        
        <div className="absolute top-10 left-10 opacity-2">
          <img src="/images/aylla-logo.jpg" alt="Aylla" className="w-20 h-20 object-contain transform rotate-45" />
        </div>
        <div className="absolute top-20 right-20 opacity-2">
          <img src="/images/aylla-logo.jpg" alt="Aylla" className="w-16 h-16 object-contain transform -rotate-30" />
        </div>
        <div className="absolute bottom-32 left-20 opacity-2">
          <img src="/images/aylla-logo.jpg" alt="Aylla" className="w-24 h-24 object-contain transform rotate-90" />
        </div>
        <div className="absolute bottom-20 right-32 opacity-2">
          <img src="/images/aylla-logo.jpg" alt="Aylla" className="w-18 h-18 object-contain transform -rotate-45" />
        </div>
        <div className="absolute top-1/3 left-1/4 opacity-1">
          <img src="/images/aylla-logo.jpg" alt="Aylla" className="w-12 h-12 object-contain transform rotate-180" />
        </div>
        <div className="absolute top-2/3 right-1/4 opacity-1">
          <img src="/images/aylla-logo.jpg" alt="Aylla" className="w-14 h-14 object-contain transform -rotate-60" />
        </div>
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* Welcome Section */}
        <div className="flex items-center gap-10">
          {/* Logo da Aylla ampliada */}
          <div className="w-[220px] h-40 flex items-center justify-center">
            <img 
              src="/images/aylla-logo.jpg" 
              alt="Aylla" 
              className="h-36 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <h1 className="aylla-greeting transition-all duration-500">
              {greeting}
            </h1>
            
            {/* Indicador de Temporizador */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 opacity-60">
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: 'var(--Brand-primary)' }}
                ></div>
                <span 
                  className="text-xs font-['Lato'] font-normal"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Próxima saudação em {Math.floor(nextUpdateIn / 60)}:{(nextUpdateIn % 60).toString().padStart(2, '0')}
                </span>
              </div>
            </div>
            
            {user && user.name !== 'Sr. Oriovaldo' && (
              <p className="text-sm font-['Lato'] opacity-75 transition-colors duration-300" style={{ color: currentTheme.text.tertiary }}>
                Bem-vindo, {user.role} • {user.municipality}
              </p>
            )}
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col gap-6">
          {/* Instructions */}
          <div className="flex flex-col gap-2">
            <p className="aylla-instruction transition-colors duration-300">
              Faça uma pergunta ou use os comandos abaixo para começar
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
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSend();
                }
              }}
            placeholder={`Digite sua mensagem para Aylla, Senhor Secretário`}
              className="flex-1 bg-transparent outline-none transition-colors duration-300 aylla-input-placeholder"
              style={{ 
                color: 'var(--Text-primary)'
              }}
              autoComplete="off"
              spellCheck="false"
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
                onClick={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
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