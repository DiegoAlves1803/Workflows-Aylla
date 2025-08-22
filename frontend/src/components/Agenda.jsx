import React, { useState } from "react";
import { Calendar, Clock, Plus, User, MapPin } from "lucide-react";

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const eventos = [
    {
      id: 1,
      title: "Reunião com Jean Gray",
      time: "09:00",
      duration: "1h",
      location: "Sala de Reuniões",
      type: "reuniao",
      participants: ["Jean Gray", "Professor Xavier"]
    },
    {
      id: 2,
      title: "Análise de Dados Educacionais",
      time: "14:00",
      duration: "2h",
      location: "Laboratório de Dados",
      type: "analise"
    },
    {
      id: 3,
      title: "Apresentação Relatório FUNDEB",
      time: "16:30",
      duration: "1h30m",
      location: "Auditório Principal",
      type: "apresentacao"
    }
  ];

  return (
    <div className="pt-32 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-['Lexend'] font-medium text-[#0F172A] mb-2">
          Agenda
        </h1>
        <p className="text-[#64748B] font-['Lato']">
          Gerencie seus compromissos e reuniões
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-['Lato'] font-semibold text-[#0F172A]">
                Janeiro 2024
              </h2>
              <button className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <Plus size={20} className="text-[#08215D]" />
              </button>
            </div>
            
            {/* Simple Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                <div key={day} className="py-2 text-[#64748B] font-['Lato'] font-medium">
                  {day}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <div 
                  key={i+1} 
                  className={`py-2 cursor-pointer rounded-lg transition-colors font-['Lato'] ${
                    i+1 === 15 
                      ? 'bg-gradient-to-r from-[#08215D] to-[#07C9FD] text-white font-semibold' 
                      : 'hover:bg-blue-50 text-[#0F172A]'
                  }`}
                >
                  {i+1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="text-[#08215D]" size={24} />
              <h2 className="text-xl font-['Lato'] font-semibold text-[#0F172A]">
                Hoje, 15 de Janeiro
              </h2>
            </div>

            <div className="space-y-4">
              {eventos.map((evento) => (
                <div key={evento.id} className="border-l-4 border-[#07C9FD] bg-blue-50 rounded-r-xl p-4 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-['Lato'] font-semibold text-[#0F172A] mb-2">
                        {evento.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-[#64748B] font-['Lato']">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{evento.time} • {evento.duration}</span>
                        </div>
                        
                        {evento.location && (
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{evento.location}</span>
                          </div>
                        )}
                      </div>

                      {evento.participants && (
                        <div className="flex items-center gap-2 mt-2">
                          <User size={16} className="text-[#64748B]" />
                          <div className="flex gap-1">
                            {evento.participants.map((participant, index) => (
                              <span key={index} className="text-xs bg-white px-2 py-1 rounded-full text-[#08215D] font-['Lato']">
                                {participant}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className={`px-3 py-1 rounded-full text-xs font-['Lato'] font-medium ${
                      evento.type === 'reuniao' ? 'bg-green-100 text-green-800' :
                      evento.type === 'analise' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {evento.type === 'reuniao' ? 'Reunião' :
                       evento.type === 'analise' ? 'Análise' : 'Apresentação'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Event Button */}
            <button className="w-full mt-6 p-4 border-2 border-dashed border-blue-200 rounded-xl text-[#64748B] font-['Lato'] hover:border-[#07C9FD] hover:text-[#08215D] transition-colors">
              + Adicionar novo evento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;