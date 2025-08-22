import React, { useState } from "react";
import { FileText, Download, Upload, Search, Filter, FolderOpen } from "lucide-react";

const Documentos = () => {
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
      status: "completed"
    },
    {
      id: 2,
      name: "Prestação de Contas - Trimestre 4",
      type: "Excel",
      size: "1.8 MB",
      category: "prestacao",
      date: "10/01/2024",
      status: "pending"
    },
    {
      id: 3,
      name: "Análise Socioemocional - Escolas",
      type: "PDF",
      size: "4.2 MB",
      category: "analises",
      date: "08/01/2024",
      status: "completed"
    },
    {
      id: 4,
      name: "Orçamento Anual 2024",
      type: "Excel",
      size: "3.1 MB",
      category: "orcamento",
      date: "05/01/2024",
      status: "draft"
    },
    {
      id: 5,
      name: "Transparência Recursos Públicos",
      type: "PDF",
      size: "1.5 MB",
      category: "transparencia",
      date: "03/01/2024",
      status: "completed"
    }
  ];

  const categories = [
    { key: "todos", label: "Todos os Documentos", count: 5 },
    { key: "relatorios", label: "Relatórios", count: 1 },
    { key: "prestacao", label: "Prestação de Contas", count: 1 },
    { key: "analises", label: "Análises", count: 1 },
    { key: "orcamento", label: "Orçamento", count: 1 },
    { key: "transparencia", label: "Transparência", count: 1 }
  ];

  const getStatusStyle = (status) => {
    const styles = {
      completed: "bg-green-100 text-green-800 border-green-200",
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      draft: "bg-gray-100 text-gray-800 border-gray-200"
    };
    return styles[status] || styles.draft;
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
        <h1 className="text-3xl font-['Lexend'] font-medium text-[#0F172A] mb-2">
          Documentos
        </h1>
        <p className="text-[#64748B] font-['Lato']">
          Gerencie e acesse todos os seus documentos educacionais
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - Categories */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6">
            <h2 className="text-lg font-['Lato'] font-semibold text-[#0F172A] mb-4">
              Categorias
            </h2>
            
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`w-full text-left px-3 py-2 rounded-xl transition-all duration-200 ${
                    selectedCategory === category.key
                      ? "bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 text-[#08215D]"
                      : "hover:bg-blue-50 text-[#64748B]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-['Lato'] text-sm">{category.label}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.key
                        ? "bg-blue-200 text-[#08215D]"
                        : "bg-gray-100 text-[#64748B]"
                    }`}>
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Upload Button */}
            <button className="w-full mt-6 p-3 bg-gradient-to-r from-[#08215D] to-[#07C9FD] text-white rounded-xl font-['Lato'] font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
              <Upload size={20} />
              Fazer Upload
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search and Filter */}
          <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#64748B]" />
                <input
                  type="text"
                  placeholder="Buscar documentos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl font-['Lato'] focus:outline-none focus:ring-2 focus:ring-[#07C9FD] focus:border-transparent"
                />
              </div>
              <button className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl text-[#08215D] font-['Lato'] hover:bg-blue-100 transition-colors flex items-center gap-2">
                <Filter size={20} />
                Filtros
              </button>
            </div>
          </div>

          {/* Documents List */}
          <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6">
            <div className="flex items-center gap-2 mb-6">
              <FolderOpen className="text-[#08215D]" size={24} />
              <h2 className="text-xl font-['Lato'] font-semibold text-[#0F172A]">
                {selectedCategory === "todos" ? "Todos os Documentos" : 
                 categories.find(c => c.key === selectedCategory)?.label}
              </h2>
              <span className="text-sm text-[#64748B] font-['Lato']">
                ({filteredDocuments.length} {filteredDocuments.length === 1 ? 'documento' : 'documentos'})
              </span>
            </div>

            <div className="space-y-4">
              {filteredDocuments.map((doc) => (
                <div key={doc.id} className="border border-gray-100 rounded-xl p-4 hover:shadow-md hover:border-blue-200 transition-all duration-200 group">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">
                      {getFileIcon(doc.type)}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-['Lato'] font-semibold text-[#0F172A] group-hover:text-[#08215D] transition-colors">
                        {doc.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-[#64748B] font-['Lato'] mt-1">
                        <span>{doc.type} • {doc.size}</span>
                        <span>Modificado em {doc.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-['Lato'] font-medium border ${getStatusStyle(doc.status)}`}>
                        {getStatusLabel(doc.status)}
                      </span>
                      
                      <button className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#08215D] transition-colors">
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredDocuments.length === 0 && (
              <div className="text-center py-12">
                <FileText size={64} className="text-[#CBD5E1] mx-auto mb-4" />
                <h3 className="text-lg font-['Lato'] font-semibold text-[#64748B] mb-2">
                  Nenhum documento encontrado
                </h3>
                <p className="text-[#64748B] font-['Lato']">
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