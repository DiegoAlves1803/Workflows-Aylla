import React, { useState } from "react";
import { Bell, Check, X, Info, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Notificacoes = () => {
  const { isDark, colors } = useTheme();
  const currentTheme = isDark ? colors.dark : colors.light;
  
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "info",
      title: "Novo relatório FUNDEB disponível",
      message: "O relatório mensal do FUNDEB de janeiro já está disponível para consulta e download.",
      time: "2 horas atrás",
      read: false,
      priority: "normal"
    },
    {
      id: 2,
      type: "success",
      title: "Prestação de contas aprovada",
      description: "EMEF José Silva",
      message: "A prestação de contas do PDDE foi aprovada com sucesso. Todos os documentos estão em conformidade.",
      time: "4 horas atrás", 
      read: false,
      priority: "normal"
    },
    {
      id: 3,
      type: "warning",
      title: "Lembrete: Reunião agendada",
      description: "Conselho Municipal de Educação",
      message: "Reunião marcada para amanhã às 14:00 na Secretaria de Educação. Pauta: Discussão do orçamento 2024.",
      time: "1 dia atrás",
      read: true,
      priority: "high"
    },
    {
      id: 4,
      type: "info",
      title: "Atualização do sistema Aylla",
      message: "Nova versão da Aylla disponível com melhorias de performance e novas funcionalidades educacionais.",
      time: "2 dias atrás",
      read: true,
      priority: "low"
    },
    {
      id: 5,
      type: "success",
      title: "Repasse PDDE confirmado", 
      description: "Escola Municipal Dom Pedro II",
      message: "Repasse de R$ 12.500,00 do PDDE foi confirmado e estará disponível em 48 horas.",
      time: "3 dias atrás",
      read: true,
      priority: "normal"
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'success': return CheckCircle;
      case 'warning': return AlertCircle;
      case 'error': return X;
      default: return Info;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'success': return '#22C55E';
      case 'warning': return '#F59E0B'; 
      case 'error': return '#EF4444';
      default: return '#3B82F6';
    }
  };

  const getPriorityStyle = (priority) => {
    if (priority === 'high') {
      return {
        borderLeftWidth: '4px',
        borderLeftColor: '#EF4444'
      };
    }
    return {};
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="pt-32 px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 
            className="text-3xl font-['Lexend'] font-medium mb-2 transition-colors duration-300"
            style={{ color: currentTheme.text.primary }}
          >
            Notificações
          </h1>
          <p 
            className="font-['Lato'] transition-colors duration-300 flex items-center gap-2"
            style={{ color: currentTheme.text.tertiary }}
          >
            <Bell size={16} />
            {unreadCount} notificações não lidas
          </p>
        </div>
        
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="px-4 py-2 rounded-lg border font-['Lato'] text-sm transition-all duration-200 hover:shadow-md"
            style={{
              backgroundColor: isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(8, 33, 93, 0.05)',
              borderColor: 'var(--Brand-primary)',
              color: 'var(--Brand-primary)'
            }}
          >
            Marcar todas como lidas
          </button>
        )}
      </div>

      {/* Notifications Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div 
          className="p-6 rounded-2xl border transition-all duration-300"
          style={{
            backgroundColor: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
            borderColor: '#3B82F6' + '40'
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p 
                className="text-2xl font-bold font-['Lexend']"
                style={{ color: '#3B82F6' }}
              >
                {notifications.length}
              </p>
              <p 
                className="text-sm font-['Lato'] font-medium"
                style={{ color: currentTheme.text.primary }}
              >
                Total
              </p>
            </div>
            <Bell size={24} style={{ color: '#3B82F6' }} />
          </div>
        </div>

        <div 
          className="p-6 rounded-2xl border transition-all duration-300"
          style={{
            backgroundColor: isDark ? 'rgba(245, 158, 11, 0.1)' : 'rgba(245, 158, 11, 0.05)',
            borderColor: '#F59E0B' + '40'
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p 
                className="text-2xl font-bold font-['Lexend']"
                style={{ color: '#F59E0B' }}
              >
                {unreadCount}
              </p>
              <p 
                className="text-sm font-['Lato'] font-medium"
                style={{ color: currentTheme.text.primary }}
              >
                Não lidas
              </p>
            </div>
            <AlertCircle size={24} style={{ color: '#F59E0B' }} />
          </div>
        </div>

        <div 
          className="p-6 rounded-2xl border transition-all duration-300"
          style={{
            backgroundColor: isDark ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.05)',
            borderColor: '#22C55E' + '40'
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p 
                className="text-2xl font-bold font-['Lexend']"
                style={{ color: '#22C55E' }}
              >
                {notifications.length - unreadCount}
              </p>
              <p 
                className="text-sm font-['Lato'] font-medium"
                style={{ color: currentTheme.text.primary }}
              >
                Lidas
              </p>
            </div>
            <CheckCircle size={24} style={{ color: '#22C55E' }} />
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div 
        className="rounded-2xl p-6 border transition-all duration-300"
        style={{
          backgroundColor: currentTheme.cardBg,
          borderColor: currentTheme.border,
          boxShadow: currentTheme.shadow
        }}
      >
        <div className="space-y-4">
          {notifications.length === 0 ? (
            <div className="text-center py-12">
              <Bell 
                size={64} 
                className="mx-auto mb-4 transition-colors duration-300"
                style={{ color: currentTheme.text.tertiary }}
              />
              <h3 
                className="text-lg font-['Lato'] font-semibold mb-2 transition-colors duration-300"
                style={{ color: currentTheme.text.secondary }}
              >
                Nenhuma notificação
              </h3>
              <p 
                className="font-['Lato'] transition-colors duration-300"
                style={{ color: currentTheme.text.tertiary }}
              >
                Você está em dia! Não há novas notificações.
              </p>
            </div>
          ) : (
            notifications.map((notification) => {
              const TypeIcon = getTypeIcon(notification.type);
              const typeColor = getTypeColor(notification.type);
              
              return (
                <div
                  key={notification.id}
                  className={`p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${
                    !notification.read ? 'ring-2 ring-opacity-20' : ''
                  }`}
                  style={{
                    backgroundColor: !notification.read 
                      ? (isDark ? 'rgba(7, 201, 253, 0.05)' : 'rgba(8, 33, 93, 0.02)')
                      : (isDark ? 'rgba(30, 41, 59, 0.3)' : 'rgba(248, 250, 252, 0.5)'),
                    borderColor: !notification.read 
                      ? 'var(--Brand-primary)' 
                      : currentTheme.border,
                    ringColor: !notification.read ? 'var(--Brand-primary)' : 'transparent',
                    ...getPriorityStyle(notification.priority)
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Type Icon */}
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ 
                        backgroundColor: typeColor + '20',
                        color: typeColor
                      }}
                    >
                      <TypeIcon size={20} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 
                          className={`font-['Lato'] font-semibold transition-colors duration-300 ${
                            !notification.read ? 'font-bold' : 'font-medium'
                          }`}
                          style={{ color: currentTheme.text.primary }}
                        >
                          {notification.title}
                          {notification.priority === 'high' && (
                            <span 
                              className="ml-2 px-2 py-1 text-xs rounded-full"
                              style={{
                                backgroundColor: '#FEE2E2',
                                color: '#DC2626'
                              }}
                            >
                              Prioridade
                            </span>
                          )}
                        </h3>
                        
                        <div className="flex items-center gap-2 ml-4">
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="p-1 rounded-full transition-colors duration-200 hover:scale-110"
                              style={{
                                backgroundColor: '#22C55E' + '20',
                                color: '#22C55E'
                              }}
                              title="Marcar como lida"
                            >
                              <Check size={14} />
                            </button>
                          )}
                          
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="p-1 rounded-full transition-colors duration-200 hover:scale-110"
                            style={{
                              backgroundColor: '#EF4444' + '20',
                              color: '#EF4444'
                            }}
                            title="Excluir notificação"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>

                      {notification.description && (
                        <p 
                          className="text-sm font-['Lato'] font-medium mb-1 transition-colors duration-300"
                          style={{ color: 'var(--Brand-primary)' }}
                        >
                          {notification.description}
                        </p>
                      )}

                      <p 
                        className="font-['Lato'] mb-2 transition-colors duration-300"
                        style={{ color: currentTheme.text.secondary }}
                      >
                        {notification.message}
                      </p>

                      <div className="flex items-center gap-2">
                        <Clock size={12} style={{ color: currentTheme.text.tertiary }} />
                        <p 
                          className="text-xs font-['Lato'] transition-colors duration-300"
                          style={{ color: currentTheme.text.tertiary }}
                        >
                          {notification.time}
                        </p>
                        
                        {!notification.read && (
                          <span 
                            className="w-2 h-2 rounded-full ml-2"
                            style={{ backgroundColor: 'var(--Brand-primary)' }}
                          ></span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Notificacoes;