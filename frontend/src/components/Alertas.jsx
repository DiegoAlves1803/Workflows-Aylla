import React, { useState } from "react";
import { AlertTriangle, FileText, Copy, School, Filter, ChevronDown, Clock } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Alertas = () => {
  const { isDark, colors } = useTheme();
  const currentTheme = isDark ? colors.dark : colors.light;
  
  const [filters, setFilters] = useState({
    categoria: "todas",
    documentacao: "todas", 
    duplicatas: "todas",
    escola: "todas"
  });

  const alertStats = [
    {
      title: "Total de Alertas",
      value: "9.999",
      icon: FileText,
      color: "#3B82F6",
      bgColor: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'
    },
    {
      title: "Urgentes", 
      value: "9.999",
      icon: AlertTriangle,
      color: "#EF4444",
      bgColor: isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)'
    },
    {
      title: "Sem Documentos",
      value: "9.999", 
      icon: FileText,
      color: "#F59E0B",
      bgColor: isDark ? 'rgba(245, 158, 11, 0.1)' : 'rgba(245, 158, 11, 0.05)'
    },
    {
      title: "Duplicados",
      value: "9.999",
      icon: Copy,
      color: "#8B5CF6", 
      bgColor: isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.05)'
    }
  ];

  const alertItems = [
    {
      id: 1,
      coordenadoria: "1a Coordenadoria Regional de Educação",
      codigo: "000000",
      municipio: "Marechal Mascarenhas de Moraes",
      gastoMedio: "R$999.999,99",
      situacao: {
        prestacao: { status: "Vencido", prazo: "07/06/2025", dias: 39 },
        documentacao: { status: "Sem Docs", descricao: "Prestação sem comprovação documental" },
        duplicada: { status: "Duplicada", registros: 4, ids: "85, 86, 87, 88" }
      },
      fornecedor: "DIGIOUT TECNOLOGIAS LTDA",
      documento: "123456789-0", 
      programa: "Programa Básico",
      valor: "R$ 600,00",
      finalidade: "Roteador Access Point",
      pagamento: "19/06/2025"
    },
    {
      id: 2,
      coordenadoria: "1a Coordenadoria Regional de Educação", 
      codigo: "000000",
      municipio: "Marechal Mascarenhas de Moraes",
      gastoMedio: "R$999.999,99",
      situacao: {
        prestacao: { status: "Vencido", prazo: "07/06/2025", dias: 39 },
        documentacao: { status: "Sem Docs", descricao: "Prestação sem comprovação documental" },
        duplicada: { status: "Duplicada", registros: 4, ids: "85, 86, 87, 88" }
      },
      fornecedor: "DIGIOUT TECNOLOGIAS LTDA",
      documento: "123456789-0",
      programa: "Programa Básico", 
      valor: "R$ 600,00",
      finalidade: "Roteador Access Point",
      pagamento: "19/06/2025"
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      "Vencido": "#EF4444",
      "Sem Docs": "#F59E0B", 
      "Duplicada": "#8B5CF6"
    };
    return colors[status] || "#6B7280";
  };

  return (
    <div className="pt-32 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 
            className="text-3xl font-['Lexend'] font-medium mb-2 transition-colors duration-300"
            style={{ color: currentTheme.text.primary }}
          >
            Alertas
          </h1>
          <p 
            className="font-['Lato'] transition-colors duration-300 flex items-center gap-2"
            style={{ color: currentTheme.text.tertiary }}
          >
            <Clock size={16} />
            Atualizado em 00/00/0000, 00h00
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {alertStats.map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: stat.bgColor,
              borderColor: stat.color + '40'
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ 
                  backgroundColor: stat.color + '20',
                  color: stat.color 
                }}
              >
                <stat.icon size={24} />
              </div>
              <div className="text-right">
                <p 
                  className="text-2xl font-bold font-['Lexend']"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
              </div>
            </div>
            <h3 
              className="font-['Lato'] font-medium"
              style={{ color: currentTheme.text.primary }}
            >
              {stat.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div 
        className="rounded-2xl p-6 mb-8 border transition-all duration-300"
        style={{
          backgroundColor: currentTheme.cardBg,
          borderColor: currentTheme.border,
          boxShadow: currentTheme.shadow
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Filter style={{ color: 'var(--Brand-primary)' }} size={20} />
          <h2 
            className="text-lg font-['Lato'] font-semibold transition-colors duration-300"
            style={{ color: currentTheme.text.primary }}
          >
            Filtros
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Categoria */}
          <div>
            <label 
              className="block text-sm font-['Lato'] font-medium mb-2 transition-colors duration-300"
              style={{ color: currentTheme.text.secondary }}
            >
              Categoria
            </label>
            <div className="relative">
              <select 
                value={filters.categoria}
                onChange={(e) => setFilters({...filters, categoria: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border font-['Lato'] appearance-none transition-colors duration-200 bg-transparent"
                style={{
                  borderColor: currentTheme.border,
                  color: currentTheme.text.primary
                }}
              >
                <option value="todas">Todas as categorias</option>
                <option value="urgentes">Urgentes</option>
                <option value="documentacao">Documentação</option>
              </select>
              <ChevronDown size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" style={{ color: currentTheme.text.tertiary }} />
            </div>
          </div>

          {/* Documentação */}
          <div>
            <label 
              className="block text-sm font-['Lato'] font-medium mb-2 transition-colors duration-300"
              style={{ color: currentTheme.text.secondary }}
            >
              Documentação
            </label>
            <div className="relative">
              <select 
                value={filters.documentacao}
                onChange={(e) => setFilters({...filters, documentacao: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border font-['Lato'] appearance-none transition-colors duration-200 bg-transparent"
                style={{
                  borderColor: currentTheme.border,
                  color: currentTheme.text.primary
                }}
              >
                <option value="todas">Todas</option>
                <option value="completa">Completa</option>
                <option value="pendente">Pendente</option>
              </select>
              <ChevronDown size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" style={{ color: currentTheme.text.tertiary }} />
            </div>
          </div>

          {/* Duplicatas */}
          <div>
            <label 
              className="block text-sm font-['Lato'] font-medium mb-2 transition-colors duration-300"
              style={{ color: currentTheme.text.secondary }}
            >
              Duplicatas
            </label>
            <div className="relative">
              <select 
                value={filters.duplicatas}
                onChange={(e) => setFilters({...filters, duplicatas: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border font-['Lato'] appearance-none transition-colors duration-200 bg-transparent"
                style={{
                  borderColor: currentTheme.border,
                  color: currentTheme.text.primary
                }}
              >
                <option value="todas">Todas</option>
                <option value="sim">Com duplicatas</option>
                <option value="nao">Sem duplicatas</option>
              </select>
              <ChevronDown size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" style={{ color: currentTheme.text.tertiary }} />
            </div>
          </div>

          {/* Escola */}
          <div>
            <label 
              className="block text-sm font-['Lato'] font-medium mb-2 transition-colors duration-300"
              style={{ color: currentTheme.text.secondary }}
            >
              Escola
            </label>
            <div className="relative">
              <select 
                value={filters.escola}
                onChange={(e) => setFilters({...filters, escola: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border font-['Lato'] appearance-none transition-colors duration-200 bg-transparent"
                style={{
                  borderColor: currentTheme.border,
                  color: currentTheme.text.primary
                }}
              >
                <option value="todas">Todas as escolas</option>
                <option value="municipais">Escolas Municipais</option>
                <option value="estaduais">Escolas Estaduais</option>
              </select>
              <ChevronDown size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" style={{ color: currentTheme.text.tertiary }} />
            </div>
          </div>
        </div>
      </div>

      {/* Alert Items */}
      <div className="space-y-6">
        {alertItems.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl p-6 border transition-all duration-300"
            style={{
              backgroundColor: currentTheme.cardBg,
              borderColor: currentTheme.border,
              boxShadow: currentTheme.shadow
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b" style={{ borderColor: currentTheme.border }}>
              <div className="flex items-center gap-4">
                <School style={{ color: 'var(--Brand-primary)' }} size={24} />
                <div>
                  <h3 
                    className="font-['Lato'] font-semibold transition-colors duration-300"
                    style={{ color: currentTheme.text.primary }}
                  >
                    {item.coordenadoria} • Código: {item.codigo}
                  </h3>
                  <p 
                    className="text-sm font-['Lato'] transition-colors duration-300"
                    style={{ color: currentTheme.text.tertiary }}
                  >
                    EM {item.municipio}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p 
                  className="text-sm font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Gasto Médio Mensal
                </p>
                <p 
                  className="text-xl font-bold font-['Lexend'] transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  {item.gastoMedio}
                </p>
              </div>
            </div>

            {/* Situation Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Prestação de contas */}
              <div 
                className="p-4 rounded-xl border-l-4"
                style={{ 
                  backgroundColor: isDark ? 'rgba(239, 68, 68, 0.05)' : 'rgba(239, 68, 68, 0.02)',
                  borderLeftColor: '#EF4444'
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 
                    className="font-['Lato'] font-medium transition-colors duration-300"
                    style={{ color: currentTheme.text.primary }}
                  >
                    Prestação de contas
                  </h4>
                  <span 
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{ 
                      backgroundColor: '#FEE2E2',
                      color: '#DC2626'
                    }}
                  >
                    {item.situacao.prestacao.status}
                  </span>
                </div>
                <p 
                  className="text-sm font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.secondary }}
                >
                  {item.situacao.prestacao.prazo}
                </p>
                <p 
                  className="text-xs font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  (Vencido há {item.situacao.prestacao.dias} dias)
                </p>
              </div>

              {/* Documentação */}
              <div 
                className="p-4 rounded-xl border-l-4"
                style={{ 
                  backgroundColor: isDark ? 'rgba(245, 158, 11, 0.05)' : 'rgba(245, 158, 11, 0.02)',
                  borderLeftColor: '#F59E0B'
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 
                    className="font-['Lato'] font-medium transition-colors duration-300"
                    style={{ color: currentTheme.text.primary }}
                  >
                    Documentação
                  </h4>
                  <span 
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{ 
                      backgroundColor: '#FEF3C7',
                      color: '#D97706'
                    }}
                  >
                    {item.situacao.documentacao.status}
                  </span>
                </div>
                <p 
                  className="text-sm font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.secondary }}
                >
                  {item.situacao.documentacao.descricao}
                </p>
              </div>

              {/* Duplicada */}
              <div 
                className="p-4 rounded-xl border-l-4"
                style={{ 
                  backgroundColor: isDark ? 'rgba(139, 92, 246, 0.05)' : 'rgba(139, 92, 246, 0.02)',
                  borderLeftColor: '#8B5CF6'
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 
                    className="font-['Lato'] font-medium transition-colors duration-300"
                    style={{ color: currentTheme.text.primary }}
                  >
                    Duplicada
                  </h4>
                  <span 
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{ 
                      backgroundColor: '#EDE9FE',
                      color: '#7C3AED'
                    }}
                  >
                    {item.situacao.duplicada.status}
                  </span>
                </div>
                <p 
                  className="text-sm font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.secondary }}
                >
                  {item.situacao.duplicada.registros} registros
                </p>
                <p 
                  className="text-xs font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  IDs: {item.situacao.duplicada.ids}
                </p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p 
                  className="text-sm font-['Lato'] font-medium mb-1 transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Fornecedor
                </p>
                <p 
                  className="font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  {item.fornecedor}
                </p>
              </div>

              <div>
                <p 
                  className="text-sm font-['Lato'] font-medium mb-1 transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Documento
                </p>
                <p 
                  className="font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  {item.documento}
                </p>
              </div>

              <div>
                <p 
                  className="text-sm font-['Lato'] font-medium mb-1 transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Programa
                </p>
                <p 
                  className="font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  {item.programa}
                </p>
              </div>

              <div>
                <p 
                  className="text-sm font-['Lato'] font-medium mb-1 transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Valor total
                </p>
                <p 
                  className="font-['Lato'] font-semibold transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  {item.valor}
                </p>
              </div>

              <div>
                <p 
                  className="text-sm font-['Lato'] font-medium mb-1 transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Finalidade
                </p>
                <p 
                  className="font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  {item.finalidade}
                </p>
              </div>

              <div>
                <p 
                  className="text-sm font-['Lato'] font-medium mb-1 transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Pago em
                </p>
                <p 
                  className="font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.primary }}
                >
                  {item.pagamento}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alertas;