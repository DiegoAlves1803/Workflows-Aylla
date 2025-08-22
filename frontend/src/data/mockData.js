export const mockData = {
  conversations: [
    {
      id: 1,
      title: "Relatório de gastos do FUNDEB",
      lastMessage: "Como posso ajudar com o relatório?",
      timestamp: "2024-01-15T10:30:00Z",
      messages: [
        {
          id: 1,
          type: "user",
          content: "Como estão os gastos do FUNDEB este mês?",
          timestamp: "2024-01-15T10:30:00Z"
        },
        {
          id: 2,
          type: "assistant",
          content: "Com base nos dados mais recentes, os gastos do FUNDEB representam 65% do orçamento aprovado para este período. O maior investimento está sendo direcionado para infraestrutura educacional e material didático.",
          timestamp: "2024-01-15T10:31:00Z"
        }
      ]
    },
    {
      id: 2,
      title: "Transparência em recursos públicos",
      lastMessage: "Vamos revisar os dados de transparência",
      timestamp: "2024-01-14T15:45:00Z",
      messages: []
    },
    {
      id: 3,
      title: "Prestação de contas ao INEP",
      lastMessage: "Documentos atualizados",
      timestamp: "2024-01-13T09:20:00Z",
      messages: []
    },
    {
      id: 4,
      title: "Panorama socioemocional dos alunos",
      lastMessage: "Análise completa disponível",
      timestamp: "2024-01-12T14:10:00Z",
      messages: []
    },
    {
      id: 5,
      title: "Resumo executivo da rede municipal",
      lastMessage: "Dados consolidados",
      timestamp: "2024-01-11T11:30:00Z",
      messages: []
    },
    {
      id: 6,
      title: "Projeções de evasão escolar",
      lastMessage: "Relatório finalizado",
      timestamp: "2024-01-10T16:25:00Z",
      messages: []
    }
  ],
  
  promptSuggestions: [
    "Solicito relatório sobre a situação financeira escolar",
    "Agendar reunião oficial com a Sra. Jean Gray - propostas 2025",
    "Requeiro relatório de transparência dos recursos públicos",
    "Consultar status da prestação de contas trimestral"
  ],
  
  user: {
    name: "Sr. Oriovaldo",
    initials: "SO",
    avatar: null,
    role: "Secretário de Educação",
    municipality: "Município de Oriovaldo"
  },
  
  currentChat: {
    sessionId: "session-" + Date.now(),
    messages: [],
    isActive: false
  },

  // Dados financeiros mock para o painel
  financialData: {
    totalBudget: 50000000, // R$ 50.000.000,00
    usedBudget: 32500000,  // R$ 32.500.000,00 (65%)
    availableBudget: 17500000, // R$ 17.500.000,00 (35%)
    
    expenses: {
      custeio: 20000000,   // R$ 20.000.000,00
      capital: 12500000    // R$ 12.500.000,00
    },
    
    available: {
      custeio: 10000000,   // R$ 10.000.000,00
      capital: 7500000     // R$ 7.500.000,00
    },

    deadlines: {
      annual: {
        date: "31/12/2024",
        daysLeft: 315
      },
      quarterly: {
        date: "31/03/2024", 
        daysLeft: 75
      }
    }
  },

  // Programas educacionais
  programs: [
    {
      id: 1,
      name: "PDDE - Básico",
      type: "PDDE - Tipo",
      saldoCusteio: 2500000,
      saldoCapital: 1500000,
      gastosCusteio: 1000000,
      gastosCapital: 800000,
      totalPrograma: 4000000,
      percentualUtilizado: 45
    },
    {
      id: 2,
      name: "PDDE - Integral",
      type: "PDDE - Tipo", 
      saldoCusteio: 3000000,
      saldoCapital: 2000000,
      gastosCusteio: 1500000,
      gastosCapital: 1200000,
      totalPrograma: 5000000,
      percentualUtilizado: 54
    },
    {
      id: 3,
      name: "FUNDEB - Infraestrutura",
      type: "PDDE - Tipo",
      saldoCusteio: 5000000,
      saldoCapital: 8000000,
      gastosCusteio: 3500000,
      gastosCapital: 4500000,
      totalPrograma: 13000000,
      percentualUtilizado: 61.5
    }
  ]
};