import React from "react";
import { AlertTriangle, Info, CheckCircle, Clock, X } from "lucide-react";

const Alertas = () => {
  const alertas = [
    {
      id: 1,
      type: "urgent",
      title: "Prazo de Prestação de Contas",
      message: "Faltam apenas 15 dias para o prazo de prestação de contas do FUNDEB.",
      time: "2 horas atrás",
      icon: AlertTriangle,
      color: "red"
    },
    {
      id: 2,
      type: "warning",
      title: "Orçamento Próximo do Limite",
      message: "O programa PDDE atingiu 85% do orçamento disponível.",
      time: "5 horas atrás",
      icon: Info,
      color: "yellow"
    },
    {
      id: 3,
      type: "info",
      title: "Relatório Disponível",
      message: "O relatório mensal de gastos foi gerado e está disponível para download.",
      time: "1 dia atrás",
      icon: CheckCircle,
      color: "green"
    },
    {
      id: 4,
      type: "reminder",
      title: "Reunião Agendada",
      message: "Lembrete: Reunião com Jean Gray amanhã às 09:00.",
      time: "2 dias atrás",
      icon: Clock,
      color: "blue"
    }
  ];

  const getAlertStyle = (color) => {
    const styles = {
      red: "bg-red-50 border-red-200 text-red-800",
      yellow: "bg-yellow-50 border-yellow-200 text-yellow-800",
      green: "bg-green-50 border-green-200 text-green-800",
      blue: "bg-blue-50 border-blue-200 text-blue-800"
    };
    return styles[color] || styles.blue;
  };

  const getIconStyle = (color) => {
    const styles = {
      red: "text-red-600",
      yellow: "text-yellow-600",
      green: "text-green-600",
      blue: "text-blue-600"
    };
    return styles[color] || styles.blue;
  };

  return (
    <div className="pt-32 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-['Lexend'] font-medium text-[#0F172A] mb-2">
          Alertas e Notificações
        </h1>
        <p className="text-[#64748B] font-['Lato']">
          Acompanhe notificações importantes e lembretes
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-600 text-sm font-['Lato'] font-medium">Urgentes</p>
              <p className="text-2xl font-['Lexend'] font-bold text-red-800">1</p>
            </div>
            <AlertTriangle className="text-red-600" size={32} />
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-600 text-sm font-['Lato'] font-medium">Avisos</p>
              <p className="text-2xl font-['Lexend'] font-bold text-yellow-800">1</p>
            </div>
            <Info className="text-yellow-600" size={32} />
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-['Lato'] font-medium">Lembretes</p>
              <p className="text-2xl font-['Lexend'] font-bold text-blue-800">1</p>
            </div>
            <Clock className="text-blue-600" size={32} />
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm font-['Lato'] font-medium">Concluídos</p>
              <p className="text-2xl font-['Lexend'] font-bold text-green-800">1</p>
            </div>
            <CheckCircle className="text-green-600" size={32} />
          </div>
        </div>
      </div>

      {/* Alerts List */}
      <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6">
        <h2 className="text-xl font-['Lato'] font-semibold text-[#0F172A] mb-6">
          Todas as Notificações
        </h2>

        <div className="space-y-4">
          {alertas.map((alerta) => {
            const IconComponent = alerta.icon;
            return (
              <div 
                key={alerta.id} 
                className={`border rounded-2xl p-4 transition-all duration-200 hover:shadow-md ${getAlertStyle(alerta.color)}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-full ${alerta.color === 'red' ? 'bg-red-100' : 
                    alerta.color === 'yellow' ? 'bg-yellow-100' :
                    alerta.color === 'green' ? 'bg-green-100' : 'bg-blue-100'}`}>
                    <IconComponent size={20} className={getIconStyle(alerta.color)} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-['Lato'] font-semibold text-[#0F172A] mb-1">
                      {alerta.title}
                    </h3>
                    <p className="text-[#64748B] font-['Lato'] mb-2">
                      {alerta.message}
                    </p>
                    <p className="text-xs text-[#64748B] font-['Lato']">
                      {alerta.time}
                    </p>
                  </div>

                  <button className="p-1 rounded-full hover:bg-white/50 transition-colors">
                    <X size={16} className="text-[#64748B]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State Message */}
        <div className="text-center py-8 mt-6 border-t border-gray-100">
          <p className="text-[#64748B] font-['Lato']">
            Você está em dia com todas as notificações importantes! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alertas;