import React from "react";
import { Clock, TrendingUp } from "lucide-react";

const MeuPainel = () => {
  return (
    <div className="pt-32 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-['Lexend'] font-medium text-[#0F172A] mb-2">
          Visão Geral
        </h1>
      </div>

      {/* Resumo Financeiro */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="text-[#08215D]" size={24} />
          <h2 className="text-xl font-['Lato'] font-semibold text-[#0F172A]">
            Resumo Financeiro
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Valor Total */}
          <div className="space-y-4">
            <div>
              <p className="text-[#64748B] text-sm font-['Lato'] mb-2">
                Valor Total dos Programas
              </p>
              <p className="text-3xl font-bold text-[#0F172A] font-['Lexend']">
                R$00.000,00
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-gray-200 rounded-full">
                <div className="w-8 h-2 bg-gradient-to-r from-[#07C9FD] to-[#08215D] rounded-full"></div>
              </div>
              <span className="text-sm text-[#64748B] font-['Lato']">
                00% utilizado
              </span>
            </div>
          </div>

          {/* Gastos Realizados */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <svg viewBox="0 0 36 36" className="w-16 h-16">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    strokeDasharray="0, 100"
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333EA" />
                      <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <p className="text-[#64748B] text-sm font-['Lato'] mb-1">
                  Gastos Realizados
                </p>
                <p className="text-2xl font-bold text-[#0F172A] font-['Lexend']">
                  R$00.000,00
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="inline-block w-3 h-3 bg-[#9333EA] rounded-full mr-2"></span>
                <span className="text-[#64748B] font-['Lato']">Gasto Custeio • 00%</span>
                <p className="text-[#0F172A] font-semibold ml-5">R$00.000,00</p>
              </div>
              <div>
                <span className="inline-block w-3 h-3 bg-[#F97316] rounded-full mr-2"></span>
                <span className="text-[#64748B] font-['Lato']">Gasto Capital • 00%</span>
                <p className="text-[#0F172A] font-semibold ml-5">R$00.000,00</p>
              </div>
            </div>
          </div>

          {/* Saldo Disponível */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <svg viewBox="0 0 36 36" className="w-16 h-16">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    strokeDasharray="0, 100"
                  />
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <p className="text-[#64748B] text-sm font-['Lato'] mb-1">
                  Saldo Disponível
                </p>
                <p className="text-2xl font-bold text-[#0F172A] font-['Lexend']">
                  R$00.000,00
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="inline-block w-3 h-3 bg-[#3B82F6] rounded-full mr-2"></span>
                <span className="text-[#64748B] font-['Lato']">Saldo Custeio • 00%</span>
                <p className="text-[#0F172A] font-semibold ml-5">R$00.000,00</p>
              </div>
              <div>
                <span className="inline-block w-3 h-3 bg-[#10B981] rounded-full mr-2"></span>
                <span className="text-[#64748B] font-['Lato']">Saldo Capital • 00%</span>
                <p className="text-[#0F172A] font-semibold ml-5">R$00.000,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prestação de contas */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="text-[#08215D]" size={24} />
          <h2 className="text-xl font-['Lato'] font-semibold text-[#0F172A]">
            Prestação de contas
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-[#64748B] text-sm font-['Lato'] mb-2">
              Prazo Anual • 00/00/0000
            </p>
            <p className="text-[#0F172A] text-lg font-['Lato']">
              Faltam <span className="text-3xl font-bold font-['Lexend']">000</span> Dias
            </p>
          </div>
          <div>
            <p className="text-[#64748B] text-sm font-['Lato'] mb-2">
              Prazo Trimestral • 00/00/0000
            </p>
            <p className="text-[#0F172A] text-lg font-['Lato']">
              Faltam <span className="text-3xl font-bold font-['Lexend']">00</span> Dias
            </p>
          </div>
        </div>
      </div>

      {/* Detalhamento por programa */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-2xl font-['Lexend'] font-medium text-[#0F172A] mb-2">
          Detalhamento por programa
        </h2>
        <p className="text-[#64748B] font-['Lato'] mb-6">
          Saldos e gastos separados por custeio e capital
        </p>

        {/* Table Header */}
        <div className="bg-[#F8FAFC] rounded-xl p-4 mb-4">
          <div className="grid grid-cols-6 gap-4 text-sm font-['Lato'] text-[#64748B]">
            <div>Programa</div>
            <div className="col-span-2 text-center">
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">
                Saldo Custeio | Saldo Capital
              </span>
            </div>
            <div className="col-span-2 text-center">
              <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs">
                Gastos Custeio | Gastos Capital
              </span>
            </div>
            <div className="text-center">Total Programa</div>
          </div>
        </div>

        {/* Table Rows */}
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="border-b border-gray-100 py-4">
            <div className="grid grid-cols-6 gap-4 items-center">
              <div>
                <p className="font-['Lato'] font-medium text-[#0F172A]">Nome do programa</p>
                <p className="text-sm text-[#64748B] font-['Lato']">PDDE - Tipo</p>
              </div>
              <div className="col-span-2">
                <div className="flex gap-2">
                  <span className="bg-green-50 border border-green-200 rounded-full px-3 py-1 text-sm text-[#0F172A] font-['Lato']">
                    R$ 0.000,00
                  </span>
                  <span className="bg-green-50 border border-green-200 rounded-full px-3 py-1 text-sm text-[#0F172A] font-['Lato']">
                    R$ 0.000,00
                  </span>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex gap-2">
                  <span className="bg-red-50 border border-red-200 rounded-full px-3 py-1 text-sm text-[#0F172A] font-['Lato']">
                    R$ 0.000,00
                  </span>
                  <span className="bg-red-50 border border-red-200 rounded-full px-3 py-1 text-sm text-[#0F172A] font-['Lato']">
                    R$ 0.000,00
                  </span>
                </div>
              </div>
              <div className="text-center">
                <p className="font-['Lato'] font-semibold text-[#0F172A]">R$ 0.000,00</p>
                <p className="text-xs text-[#64748B] font-['Lato']">00,0% utilizado</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeuPainel;