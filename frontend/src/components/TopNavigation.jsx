import React from "react";
import { MessageSquare, BarChart3, Calendar, Bell, FileText, Settings, MoreHorizontal, Sun, Moon, LogOut } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

const TopNavigation = ({ activeTab, setActiveTab }) => {
  const { isDark, toggleTheme, colors } = useTheme();
  const { user, logout } = useAuth();
  const currentTheme = isDark ? colors.dark : colors.light;
  
  const tabs = [
    { name: "Chat", icon: MessageSquare },
    { name: "Meu Painel", icon: BarChart3 },
    { name: "Agenda", icon: Calendar },
    { name: "Alertas", icon: Bell },
    { name: "Documentos", icon: FileText },
  ];

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const getUserInitials = () => {
    if (!user || !user.name) return 'U';
    return user.name
      .split(' ')
      .map(word => word[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="absolute top-0 right-0 left-0 z-10 flex justify-end pr-4 pt-4">
      <div 
        className="rounded-full px-4 py-2 flex items-center justify-between max-w-fit backdrop-blur-sm transition-all duration-300 border"
        style={{
          backgroundColor: currentTheme.cardBg,
          borderColor: 'var(--Border-primary)',
          boxShadow: currentTheme.shadow
        }}
      >
        {/* Navigation Tabs */}
        <div className="flex items-center gap-4">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = tab.name === activeTab;
            
            return (
              <div
                key={index}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-200 ${
                  isActive 
                    ? `border shadow-sm` 
                    : "hover:opacity-75"
                }`}
                style={{
                  backgroundColor: isActive ? (isDark ? 'rgba(7, 201, 253, 0.2)' : 'rgba(8, 33, 93, 0.1)') : 'transparent',
                  borderColor: isActive ? 'var(--Brand-primary)' : 'transparent'
                }}
              >
                <Icon size={16} style={{ color: 'var(--Brand-primary)' }} />
                <span className={isActive && tab.name === "Chat" ? "aylla-tab-chat" : "aylla-tab-normal"}>
                  {tab.name}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Right Side Icons and Avatar */}
        <div className="flex items-center gap-3 ml-6">
          {/* User Info */}
          {user && (
            <div className="hidden lg:flex flex-col items-end mr-2">
              <span className="text-xs font-['Lato'] font-medium" style={{ color: 'var(--Text-primary)' }}>
                {user.name}
              </span>
              <span className="text-xs font-['Lato']" style={{ color: 'var(--Text-tertiary)' }}>
                {user.role}
              </span>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: isDark ? 'rgba(7, 201, 253, 0.2)' : 'rgba(8, 33, 93, 0.1)',
                borderColor: 'var(--Border-primary)',
                color: 'var(--Brand-primary)'
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <div 
              className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(8, 33, 93, 0.05)',
                borderColor: 'var(--Border-primary)',
                color: 'var(--Brand-primary)'
              }}
            >
              <Settings size={16} />
            </div>
            
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)',
                borderColor: isDark ? '#DC2626' : '#EF4444',
                color: isDark ? '#F87171' : '#DC2626'
              }}
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
          
          {/* User Avatar */}
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer hover:scale-105"
            style={{
              background: `linear-gradient(135deg, var(--Brand-primary) 0%, var(--Brand-secondary) 100%)`
            }}
            title={user ? `${user.name} - ${user.role}` : 'Usuário'}
          >
            <span className="aylla-avatar">{getUserInitials()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;