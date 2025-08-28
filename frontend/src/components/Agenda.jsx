import React, { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Plus, X, Clock, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Agenda = () => {
  const { isDark, colors } = useTheme();
  const currentTheme = isDark ? colors.dark : colors.light;
  
  const [currentDate, setCurrentDate] = useState(new Date(2025, 7, 27)); // Agosto 2025
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [newTask, setNewTask] = useState({
    name: '',
    description: '',
    date: '29/08/2025',
    time: '10:00',
    color: '#3B82F6' // Azul padrão
  });
  
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Reunião 1",
      time: "09:00",
      date: "27/08/2025",
      color: "#22C55E",
      priority: "medium",
      status: "completed",
      description: "Reunião com diretores sobre planejamento semestral"
    },
    {
      id: 2,
      name: "Reunião 2", 
      time: "09:30",
      date: "27/08/2025",
      color: "#22C55E",
      priority: "high",
      status: "pending",
      description: "Conselho Municipal de Educação - Orçamento 2025"
    },
    {
      id: 3,
      name: "Análise FUNDEB",
      time: "14:00",
      date: "27/08/2025",
      color: "#3B82F6",
      priority: "high",
      status: "pending",
      description: "Análise trimestral dos recursos FUNDEB"
    },
    {
      id: 4,
      name: "Prestação PDDE",
      time: "15:30",
      date: "27/08/2025",
      color: "#F59E0B",
      priority: "urgent",
      status: "pending",
      description: "Urgente: Prestação de contas vence em 8 dias"
    },
    {
      id: 5,
      name: "Relatório Mensal",
      time: "16:00",
      date: "27/08/2025",
      color: "#8B5CF6",
      priority: "low",
      status: "completed",
      description: "Relatório de atividades de julho"
    },
    // Compromissos históricos
    {
      id: 6,
      name: "Visita EMEF João Silva",
      time: "10:00",
      date: "25/08/2025",
      color: "#06B6D4",
      priority: "medium",
      status: "completed",
      description: "Inspeção de infraestrutura concluída"
    },
    {
      id: 7,
      name: "Formação de Professores",
      time: "14:30",
      date: "24/08/2025",
      color: "#8B5CF6",
      priority: "high",
      status: "completed",
      description: "Workshop sobre metodologias ativas"
    },
    {
      id: 8,
      name: "Reunião PNAE",
      time: "11:00",
      date: "23/08/2025",
      color: "#EF4444",
      priority: "medium",
      status: "cancelled",
      description: "Cancelada - Reagendada para setembro"
    }
  ]);

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const colorPalette = [
    "#3B82F6", // Azul (selecionado por padrão)
    "#EF4444", // Vermelho
    "#22C55E", // Verde
    "#06B6D4", // Ciano
    "#8B5CF6", // Roxo
    "#F59E0B", // Laranja
    "#0EA5E9"  // Azul claro
  ];

  const getPriorityIcon = (priority) => {
    switch(priority) {
      case 'urgent':
        return <AlertTriangle size={14} className="text-red-500" />;
      case 'high':
        return <AlertTriangle size={14} className="text-orange-500" />;
      case 'medium':
        return <Clock size={14} className="text-yellow-500" />;
      case 'low':
        return <Clock size={14} className="text-green-500" />;
      default:
        return <Clock size={14} className="text-gray-500" />;
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed':
        return <CheckCircle size={14} className="text-green-500" />;
      case 'pending':
        return <Clock size={14} className="text-yellow-500" />;
      case 'cancelled':
        return <XCircle size={14} className="text-red-500" />;
      default:
        return <Clock size={14} className="text-gray-500" />;
    }
  };

  const getPriorityLabel = (priority) => {
    const labels = {
      urgent: "Urgente",
      high: "Alta",
      medium: "Média", 
      low: "Baixa"
    };
    return labels[priority] || "Normal";
  };

  const getStatusLabel = (status) => {
    const labels = {
      completed: "Concluído",
      pending: "Pendente",
      cancelled: "Cancelado"
    };
    return labels[status] || "Agendado";
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    // Primeiro por data (mais recente primeiro)
    const dateA = new Date(a.date.split('/').reverse().join('-'));
    const dateB = new Date(b.date.split('/').reverse().join('-'));
    if (dateB.getTime() !== dateA.getTime()) {
      return dateB.getTime() - dateA.getTime();
    }
    // Depois por horário
    return b.time.localeCompare(a.time);
  });
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Dias do mês anterior
    const prevMonth = new Date(year, month, 0);
    const daysInPrevMonth = prevMonth.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        isToday: false
      });
    }

    // Dias do mês atual
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = year === today.getFullYear() && 
                      month === today.getMonth() && 
                      day === today.getDate();
      days.push({
        day,
        isCurrentMonth: true,
        isToday
      });
    }

    // Dias do próximo mês
    const totalCells = 42; // 6 semanas * 7 dias
    const remainingCells = totalCells - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isToday: false
      });
    }

    return days;
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const createTask = () => {
    if (newTask.name.trim()) {
      const task = {
        id: Date.now(),
        name: newTask.name,
        description: newTask.description,
        time: newTask.time,
        date: newTask.date,
        color: newTask.color
      };
      setTasks([...tasks, task]);
      setNewTask({
        name: '',
        description: '',
        date: '29/08/2025',
        time: '10:00',
        color: '#3B82F6'
      });
      setShowNewTaskModal(false);
    }
  };

  const getTasksForDate = (day, isCurrentMonth) => {
    if (!isCurrentMonth) return [];
    
    const dateStr = `${String(day).padStart(2, '0')}/${String(currentDate.getMonth() + 1).padStart(2, '0')}/${currentDate.getFullYear()}`;
    return tasks.filter(task => task.date === dateStr);
  };

  const totalTasks = tasks.length;

  return (
    <div className="pt-32 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={goToToday}
            className="px-4 py-2 rounded-lg border font-['Lato'] text-sm transition-all duration-200 hover:shadow-md"
            style={{
              backgroundColor: isDark ? 'rgba(248, 250, 252, 0.05)' : 'rgba(248, 250, 252, 0.8)',
              borderColor: currentTheme.border,
              color: currentTheme.text.secondary
            }}
          >
            Ir para hoje
          </button>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-opacity-80"
              style={{ color: currentTheme.text.secondary }}
            >
              <ChevronLeft size={20} />
            </button>
            
            <h2 
              className="text-xl font-['Lexend'] font-medium min-w-[180px] text-center transition-colors duration-300"
              style={{ color: currentTheme.text.primary }}
            >
              {monthNames[currentDate.getMonth()]} de {currentDate.getFullYear()}
            </h2>
            
            <button
              onClick={() => navigateMonth(1)}
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-opacity-80"
              style={{ color: currentTheme.text.secondary }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span 
            className="text-sm font-['Lato'] transition-colors duration-300"
            style={{ color: currentTheme.text.tertiary }}
          >
            {totalTasks} tarefas
          </span>
          
          <button
            onClick={() => setShowNewTaskModal(true)}
            className="px-6 py-3 rounded-xl font-['Lato'] font-medium text-white transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-2"
            style={{
              background: `linear-gradient(135deg, var(--Brand-primary) 0%, var(--Brand-secondary) 100%)`
            }}
          >
            <Plus size={20} />
            Nova tarefa
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div 
        className="rounded-2xl border transition-all duration-300"
        style={{
          backgroundColor: currentTheme.cardBg,
          borderColor: currentTheme.border,
          boxShadow: currentTheme.shadow
        }}
      >
        {/* Calendar Header */}
        <div className="grid grid-cols-7 border-b" style={{ borderColor: currentTheme.border }}>
          {dayNames.map((dayName) => (
            <div
              key={dayName}
              className="p-4 text-center text-sm font-['Lato'] font-medium transition-colors duration-300"
              style={{ 
                backgroundColor: isDark ? '#374151' : '#64748B',
                color: 'white'
              }}
            >
              {dayName}
            </div>
          ))}
        </div>

        {/* Calendar Body */}
        <div className="grid grid-cols-7">
          {getDaysInMonth(currentDate).map((dayObj, index) => {
            const dayTasks = getTasksForDate(dayObj.day, dayObj.isCurrentMonth);
            const visibleTasks = dayTasks.slice(0, 2);
            const extraTasks = dayTasks.length - visibleTasks.length;
            
            return (
              <div
                key={index}
                className={`min-h-[120px] p-2 border-r border-b transition-all duration-200 relative ${
                  dayObj.isCurrentMonth ? 'hover:bg-opacity-50' : 'opacity-40'
                }`}
                style={{ 
                  borderColor: currentTheme.border,
                  backgroundColor: dayObj.isToday 
                    ? (isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(8, 33, 93, 0.05)')
                    : 'transparent'
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span 
                    className={`text-sm font-['Lato'] ${
                      dayObj.isToday ? 'font-bold' : 'font-normal'
                    } transition-colors duration-300`}
                    style={{ 
                      color: dayObj.isToday 
                        ? 'var(--Brand-primary)' 
                        : (dayObj.isCurrentMonth ? currentTheme.text.primary : currentTheme.text.tertiary)
                    }}
                  >
                    {dayObj.day}
                  </span>
                  
                  {dayObj.isToday && (
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: 'var(--Brand-primary)' }}
                    >
                      {dayObj.day}
                    </div>
                  )}
                </div>

                {/* Tasks for this day */}
                <div className="space-y-1">
                  {visibleTasks.map((task, taskIndex) => (
                    <div
                      key={taskIndex}
                      className="text-xs p-1 rounded font-['Lato'] truncate transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundColor: task.color,
                        color: 'white'
                      }}
                    >
                      {task.name} {task.time}
                    </div>
                  ))}
                  
                  {extraTasks > 0 && (
                    <div 
                      className="text-xs p-1 rounded font-['Lato'] text-center transition-colors duration-300"
                      style={{
                        backgroundColor: isDark ? 'rgba(156, 163, 175, 0.2)' : 'rgba(156, 163, 175, 0.1)',
                        color: currentTheme.text.secondary
                      }}
                    >
                      +{extraTasks} itens
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* New Task Modal */}
      {showNewTaskModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div 
            className="w-full max-w-md rounded-2xl p-8 transition-all duration-300"
            style={{
              backgroundColor: currentTheme.cardBg,
              border: `1px solid ${currentTheme.border}`
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 
                className="text-xl font-['Lexend'] font-semibold transition-colors duration-300"
                style={{ color: currentTheme.text.primary }}
              >
                Nova tarefa
              </h3>
              <button
                onClick={() => setShowNewTaskModal(false)}
                className="p-2 rounded-full transition-all duration-200 hover:scale-110"
                style={{ color: currentTheme.text.tertiary }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Nome da tarefa */}
              <div>
                <label 
                  className="block text-sm font-['Lato'] font-medium mb-2 transition-colors duration-300"
                  style={{ color: currentTheme.text.secondary }}
                >
                  Nome da tarefa
                </label>
                <input
                  type="text"
                  placeholder="Digite o nome da tarefa"
                  value={newTask.name}
                  onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border font-['Lato'] transition-colors duration-200 bg-transparent"
                  style={{
                    borderColor: currentTheme.border,
                    color: currentTheme.text.primary,
                    backgroundColor: isDark ? 'rgba(30, 41, 59, 0.3)' : 'rgba(248, 250, 252, 0.5)'
                  }}
                />
              </div>

              {/* Descrição */}
              <div>
                <label 
                  className="block text-sm font-['Lato'] font-medium mb-2 transition-colors duration-300"
                  style={{ color: currentTheme.text.secondary }}
                >
                  Descrição
                </label>
                <textarea
                  placeholder="Adicione uma descrição (opcional)"
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border font-['Lato'] transition-colors duration-200 resize-none bg-transparent"
                  style={{
                    borderColor: currentTheme.border,
                    color: currentTheme.text.primary,
                    backgroundColor: isDark ? 'rgba(30, 41, 59, 0.3)' : 'rgba(248, 250, 252, 0.5)'
                  }}
                />
              </div>

              {/* Data e Horário */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label 
                    className="block text-sm font-['Lato'] font-medium mb-2 transition-colors duration-300"
                    style={{ color: currentTheme.text.secondary }}
                  >
                    Data
                  </label>
                  <input
                    type="text"
                    placeholder="29/08/2025"
                    value={newTask.date}
                    onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border font-['Lato'] transition-colors duration-200 bg-transparent"
                    style={{
                      borderColor: currentTheme.border,
                      color: currentTheme.text.primary,
                      backgroundColor: isDark ? 'rgba(30, 41, 59, 0.3)' : 'rgba(248, 250, 252, 0.5)'
                    }}
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-['Lato'] font-medium mb-2 transition-colors duration-300"
                    style={{ color: currentTheme.text.secondary }}
                  >
                    Horário
                  </label>
                  <input
                    type="text"
                    placeholder="10:00"
                    value={newTask.time}
                    onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border font-['Lato'] transition-colors duration-200 bg-transparent"
                    style={{
                      borderColor: currentTheme.border,
                      color: currentTheme.text.primary,
                      backgroundColor: isDark ? 'rgba(30, 41, 59, 0.3)' : 'rgba(248, 250, 252, 0.5)'
                    }}
                  />
                </div>
              </div>

              {/* Cor da tarefa */}
              <div>
                <label 
                  className="block text-sm font-['Lato'] font-medium mb-3 transition-colors duration-300"
                  style={{ color: currentTheme.text.secondary }}
                >
                  Cor da tarefa
                </label>
                <div className="flex gap-3">
                  {colorPalette.map((color) => (
                    <button
                      key={color}
                      onClick={() => setNewTask({ ...newTask, color })}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                        newTask.color === color ? 'ring-2 ring-offset-2' : ''
                      }`}
                      style={{
                        backgroundColor: color,
                        borderColor: newTask.color === color ? color : 'transparent',
                        ringColor: color
                      }}
                    >
                      {newTask.color === color && (
                        <div className="w-full h-full rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowNewTaskModal(false)}
                  className="flex-1 py-3 rounded-xl border font-['Lato'] font-medium transition-all duration-200 hover:shadow-md"
                  style={{
                    borderColor: currentTheme.border,
                    color: currentTheme.text.secondary,
                    backgroundColor: 'transparent'
                  }}
                >
                  Cancelar
                </button>
                
                <button
                  onClick={createTask}
                  disabled={!newTask.name.trim()}
                  className="flex-1 py-3 rounded-xl font-['Lato'] font-medium text-white transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, var(--Brand-primary) 0%, var(--Brand-secondary) 100%)`
                  }}
                >
                  <Plus size={16} />
                  Criar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Agenda;