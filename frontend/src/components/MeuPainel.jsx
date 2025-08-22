import React from "react";
import { Clock, TrendingUp } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const MeuPainel = () => {
  const { isDark, colors } = useTheme();
  const currentTheme = isDark ? colors.dark : colors.light;

  return (
    <div className="pt-32 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 
          className="text-3xl font-['Lexend'] font-medium mb-2 transition-colors duration-300"
          style={{ color: currentTheme.text.primary }}
        >
          Visão Geral
        </h1>
      </div>

      {/* Resumo Financeiro */}
      <div 
        className="rounded-3xl p-8 mb-8 backdrop-blur-sm border transition-all duration-300"
        style={{
          backgroundColor: currentTheme.cardBg,
          borderColor: currentTheme.border,
          boxShadow: currentTheme.shadow
        }}
      >
        <div className="flex items-center gap-2 mb-6">
          <Clock style={{ color: currentTheme.primary }} size={24} />
          <h2 
            className="text-xl font-['Lato'] font-semibold transition-colors duration-300"
            style={{ color: currentTheme.text.primary }}
          >
            Resumo Financeiro
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Valor Total */}
          <div className="space-y-4">
            <div>
              <p 
                className="text-sm font-['Lato'] mb-2 transition-colors duration-300"
                style={{ color: currentTheme.text.tertiary }}
              >
                Valor Total dos Programas
              </p>
              <p 
                className="text-3xl font-bold font-['Lexend'] transition-colors duration-300"
                style={{ color: currentTheme.text.primary }}
              >
                R$00.000,00
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div 
                className="w-32 h-2 rounded-full"
                style={{ backgroundColor: isDark ? '#374151' : '#E5E7EB' }}
              >
                <div 
                  className="w-8 h-2 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${currentTheme.secondary} 0%, ${currentTheme.primary} 100%)`
                  }}
                ></div>
              </div>
              <span 
                className="text-sm font-['Lato'] transition-colors duration-300"
                style={{ color: currentTheme.text.tertiary }}
              >
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
                    stroke={isDark ? "#374151" : "#E5E7EB"}
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
                <p 
                  className="text-sm font-['Lato'] mb-1 transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Gastos Realizados
                </p>
                <p 
                  className="text-2xl font-bold font-['Lexend'] transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  R$00.000,00
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="inline-block w-3 h-3 bg-[#9333EA] rounded-full mr-2"></span>
                <span 
                  className="font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Gasto Custeio • 00%
                </span>
                <p 
                  className="font-semibold ml-5 transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  R$00.000,00
                </p>
              </div>
              <div>
                <span className="inline-block w-3 h-3 bg-[#F97316] rounded-full mr-2"></span>
                <span 
                  className="font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Gasto Capital • 00%
                </span>
                <p 
                  className="font-semibold ml-5 transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  R$00.000,00
                </p>
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
                    stroke={isDark ? "#374151" : "#E5E7EB"}
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
                <p 
                  className="text-sm font-['Lato'] mb-1 transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Saldo Disponível
                </p>
                <p 
                  className="text-2xl font-bold font-['Lexend'] transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  R$00.000,00
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="inline-block w-3 h-3 bg-[#3B82F6] rounded-full mr-2"></span>
                <span 
                  className="font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Saldo Custeio • 00%
                </span>
                <p 
                  className="font-semibold ml-5 transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  R$00.000,00
                </p>
              </div>
              <div>
                <span className="inline-block w-3 h-3 bg-[#10B981] rounded-full mr-2"></span>
                <span 
                  className="font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Saldo Capital • 00%
                </span>
                <p 
                  className="font-semibold ml-5 transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  R$00.000,00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prestação de contas */}
      <div 
        className="rounded-3xl p-8 mb-8 backdrop-blur-sm border transition-all duration-300"
        style={{
          backgroundColor: currentTheme.cardBg,
          borderColor: currentTheme.border,
          boxShadow: currentTheme.shadow
        }}
      >
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp style={{ color: currentTheme.primary }} size={24} />
          <h2 
            className="text-xl font-['Lato'] font-semibold transition-colors duration-300"
            style={{ color: currentTheme.text.primary }}
          >
            Prestação de contas
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p 
              className="text-sm font-['Lato'] mb-2 transition-colors duration-300"
              style={{ color: currentTheme.text.tertiary }}
            >
              Prazo Anual • 00/00/0000
            </p>
            <p 
              className="text-lg font-['Lato'] transition-colors duration-300"
              style={{ color: currentTheme.text.primary }}
            >
              Faltam <span className="text-3xl font-bold font-['Lexend']">000</span> Dias
            </p>
          </div>
          <div>
            <p 
              className="text-sm font-['Lato'] mb-2 transition-colors duration-300"
              style={{ color: currentTheme.text.tertiary }}
            >
              Prazo Trimestral • 00/00/0000
            </p>
            <p 
              className="text-lg font-['Lato'] transition-colors duration-300"
              style={{ color: currentTheme.text.primary }}
            >
              Faltam <span className="text-3xl font-bold font-['Lexend']">00</span> Dias
            </p>
          </div>
        </div>
      </div>

      {/* Detalhamento por programa */}
      <div 
        className="rounded-3xl p-8 backdrop-blur-sm border transition-all duration-300"
        style={{
          backgroundColor: currentTheme.cardBg,
          borderColor: currentTheme.border,
          boxShadow: currentTheme.shadow
        }}
      >
        <h2 
          className="text-2xl font-['Lexend'] font-medium mb-2 transition-colors duration-300"
          style={{ color: currentTheme.text.primary }}
        >
          Detalhamento por programa
        </h2>
        <p 
          className="font-['Lato'] mb-6 transition-colors duration-300"
          style={{ color: currentTheme.text.tertiary }}
        >
          Saldos e gastos separados por custeio e capital
        </p>

        {/* Table Header */}
        <div 
          className="rounded-xl p-4 mb-4 transition-all duration-300"
          style={{ backgroundColor: isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(248, 250, 252, 0.8)' }}
        >
          <div className="grid grid-cols-6 gap-4 text-sm font-['Lato']" style={{ color: currentTheme.text.tertiary }}>
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
          <div 
            key={`programa-row-${item}`} 
            className="py-4 transition-all duration-300"
            style={{ borderBottom: `1px solid var(--Border-primary)` }}
          >
            <div className="grid grid-cols-6 gap-4 items-center">
              <div>
                <p 
                  className="font-['Lato'] font-medium transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  Nome do programa
                </p>
                <p 
                  className="text-sm font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  PDDE - Tipo
                </p>
              </div>
              <div className="col-span-2">
                <div className="flex gap-2">
                  <span 
                    className="border rounded-full px-3 py-1 text-sm font-['Lato'] transition-all duration-300"
                    style={{
                      backgroundColor: isDark ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.05)',
                      borderColor: '#10B981',
                      color: currentTheme.text.primary
                    }}
                  >
                    R$ 0.000,00
                  </span>
                  <span 
                    className="border rounded-full px-3 py-1 text-sm font-['Lato'] transition-all duration-300"
                    style={{
                      backgroundColor: isDark ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.05)',
                      borderColor: '#10B981',
                      color: currentTheme.text.primary
                    }}
                  >
                    R$ 0.000,00
                  </span>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex gap-2">
                  <span 
                    className="border rounded-full px-3 py-1 text-sm font-['Lato'] transition-all duration-300"
                    style={{
                      backgroundColor: isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)',
                      borderColor: '#EF4444',
                      color: currentTheme.text.primary
                    }}
                  >
                    R$ 0.000,00
                  </span>
                  <span 
                    className="border rounded-full px-3 py-1 text-sm font-['Lato'] transition-all duration-300"
                    style={{
                      backgroundColor: isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)',
                      borderColor: '#EF4444',
                      color: currentTheme.text.primary
                    }}
                  >
                    R$ 0.000,00
                  </span>
                </div>
              </div>
              <div className="text-center">
                <p 
                  className="font-['Lato'] font-semibold transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  R$ 0.000,00
                </p>
                <p 
                  className="text-xs font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  00,0% utilizado
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeuPainel;