// Base de Conhecimento Educacional da Aylla - Português Brasileiro
export class EducationKnowledge {
  constructor() {
    this.knowledgeBase = {
      // PDDE - Programa Dinheiro Direto na Escola
      pdde: {
        keywords: ['pdde', 'dinheiro direto', 'programa dinheiro', 'recursos escola', 'fundos escola'],
        responses: [
          {
            question: "O que é o PDDE?",
            answer: "O PDDE (Programa Dinheiro Direto na Escola) é um programa do governo federal que repassa recursos financeiros diretamente para as escolas públicas. O objetivo é melhorar a infraestrutura das escolas e dar mais autonomia para os gestores escolares cuidarem das necessidades da escola."
          },
          {
            question: "Como funciona o PDDE?",
            answer: "Os recursos do PDDE são enviados uma vez por ano para as escolas. O valor varia conforme o número de alunos matriculados. Escolas com mais de 99 alunos precisam ter uma Unidade Executora Própria para receber os recursos. O dinheiro pode ser usado para manutenção, material escolar e pequenos reparos."
          },
          {
            question: "Valores do PDDE",
            answer: "Os valores do PDDE para 2024 são:\n• Até 99 alunos: R$ 1.000\n• De 100 a 499 alunos: R$ 4.000\n• De 500 a 999 alunos: R$ 7.000\n• Mais de 1.000 alunos: R$ 10.000\n\nDesses valores, 80% é para custeio (material, manutenção) e 20% para capital (equipamentos permanentes)."
          }
        ]
      },

      // FUNDEB - Fundo de Desenvolvimento da Educação Básica
      fundeb: {
        keywords: ['fundeb', 'fundo educação', 'desenvolvimento educação básica', 'recursos educacionais'],
        responses: [
          {
            question: "O que é o FUNDEB?",
            answer: "O FUNDEB é o principal fundo que financia a educação básica pública no Brasil. Ele recebe recursos dos estados, municípios e da União, e distribui esse dinheiro conforme o número de alunos matriculados em cada rede de ensino."
          },
          {
            question: "Como são distribuídos os recursos do FUNDEB?",
            answer: "Os recursos do FUNDEB são distribuídos baseados no número de alunos matriculados na educação básica pública. Cada etapa de ensino tem um valor diferente - por exemplo, ensino médio recebe mais por aluno que o fundamental. Pelo menos 70% dos recursos devem ir para o pagamento dos professores."
          },
          {
            question: "Prestação de contas do FUNDEB",
            answer: "A prestação de contas do FUNDEB deve ser feita todo ano. É preciso mostrar como o dinheiro foi gasto, comprovar que pelo menos 70% foi para salário dos professores, e apresentar os resultados educacionais alcançados. O Conselho do FUNDEB acompanha esses gastos."
          }
        ]
      },

      // Gestão Educacional
      gestao: {
        keywords: ['gestão escolar', 'administração escola', 'diretor', 'coordenação pedagógica', 'planejamento'],
        responses: [
          {
            question: "Princípios da gestão democrática",
            answer: "A gestão democrática da escola se baseia em:\n• Participação da comunidade nas decisões\n• Transparência nos gastos e ações\n• Autonomia da escola\n• Trabalho em equipe\n• Conselho Escolar ativo\n• Eleição de diretores (quando aplicável)\n\nTodos devem participar: professores, pais, alunos e funcionários."
          },
          {
            question: "Projeto Político Pedagógico (PPP)",
            answer: "O PPP é o documento que define a identidade da escola e seus objetivos. Deve incluir:\n• Missão e valores da escola\n• Diagnóstico da comunidade escolar\n• Metas educacionais\n• Proposta pedagógica\n• Plano de ação\n• Como avaliar os resultados\n\nToda a comunidade escolar deve participar da construção do PPP."
          }
        ]
      },

      // Pedagogia e Metodologias
      pedagogia: {
        keywords: ['metodologia', 'didática', 'ensino aprendizagem', 'pedagogia', 'curriculo'],
        responses: [
          {
            question: "Metodologias ativas de aprendizagem",
            answer: "As metodologias ativas colocam o aluno como protagonista do aprendizado:\n• Aprendizagem baseada em problemas\n• Sala de aula invertida\n• Jogos educativos (gamificação)\n• Ensino híbrido (presencial + online)\n• Trabalho em grupos\n• Projetos práticos\n\nEssas metodologias desenvolvem autonomia, pensamento crítico e preparam os alunos para o século 21."
          },
          {
            question: "Base Nacional Comum Curricular (BNCC)",
            answer: "A BNCC define o que todos os alunos brasileiros devem aprender na Educação Básica. Ela está organizada em:\n• 10 competências gerais\n• Áreas do conhecimento\n• Componentes curriculares (matérias)\n• Habilidades específicas por ano\n\nCada escola deve adaptar a BNCC à sua realidade local, criando seu currículo próprio."
          }
        ]
      },

      // Avaliação e Indicadores
      avaliacao: {
        keywords: ['avaliação', 'saeb', 'ideb', 'prova brasil', 'indicadores educacionais'],
        responses: [
          {
            question: "Sistema de Avaliação da Educação Básica (SAEB)",
            answer: "O SAEB avalia a qualidade da educação básica no Brasil através de provas aplicadas a cada dois anos. Avalia conhecimentos em Português e Matemática nos 5º e 9º anos do fundamental e 3º ano do médio. Os resultados ajudam a identificar pontos que precisam melhorar na educação."
          },
          {
            question: "Índice de Desenvolvimento da Educação Básica (IDEB)",
            answer: "O IDEB combina duas informações:\n• Desempenho dos alunos nas provas do SAEB\n• Taxa de aprovação (quantos alunos passam de ano)\n\nVaria de 0 a 10. A meta do Brasil é chegar ao IDEB 6,0, que é o padrão dos países desenvolvidos. Cada escola e município tem sua meta específica."
          }
        ]
      },

      // Inclusão e Diversidade
      inclusao: {
        keywords: ['inclusão', 'educação especial', 'diversidade', 'acessibilidade', 'aee'],
        responses: [
          {
            question: "Educação Inclusiva",
            answer: "A educação inclusiva garante que todos os alunos tenham direito à educação de qualidade:\n• Alunos com deficiência estudam na escola regular\n• Atendimento Educacional Especializado quando necessário\n• Adaptações no ensino conforme a necessidade\n• Professores preparados para a diversidade\n• Escola acessível (rampas, banheiros adaptados)\n• Respeito às diferenças"
          },
          {
            question: "Atendimento Educacional Especializado (AEE)",
            answer: "O AEE é um serviço que complementa o ensino regular para alunos com:\n• Deficiências (física, intelectual, visual, auditiva)\n• Transtornos do espectro autista\n• Altas habilidades/superdotação\n\nO AEE acontece na Sala de Recursos, geralmente no contraturno, e ensina recursos e estratégias específicas para cada aluno."
          }
        ]
      }
    };

    this.commonQuestions = [
      {
        patterns: ['como está', 'situação', 'gastos', 'escola', 'financeiro'],
        response: "Posso te ajudar com informações sobre a situação financeira da escola:\n• Saldos do PDDE e FUNDEB\n• Prestação de contas\n• Relatórios de gastos\n• Planejamento do orçamento\n\nSobre qual aspecto você gostaria de saber mais?"
      },
      {
        patterns: ['reunião', 'agendar', 'encontro'],
        response: "Posso auxiliar no agendamento de reuniões educacionais. As mais comuns são:\n• Conselho de Escola\n• Reuniões pedagógicas\n• Prestação de contas\n• Planejamento estratégico\n\nQue tipo de reunião você precisa agendar?"
      },
      {
        patterns: ['relatório', 'transparência', 'dados'],
        response: "Posso ajudar com vários tipos de relatórios educacionais:\n• Relatórios financeiros (PDDE, FUNDEB)\n• Indicadores educacionais (IDEB, frequência)\n• Relatórios pedagógicos\n• Dados de transparência pública\n\nQual tipo de relatório você precisa?"
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
      "Como sua assistente educacional, posso te ajudar com informações sobre PDDE, FUNDEB, gestão escolar, metodologias de ensino e muito mais. Pode me fazer uma pergunta mais específica?",
      "Estou aqui para auxiliar com questões educacionais. Posso fornecer informações sobre programas do governo, gestão escolar, avaliações e práticas pedagógicas. Em que posso te ajudar?",
      "Sou especializada em educação básica brasileira. Posso esclarecer dúvidas sobre financiamento educacional, gestão democrática, BNCC, inclusão e outros temas. Qual sua dúvida?",
      "Como posso colaborar com sua gestão educacional? Tenho conhecimentos sobre PDDE, FUNDEB, indicadores educacionais, metodologias de ensino e legislação educacional.",
      "Não entendi muito bem sua pergunta. Você pode ser mais específico? Posso te ajudar com temas como PDDE, FUNDEB, gestão escolar, pedagogia, avaliação educacional ou educação inclusiva."
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