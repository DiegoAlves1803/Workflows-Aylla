import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

const ChatMessages = ({ messages, isLoading }) => {
  const { isDark, colors } = useTheme();
  const { user } = useAuth();
  const currentTheme = isDark ? colors.dark : colors.light;

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={`message-${index}-${message.timestamp}`}
          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div className="max-w-[80%] flex gap-3 items-start">
            {/* Avatar */}
            {message.type === 'assistant' && (
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1 bg-white border-2"
                style={{ 
                  borderColor: 'var(--Brand-primary)'
                }}
              >
                <img 
                  src="/images/aylla-logo.jpg" 
                  alt="Aylla" 
                  className="w-6 h-6 object-contain rounded-sm"
                />
              </div>
            )}

            {/* Message Content */}
            <div
              className={`rounded-2xl px-4 py-3 transition-all duration-200 ${
                message.type === 'user'
                  ? 'rounded-br-sm'
                  : 'rounded-bl-sm'
              }`}
              style={{
                backgroundColor: message.type === 'user' 
                  ? 'var(--Brand-primary)'
                  : (isDark ? 'rgba(30, 41, 59, 0.9)' : 'rgba(248, 250, 252, 0.9)'),
                borderColor: message.type === 'assistant' ? 'var(--Border-primary)' : 'transparent',
                borderWidth: message.type === 'assistant' ? '1px' : '0'
              }}
            >
              <div
                className={`font-['Lato'] leading-relaxed whitespace-pre-wrap ${
                  message.type === 'user' 
                    ? 'text-white' 
                    : ''
                }`}
                style={{
                  color: message.type === 'assistant' ? currentTheme.text.primary : undefined
                }}
              >
                {message.content}
              </div>

              {/* Timestamp */}
              <div
                className={`text-xs mt-2 ${
                  message.type === 'user' 
                    ? 'text-white/70' 
                    : 'opacity-60'
                }`}
                style={{
                  color: message.type === 'assistant' ? currentTheme.text.tertiary : undefined
                }}
              >
                {new Date(message.timestamp).toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>

            {/* User Avatar */}
            {message.type === 'user' && (
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
                style={{ 
                  background: `linear-gradient(135deg, var(--Brand-primary) 0%, var(--Brand-secondary) 100%)`
                }}
              >
                <span className="text-white text-xs font-semibold font-['Inter']">
                  SO
                </span>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Loading indicator */}
      {isLoading && (
        <div className="flex justify-start">
          <div className="max-w-[80%] flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1 bg-white border-2"
              style={{ 
                borderColor: 'var(--Brand-primary)'
              }}
            >
              <img 
                src="/images/aylla-logo.jpg" 
                alt="Aylla" 
                className="w-6 h-6 object-contain rounded-sm"
              />
            </div>
            <div
              className="rounded-2xl rounded-bl-sm px-4 py-3 border"
              style={{
                backgroundColor: isDark ? 'rgba(30, 41, 59, 0.9)' : 'rgba(248, 250, 252, 0.9)',
                borderColor: 'var(--Border-primary)'
              }}
            >
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ color: 'var(--Brand-primary)' }}></div>
                <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ color: 'var(--Brand-primary)', animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ color: 'var(--Brand-primary)', animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;