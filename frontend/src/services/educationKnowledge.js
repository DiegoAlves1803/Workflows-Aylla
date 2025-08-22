// Base de Conhecimento Educacional da Aylla
export class EducationKnowledge {
  constructor() {
    this.knowledgeBase = {
      // PDDE - Programa Dinheiro Direto na Escola
      pdde: {
        keywords: ['pdde', 'dinheiro direto', 'programa dinheiro', 'recursos escola', 'fundos escola'],
        responses: [
          {
            question: "O que é o PDDE?",
            answer: "O PDDE (Programa Dinheiro Direto na Escola) é um programa do FNDE que fornece recursos financeiros diretamente às escolas públicas de educação básica. O objetivo é melhorar a infraestrutura física e pedagógica das escolas e reforçar a autogestão escolar nos planos financeiro, administrativo e didático."
          },
          {
            question: "Como funciona o PDDE?",
            answer: "Os recursos do PDDE são transferidos uma vez por ano, em parcela única, diretamente para as escolas. O valor varia conforme o número de alunos matriculados no Censo Escolar. As escolas com mais de 99 alunos precisam ter Unidade Executora Própria (UEx) para receber os recursos."
          },
          {
            question: "Valores do PDDE",
            answer: "Os valores do PDDE 2024 variam por número de alunos:\n• Até 99 alunos: R$ 1.000\n• 100 a 499 alunos: R$ 4.000\n• 500 a 999 alunos: R$ 7.000\n• Acima de 1.000 alunos: R$ 10.000\nOs valores são divididos entre custeio (80%) e capital (20%)."
          }
        ]
      },

      // FUNDEB - Fundo de Desenvolvimento da Educação Básica
      fundeb: {
        keywords: ['fundeb', 'fundo educação', 'desenvolvimento educação básica', 'recursos educacionais'],
        responses: [
          {
            question: "O que é o FUNDEB?",
            answer: "O FUNDEB (Fundo de Manutenção e Desenvolvimento da Educação Básica) é o principal mecanismo de financiamento da educação básica pública no Brasil. É constituído por recursos dos estados, Distrito Federal, municípios e União, e destina-se ao financiamento de ações de manutenção e desenvolvimento da educação básica pública."
          },
          {
            question: "Como são distribuídos os recursos do FUNDEB?",
            answer: "Os recursos do FUNDEB são distribuídos com base no número de alunos matriculados na educação básica pública, conforme o Censo Escolar do ano anterior. Cada rede de ensino recebe recursos proporcionais ao número de matrículas ponderadas pelos fatores de diferenciação estabelecidos para cada etapa e modalidade de ensino."
          },
          {
            question: "Prestação de contas do FUNDEB",
            answer: "A prestação de contas do FUNDEB deve ser feita anualmente pelos gestores municipais e estaduais. Inclui relatório de aplicação dos recursos, demonstrativo de receitas e despesas, e comprovação de que pelo menos 70% dos recursos foram aplicados no pagamento de profissionais do magistério."
          }
        ]
      },

      // Gestão Educacional
      gestao: {
        keywords: ['gestão escolar', 'administração escola', 'diretor', 'coordenação pedagógica', 'planejamento'],
        responses: [
          {
            question: "Princípios da gestão democrática",
            answer: "A gestão democrática da educação pública se baseia em:\n• Participação da comunidade escolar nas decisões\n• Transparência nos processos e prestação de contas\n• Autonomia pedagógica, administrativa e financeira\n• Colegialidade nas decisões\n• Eleição direta para diretores (quando aplicável)\n• Funcionamento do Conselho Escolar"
          },
          {
            question: "Projeto Político Pedagógico (PPP)",
            answer: "O PPP é o documento que define a identidade da escola e indica caminhos para ensinar com qualidade. Deve conter:\n• Missão, visão e valores da escola\n• Diagnóstico da realidade escolar\n• Objetivos e metas educacionais\n• Proposta pedagógica e curricular\n• Planos de ação e avaliação\n• Participação de toda a comunidade escolar"
          }
        ]
      },

      // Pedagogia e Metodologias
      pedagogia: {
        keywords: ['metodologia', 'didática', 'ensino aprendizagem', 'pedagogia', 'curriculo'],
        responses: [
          {
            question: "Metodologias ativas de aprendizagem",
            answer: "As metodologias ativas colocam o aluno como protagonista do seu aprendizado:\n• Aprendizagem baseada em problemas (ABP)\n• Sala de aula invertida\n• Gamificação\n• Ensino híbrido\n• Aprendizagem colaborativa\n• Metodologia de projetos\nEstas abordagens desenvolvem autonomia, pensamento crítico e habilidades do século XXI."
          },
          {
            question: "Base Nacional Comum Curricular (BNCC)",
            answer: "A BNCC define o conjunto de aprendizagens essenciais que todos os alunos devem desenvolver ao longo da Educação Básica. Está organizada por:\n• Competências gerais (10 competências)\n• Áreas do conhecimento\n• Componentes curriculares\n• Objetos de conhecimento\n• Habilidades específicas por ano/série"
          }
        ]
      },

      // Avaliação e Indicadores
      avaliacao: {
        keywords: ['avaliação', 'saeb', 'ideb', 'prova brasil', 'indicadores educacionais'],
        responses: [
          {
            question: "Sistema de Avaliação da Educação Básica (SAEB)",
            answer: "O SAEB é composto por um conjunto de avaliações externas que permite ao INEP realizar um diagnóstico da educação básica brasileira. Inclui:\n• ANEB (Avaliação Nacional da Educação Básica)\n• ANRESC/Prova Brasil (para escolas e municípios)\n• ANA (Avaliação Nacional da Alfabetização)\nAvalia competências em Língua Portuguesa e Matemática."
          },
          {
            question: "Índice de Desenvolvimento da Educação Básica (IDEB)",
            answer: "O IDEB é um indicador que combina:\n• Desempenho dos alunos em avaliações (SAEB)\n• Taxa de aprovação escolar\nVaria de 0 a 10 e permite acompanhar a evolução da qualidade da educação. A meta nacional é atingir IDEB 6,0 até 2021, equivalente aos países desenvolvidos."
          }
        ]
      },

      // Inclusão e Diversidade
      inclusao: {
        keywords: ['inclusão', 'educação especial', 'diversidade', 'acessibilidade', 'aee'],
        responses: [
          {
            question: "Educação Inclusiva",
            answer: "A educação inclusiva garante o direito de todos à educação, assegurando:\n• Acesso, permanência e aprendizagem de todos os alunos\n• Atendimento Educacional Especializado (AEE)\n• Adaptações curriculares quando necessário\n• Formação de professores para a diversidade\n• Recursos de tecnologia assistiva\n• Eliminação de barreiras arquitetônicas e pedagógicas"
          },
          {
            question: "Atendimento Educacional Especializado (AEE)",
            answer: "O AEE é um serviço da educação especial que:\n• Complementa ou suplementa a escolarização\n• Oferece recursos e estratégias específicas\n• Funciona preferencialmente nas Salas de Recursos Multifuncionais\n• Atende alunos com deficiência, transtornos globais do desenvolvimento e altas habilidades/superdotação\n• É realizado no contraturno escolar"
          }
        ]
      }
    };

    this.commonQuestions = [
      {
        patterns: ['como está', 'situação', 'gastos', 'escola', 'financeiro'],
        response: "Para consultar a situação financeira da escola, posso ajudar com informações sobre:\n• Saldos do PDDE e FUNDEB\n• Prestação de contas\n• Relatórios de gastos\n• Planejamento orçamentário\n\nSobre qual aspecto específico você gostaria de saber?"
      },
      {
        patterns: ['reunião', 'agendar', 'encontro'],
        response: "Posso auxiliar no agendamento de reuniões educacionais. As reuniões mais comuns incluem:\n• Conselho de Escola\n• Reuniões pedagógicas\n• Prestação de contas\n• Planejamento estratégico\n\nQual tipo de reunião você precisa agendar?"
      },
      {
        patterns: ['relatório', 'transparência', 'dados'],
        response: "Posso ajudar com diversos tipos de relatórios educacionais:\n• Relatórios financeiros (PDDE, FUNDEB)\n• Indicadores educacionais (IDEB, frequência)\n• Relatórios pedagógicos\n• Dados de transparência pública\n\nQue tipo de relatório você necessita?"
      }
    ];
  }

  findResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Busca por categoria específica
    for (const [category, data] of Object.entries(this.knowledgeBase)) {
      for (const keyword of data.keywords) {
        if (message.includes(keyword.toLowerCase())) {
          const responses = data.responses;
          return responses[Math.floor(Math.random() * responses.length)].answer;
        }
      }
    }

    // Busca por perguntas comuns
    for (const common of this.commonQuestions) {
      for (const pattern of common.patterns) {
        if (message.includes(pattern.toLowerCase())) {
          return common.response;
        }
      }
    }

    // Resposta padrão educacional
    return this.getDefaultEducationalResponse(message);
  }

  getDefaultEducationalResponse(message) {
    const responses = [
      "Como assistente educacional, posso ajudar com informações sobre PDDE, FUNDEB, gestão escolar, metodologias pedagógicas e muito mais. Pode me fazer uma pergunta mais específica?",
      "Estou aqui para auxiliar com questões educacionais. Posso fornecer informações sobre programas governamentais, gestão escolar, avaliações e práticas pedagógicas. Em que posso ajudar?",
      "Sou especializada em educação básica brasileira. Posso esclarecer dúvidas sobre financiamento educacional, gestão democrática, BNCC, inclusão e outros temas. Qual sua dúvida?",
      "Como posso colaborar com sua gestão educacional? Tenho conhecimentos sobre PDDE, FUNDEB, indicadores educacionais, metodologias de ensino e legislação educacional."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }

  getTopics() {
    return [
      "📚 PDDE - Programa Dinheiro Direto na Escola",
      "💰 FUNDEB - Financiamento da Educação Básica", 
      "🏫 Gestão Escolar Democrática",
      "🎯 Metodologias Pedagógicas",
      "📊 Avaliação e Indicadores (SAEB, IDEB)",
      "♿ Educação Inclusiva e AEE",
      "📋 Prestação de Contas",
      "📖 Base Nacional Comum Curricular"
    ];
  }
}