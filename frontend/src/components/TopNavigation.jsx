import React, { useState } from "react";
import { MessageSquare, BarChart3, Calendar, AlertTriangle, FileText, Bell, MoreHorizontal, Sun, Moon, LogOut } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

const TopNavigation = ({ activeTab, setActiveTab }) => {
  const { isDark, toggleTheme, colors } = useTheme();
  const { user, logout } = useAuth();
  const currentTheme = isDark ? colors.dark : colors.light;
  const [showNotifications, setShowNotifications] = useState(false);
  
  const notifications = [
    {
      id: 1,
      type: "warning",
      title: "Prazo PDDE Crítico",
      message: "Prestação de contas do PDDE vence em 8 dias",
      time: "2 horas atrás",
      priority: "high",
      read: false
    },
    {
      id: 2,
      type: "success", 
      title: "Repasse FUNDEB Confirmado",
      message: "Novo repasse de R$ 285.000 confirmado para setembro",
      time: "4 horas atrás",
      priority: "normal",
      read: false
    },
    {
      id: 3,
      type: "info",
      title: "Relatório Mensal Disponível",
      message: "Relatório de execução de julho/2025 pronto para análise",
      time: "1 dia atrás",
      priority: "normal", 
      read: true
    },
    {
      id: 4,
      type: "warning",
      title: "Documentação Pendente",
      message: "3 escolas com documentação PNAE pendente",
      time: "2 dias atrás",
      priority: "medium",
      read: true
    }
  ];
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const getNotificationIcon = (type) => {
    switch(type) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      default: return 'ℹ️';
    }
  };
  
  const tabs = [
    { name: "Chat", icon: MessageSquare },
    { name: "Meu Painel", icon: BarChart3 },
    { name: "Agenda", icon: Calendar },
    { name: "Alertas", icon: AlertTriangle },
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
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.name === activeTab;
            
            return (
              <div
                key={`nav-tab-${tab.name}`}
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

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 relative"
                style={{
                  backgroundColor: isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(8, 33, 93, 0.05)',
                  borderColor: 'var(--Border-primary)',
                  color: 'var(--Brand-primary)'
                }}
                title="Notificações"
              >
                <Bell size={16} />
                {unreadCount > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs font-bold flex items-center justify-center text-white"
                    style={{ backgroundColor: '#EF4444' }}
                  >
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div 
                  className="absolute right-0 top-12 w-80 rounded-2xl border shadow-lg z-50 max-h-96 overflow-y-auto"
                  style={{
                    backgroundColor: currentTheme.cardBg,
                    borderColor: currentTheme.border
                  }}
                >
                  {/* Header */}
                  <div className="p-4 border-b" style={{ borderColor: currentTheme.border }}>
                    <div className="flex items-center justify-between">
                      <h3 
                        className="font-['Lato'] font-semibold transition-colors duration-300"
                        style={{ color: currentTheme.text.primary }}
                      >
                        Notificações
                      </h3>
                      <span 
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: isDark ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)',
                          color: '#EF4444'
                        }}
                      >
                        {unreadCount} não lidas
                      </span>
                    </div>
                  </div>

                  {/* Notifications List */}
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-6 text-center">
                        <Bell 
                          size={32} 
                          className="mx-auto mb-2 opacity-50"
                          style={{ color: currentTheme.text.tertiary }}
                        />
                        <p 
                          className="text-sm font-['Lato']"
                          style={{ color: currentTheme.text.tertiary }}
                        >
                          Nenhuma notificação
                        </p>
                      </div>
                    ) : (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-3 border-b transition-all duration-200 hover:bg-opacity-50 cursor-pointer ${
                            !notification.read ? 'bg-opacity-10' : ''
                          }`}
                          style={{
                            borderColor: currentTheme.border,
                            backgroundColor: !notification.read 
                              ? (isDark ? 'rgba(7, 201, 253, 0.05)' : 'rgba(8, 33, 93, 0.02)')
                              : 'transparent'
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="text-lg mt-0.5">
                              {getNotificationIcon(notification.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 
                                className={`text-sm font-['Lato'] mb-1 ${
                                  !notification.read ? 'font-semibold' : 'font-medium'
                                } transition-colors duration-300`}
                                style={{ color: currentTheme.text.primary }}
                              >
                                {notification.title}
                                {notification.priority === 'high' && (
                                  <span 
                                    className="ml-2 text-xs px-1 py-0.5 rounded"
                                    style={{
                                      backgroundColor: '#FEE2E2',
                                      color: '#DC2626'
                                    }}
                                  >
                                    Urgente
                                  </span>
                                )}
                              </h4>
                              <p 
                                className="text-xs font-['Lato'] mb-1 transition-colors duration-300"
                                style={{ color: currentTheme.text.secondary }}
                              >
                                {notification.message}
                              </p>
                              <p 
                                className="text-xs font-['Lato'] transition-colors duration-300"
                                style={{ color: currentTheme.text.tertiary }}
                              >
                                {notification.time}
                              </p>
                            </div>
                            {!notification.read && (
                              <div 
                                className="w-2 h-2 rounded-full mt-1"
                                style={{ backgroundColor: 'var(--Brand-primary)' }}
                              />
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Footer */}
                  <div 
                    className="p-3 text-center border-t"
                    style={{ borderColor: currentTheme.border }}
                  >
                    <button 
                      className="text-xs font-['Lato'] transition-colors duration-200 hover:underline"
                      style={{ color: 'var(--Brand-primary)' }}
                      onClick={() => setShowNotifications(false)}
                    >
                      Ver todas as notificações
                    </button>
                  </div>
                </div>
              )}
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