import React, { useState } from "react";
import { FileText, Download, Upload, Search, Filter, FolderOpen, Eye, Trash2 } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Documentos = () => {
  const { isDark, colors } = useTheme();
  const currentTheme = isDark ? colors.dark : colors.light;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const documentos = [
    {
      id: 1,
      name: "Relatório FUNDEB - Janeiro 2024",
      type: "PDF",
      size: "2.3 MB",
      category: "relatorios",
      date: "15/01/2024",
      status: "completed",
      description: "Relatório mensal do FUNDEB com detalhamento de recursos e execução"
    },
    {
      id: 2,
      name: "Prestação de Contas PDDE - Trimestre 4",
      type: "Excel",
      size: "1.8 MB",
      category: "prestacao",
      date: "10/01/2024",
      status: "pending",
      description: "Prestação de contas trimestral do Programa Dinheiro Direto na Escola"
    },
    {
      id: 3,
      name: "Análise Socioemocional - Escolas Municipais",
      type: "PDF",
      size: "4.2 MB",
      category: "analises",
      date: "08/01/2024",
      status: "completed",
      description: "Estudo sobre desenvolvimento socioemocional dos estudantes"
    },
    {
      id: 4,
      name: "Orçamento Anual 2024 - Secretaria de Educação",
      type: "Excel",
      size: "3.1 MB",
      category: "orcamento",
      date: "05/01/2024",
      status: "draft",
      description: "Planejamento orçamentário anual para a educação municipal"
    },
    {
      id: 5,
      name: "Portal da Transparência - Recursos Educacionais",
      type: "PDF",
      size: "1.5 MB",
      category: "transparencia",
      date: "03/01/2024",
      status: "completed",
      description: "Demonstrativo de transparência dos recursos públicos educacionais"
    },
    {
      id: 6,
      name: "IDEB - Resultado das Escolas 2023",
      type: "PDF",
      size: "2.1 MB",
      category: "relatorios",
      date: "28/12/2023",
      status: "completed",
      description: "Índice de Desenvolvimento da Educação Básica das escolas municipais"
    }
  ];

  const categories = [
    { key: "todos", label: "Todos os Documentos", count: 6, icon: "📄" },
    { key: "relatorios", label: "Relatórios", count: 2, icon: "📊" },
    { key: "prestacao", label: "Prestação de Contas", count: 1, icon: "💰" },
    { key: "analises", label: "Análises", count: 1, icon: "📈" },
    { key: "orcamento", label: "Orçamento", count: 1, icon: "💼" },
    { key: "transparencia", label: "Transparência", count: 1, icon: "🔍" }
  ];

  const getStatusStyle = (status) => {
    if (status === "completed") {
      return {
        backgroundColor: isDark ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.1)',
        borderColor: '#22C55E',
        color: isDark ? '#4ADE80' : '#16A34A'
      };
    } else if (status === "pending") {
      return {
        backgroundColor: isDark ? 'rgba(251, 191, 36, 0.2)' : 'rgba(251, 191, 36, 0.1)',
        borderColor: '#FBBF24',
        color: isDark ? '#FCD34D' : '#D97706'
      };
    } else {
      return {
        backgroundColor: isDark ? 'rgba(156, 163, 175, 0.2)' : 'rgba(156, 163, 175, 0.1)',
        borderColor: '#9CA3AF',
        color: isDark ? '#D1D5DB' : '#6B7280'
      };
    }
  };

  const getStatusLabel = (status) => {
    const labels = {
      completed: "Concluído",
      pending: "Pendente",
      draft: "Rascunho"
    };
    return labels[status] || "Desconhecido";
  };

  const getFileIcon = (type) => {
    return type === "PDF" ? "🗂️" : type === "Excel" ? "📊" : "📄";
  };

  const filteredDocuments = documentos.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "todos" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 
          className="text-3xl font-['Lexend'] font-medium mb-2 transition-colors duration-300"
          style={{ color: currentTheme.text.primary }}
        >
          Documentos
        </h1>
        <p 
          className="font-['Lato'] transition-colors duration-300"
          style={{ color: currentTheme.text.tertiary }}
        >
          Gerencie e acesse todos os seus documentos educacionais do Senhor Secretário
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - Categories */}
        <div className="lg:col-span-1">
          <div 
            className="rounded-3xl p-6 backdrop-blur-sm border transition-all duration-300"
            style={{
              backgroundColor: currentTheme.cardBg,
              borderColor: currentTheme.border,
              boxShadow: currentTheme.shadow
            }}
          >
            <h2 
              className="text-lg font-['Lato'] font-semibold mb-4 transition-colors duration-300"
              style={{ color: currentTheme.text.primary }}
            >
              Categorias
            </h2>
            
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 border ${
                    selectedCategory === category.key
                      ? 'border-[var(--Brand-primary)]'
                      : 'border-transparent hover:border-[var(--Border-primary)]'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category.key 
                      ? (isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(8, 33, 93, 0.05)')
                      : 'transparent'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{category.icon}</span>
                      <span 
                        className="font-['Lato'] text-sm transition-colors duration-300"
                        style={{ 
                          color: selectedCategory === category.key 
                            ? 'var(--Brand-primary)' 
                            : currentTheme.text.secondary 
                        }}
                      >
                        {category.label}
                      </span>
                    </div>
                    <span 
                      className="text-xs px-2 py-1 rounded-full border"
                      style={{
                        backgroundColor: selectedCategory === category.key
                          ? 'var(--Brand-primary)'
                          : (isDark ? 'rgba(156, 163, 175, 0.2)' : 'rgba(156, 163, 175, 0.1)'),
                        borderColor: selectedCategory === category.key
                          ? 'var(--Brand-primary)'
                          : currentTheme.border,
                        color: selectedCategory === category.key
                          ? 'white'
                          : currentTheme.text.tertiary
                      }}
                    >
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Upload Button */}
            <button 
              className="w-full mt-6 p-3 rounded-xl font-['Lato'] font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 text-white"
              style={{
                background: `linear-gradient(135deg, var(--Brand-primary) 0%, var(--Brand-secondary) 100%)`
              }}
            >
              <Upload size={20} />
              Fazer Upload
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search and Filter */}
          <div 
            className="rounded-3xl p-6 mb-6 backdrop-blur-sm border transition-all duration-300"
            style={{
              backgroundColor: currentTheme.cardBg,
              borderColor: currentTheme.border,
              boxShadow: currentTheme.shadow
            }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search 
                  size={20} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  style={{ color: currentTheme.text.tertiary }}
                />
                <input
                  type="text"
                  placeholder="Buscar documentos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-xl font-['Lato'] transition-all duration-200 bg-transparent outline-none"
                  style={{
                    borderColor: currentTheme.border,
                    color: currentTheme.text.primary,
                    backgroundColor: 'transparent'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--Brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = currentTheme.border}
                />
              </div>
              <button 
                className="px-4 py-3 border rounded-xl font-['Lato'] transition-all duration-200 hover:shadow-md flex items-center gap-2"
                style={{
                  backgroundColor: isDark ? 'rgba(7, 201, 253, 0.1)' : 'rgba(8, 33, 93, 0.05)',
                  borderColor: currentTheme.border,
                  color: currentTheme.text.primary
                }}
              >
                <Filter size={20} />
                Filtros
              </button>
            </div>
          </div>

          {/* Documents List */}
          <div 
            className="rounded-3xl p-6 backdrop-blur-sm border transition-all duration-300"
            style={{
              backgroundColor: currentTheme.cardBg,
              borderColor: currentTheme.border,
              boxShadow: currentTheme.shadow
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <FolderOpen style={{ color: 'var(--Brand-primary)' }} size={24} />
              <h2 
                className="text-xl font-['Lato'] font-semibold transition-colors duration-300"
                style={{ color: currentTheme.text.primary }}
              >
                {selectedCategory === "todos" ? "Todos os Documentos" : 
                 categories.find(c => c.key === selectedCategory)?.label}
              </h2>
              <span 
                className="text-sm font-['Lato'] transition-colors duration-300"
                style={{ color: currentTheme.text.tertiary }}
              >
                ({filteredDocuments.length} {filteredDocuments.length === 1 ? 'documento' : 'documentos'})
              </span>
            </div>

            <div className="space-y-4">
              {filteredDocuments.map((doc) => (
                <div 
                  key={doc.id} 
                  className="border rounded-xl p-4 transition-all duration-200 group hover:shadow-md hover:scale-[1.02]"
                  style={{
                    borderColor: currentTheme.border,
                    backgroundColor: isDark ? 'rgba(30, 41, 59, 0.3)' : 'rgba(248, 250, 252, 0.5)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--Brand-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = currentTheme.border}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl mt-1">
                      {getFileIcon(doc.type)}
                    </div>
                    
                    <div className="flex-1">
                      <h3 
                        className="font-['Lato'] font-semibold transition-colors duration-200 mb-1"
                        style={{ 
                          color: currentTheme.text.primary
                        }}
                      >
                        {doc.name}
                      </h3>
                      <p 
                        className="text-sm font-['Lato'] mb-2 transition-colors duration-300"
                        style={{ color: currentTheme.text.tertiary }}
                      >
                        {doc.description}
                      </p>
                      <div 
                        className="flex items-center gap-4 text-xs font-['Lato'] transition-colors duration-300"
                        style={{ color: currentTheme.text.tertiary }}
                      >
                        <span>{doc.type} • {doc.size}</span>
                        <span>Modificado em {doc.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-['Lato'] font-medium border"
                        style={getStatusStyle(doc.status)}
                      >
                        {getStatusLabel(doc.status)}
                      </span>
                      
                      <div className="flex gap-1">
                        <button 
                          className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                          style={{
                            backgroundColor: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
                            color: '#3B82F6'
                          }}
                          title="Visualizar documento"
                        >
                          <Eye size={16} />
                        </button>
                        <button 
                          className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                          style={{
                            backgroundColor: isDark ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.05)',
                            color: '#22C55E'
                          }}
                          title="Fazer download"
                        >
                          <Download size={16} />
                        </button>
                        <button 
                          className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                          style={{
                            backgroundColor: isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)',
                            color: '#EF4444'
                          }}
                          title="Excluir documento"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredDocuments.length === 0 && (
              <div className="text-center py-12">
                <FileText 
                  size={64} 
                  className="mx-auto mb-4 transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                />
                <h3 
                  className="text-lg font-['Lato'] font-semibold mb-2 transition-colors duration-300"
                  style={{ color: currentTheme.text.secondary }}
                >
                  Nenhum documento encontrado
                </h3>
                <p 
                  className="font-['Lato'] transition-colors duration-300"
                  style={{ color: currentTheme.text.tertiary }}
                >
                  Tente ajustar os filtros ou fazer upload de novos documentos.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentos;