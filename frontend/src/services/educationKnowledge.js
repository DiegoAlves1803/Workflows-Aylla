// Base de Conhecimento Educacional da Aylla - Português Brasileiro
export class EducationKnowledge {
  constructor() {
    this.knowledgeBase = {
      // Análises Financeiras Educacionais
      analise_financeira: {
        keywords: ['análise financeira', 'análise de recursos', 'situação financeira', 'execução orçamentária', 'recursos educacionais', 'orçamento educação'],
        responses: [
          {
            question: "Como fazer análise da execução orçamentária educacional?",
            answer: "Para analisar a execução orçamentária da educação:\n\n1. **Identificar as fontes de recursos:**\n• FUNDEB (Fundo de Desenvolvimento da Educação Básica)\n• PDDE (Programa Dinheiro Direto na Escola)\n• PNAE (Programa Nacional de Alimentação Escolar)\n• Recursos próprios do município\n\n2. **Verificar percentuais de execução:**\n• Meta: 77% de execução atual está dentro do esperado\n• Recursos disponíveis: 23% ainda podem ser utilizados\n• Acompanhar prazos de prestação de contas\n\n3. **Indicadores importantes:**\n• Taxa de execução por programa\n• Cumprimento de prazos\n• Regularidade documental\n• Eficiência na aplicação"
          },
          {
            question: "Quais são os principais indicadores financeiros educacionais?",
            answer: "**Indicadores Essenciais para Gestão Financeira Educacional:**\n\n**1. Execução Orçamentária:**\n• FUNDEB: 87% dos recursos totais\n• PDDE: 9% dos recursos totais\n• PNAE: 4% dos recursos totais\n\n**2. Performance de Execução:**\n• 77% executado (Meta: 75-85%)\n• 23% disponível para aplicação\n\n**3. Gestão de Prazos:**\n• FUNDEB: 15 dias para vencimento\n• PDDE: 8 dias para vencimento (ATENÇÃO!)\n• PNAE: 22 dias para vencimento\n\n**4. Recomendações:**\n• Priorizar prestação PDDE (prazo crítico)\n• Otimizar execução dos 23% restantes\n• Manter documentação em dia"
          },
          {
            question: "Como otimizar a aplicação dos recursos educacionais?",
            answer: "**Estratégias para Otimização de Recursos Educacionais:**\n\n**1. Planejamento Estratégico:**\n• Priorizar gastos por impacto educacional\n• Alinhar com metas do PNE e IDEB\n• Considerar sazonalidade escolar\n\n**2. FUNDEB (R$ 854.300):**\n• 70% mínimo em remuneração de profissionais\n• 30% em outras despesas de MDE\n• Foco em qualificação docente\n\n**3. PDDE (R$ 89.650):**\n• 80% custeio: materiais, manutenção\n• 20% capital: equipamentos permanentes\n• Priorizar necessidades urgentes das escolas\n\n**4. PNAE (R$ 36.500):**\n• 30% mínimo em agricultura familiar\n• Cardápios nutricionalmente adequados\n• Controle de qualidade rigoroso"
          },
          {
            question: "Como interpretar os dados do painel financeiro educacional?",
            answer: "**Interpretação do Dashboard Financeiro Educacional:**\n\n**Recursos Totais: R$ 980.450**\n\n**Distribuição por Programa:**\n• FUNDEB: R$ 854.300 (87%) - Principal fonte\n• PDDE: R$ 89.650 (9%) - Autonomia escolar\n• PNAE: R$ 36.500 (4%) - Alimentação escolar\n\n**Status de Execução:**\n• Executado: R$ 756.234 (77%)\n• Disponível: R$ 224.216 (23%)\n\n**Análise da Situação:**\n✅ **Pontos Positivos:**\n• Taxa de execução adequada (77%)\n• Boa diversificação de fontes\n• Recursos ainda disponíveis para aplicação\n\n⚠️ **Pontos de Atenção:**\n• PDDE com prazo crítico (8 dias)\n• Necessidade de acelerar execução\n• Documentação deve estar em dia"
          }
        ]
      },

      // PDDE Expandido - Conhecimento Avançado
      pdde_avancado: {
        keywords: ['unidade executora pdde', 'prestação pdde detalhada', 'problemas pdde', 'documentos pdde', 'execução pdde'],
        responses: [
          {
            question: "Quais documentos são obrigatórios na prestação de contas do PDDE?",
            answer: "**Documentos Obrigatórios para Prestação de Contas PDDE:**\n\n**1. Demonstrativo da Execução da Receita e Despesa (DERD)**\n• Modelo disponível no PDDE Interativo\n• Assinado pelo presidente da UEX\n• Valores devem coincidir com extratos\n\n**2. Relação de Bens Adquiridos ou Produzidos**\n• Todos os bens permanentes\n• Número do patrimônio quando aplicável\n• Descrição detalhada dos itens\n\n**3. Extratos Bancários**\n• Conta corrente específica do PDDE\n• Do recebimento até a aplicação total\n• Todos os meses com movimentação\n\n**4. Conciliação Bancária**\n• Última movimentação da conta\n• Demonstrar saldo zero\n\n**5. Comprovantes de Despesas**\n• Notas fiscais em nome da UEX\n• Recibos de pagamento\n• Comprovantes de transferência bancária"
          },
          {
            question: "Como resolver problemas na prestação de contas do PDDE?",
            answer: "**Soluções para Problemas Comuns no PDDE:**\n\n**Problema: CNPJ Irregular**\n• Regularizar na Receita Federal\n• Atualizar dados no PDDE Interativo\n• Solicitar nova certidão de regularidade\n\n**Problema: Notas Fiscais Inadequadas**\n• Verificar se estão em nome da UEX\n• CNPJ da escola deve estar correto\n• Produtos devem ser elegíveis pelo programa\n\n**Problema: Prestação em Atraso**\n• Justificar o atraso formalmente\n• Enviar documentação completa\n• Aguardar análise do FNDE\n\n**Problema: Saldo Remanescente**\n• Devolver via GRU código 153173\n• Informar no PDDE Interativo\n• Justificar a não execução total\n\n**Problema: Duplicação de Registros**\n• Identificar todas as ocorrências\n• Cancelar registros duplicados\n• Manter apenas o correto"
          },
          {
            question: "Qual a diferença entre PDDE Básico e PDDE Qualidade?",
            answer: "**Diferenças entre PDDE Básico e PDDE Qualidade:**\n\n**PDDE Básico:**\n• Todas as escolas públicas são elegíveis\n• Recursos para manutenção geral\n• 80% custeio / 20% capital\n• Prestação de contas padrão\n• Valores conforme número de alunos\n\n**PDDE Qualidade:**\n• Escolas com baixo IDEB\n• Foco específico na alfabetização\n• Recursos extras para materiais pedagógicos\n• Anos iniciais do ensino fundamental\n• Acompanhamento diferenciado\n\n**Critérios PDDE Qualidade:**\n• IDEB abaixo da meta projetada\n• Anos iniciais (1º ao 5º ano)\n• Escolas urbanas prioritárias\n\n**Aplicação dos Recursos:**\n• Material pedagógico específico\n• Jogos educativos para alfabetização\n• Livros de literatura infantil\n• Recursos para reforço escolar\n• Materiais de apoio ao professor"
          }
        ]
      },
      pdde: {
        keywords: ['pdde', 'dinheiro direto', 'programa dinheiro', 'recursos escola', 'fundos escola', 'unidade executora', 'adesão pdde'],
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
          },
          {
            question: "Como criar uma Unidade Executora?",
            answer: "Para escolas com mais de 99 alunos, é necessário criar uma Unidade Executora:\n• Deve ser constituída como pessoa jurídica de direito privado, sem fins lucrativos\n• Ter CNPJ próprio\n• Estatuto registrado em cartório\n• Conselho Deliberativo com participação da comunidade escolar\n• Pode ser APM (Associação de Pais e Mestres) ou Conselho Escolar\n• Precisa estar em situação regular no CNPJ"
          },
          {
            question: "Prestação de contas do PDDE",
            answer: "A prestação de contas do PDDE deve ser feita em até 30 dias após o término da execução:\n• Demonstrativo da Execução da Receita e Despesa\n• Relação de Bens Adquiridos\n• Extrato bancário da conta corrente\n• Conciliação bancária\n• Cópias dos comprovantes de despesas\n• O sistema PDDE Interativo deve ser atualizado com todas as informações"
          },
          {
            question: "Em que pode ser gasto o PDDE?",
            answer: "Recursos de CUSTEIO (80%):\n• Material de consumo (papel, limpeza, expediente)\n• Material de manutenção\n• Contratação de mão de obra para pequenos reparos\n• Serviços de terceiros\n\nRecursos de CAPITAL (20%):\n• Equipamentos permanentes\n• Material bibliográfico\n• Mobiliário escolar\n• Instrumentos musicais\n\nNÃO PODE: salários, gratificações, construção, reforma estrutural"
          },
          {
            question: "Como fazer adesão ao PDDE?",
            answer: "Para aderir ao PDDE:\n• Acessar o sistema PDDE Interativo no site do FNDE\n• Preencher o Plano de Atendimento da Escola (PAE)\n• Manter dados atualizados no Censo Escolar\n• Escolas com UEX devem manter dados atualizados no CNPJ\n• A adesão deve ser feita anualmente\n• Prazo geralmente é até junho de cada ano"
          },
          {
            question: "PDDE Qualidade - Mais Alfabetização",
            answer: "O PDDE Qualidade é uma ação específica para escolas com baixo IDEB:\n• Recursos extras para melhorar a alfabetização\n• Foco nos anos iniciais do ensino fundamental\n• Deve ser usado em materiais pedagógicos, jogos educativos, livros\n• Acompanhamento diferenciado pela Secretaria de Educação\n• Prestação de contas específica"
          },
          {
            question: "Cronograma do PDDE",
            answer: "Cronograma típico do PDDE:\n• Janeiro-Março: Abertura do sistema para adesão\n• Março-Junho: Prazo para adesão das escolas\n• Julho-Setembro: Análise e aprovação pelo FNDE\n• Setembro-Novembro: Repasse dos recursos\n• Durante o ano letivo seguinte: Execução dos recursos\n• 30 dias após execução: Prestação de contas"
          },
          {
            question: "Problemas comuns no PDDE",
            answer: "Principais problemas e soluções:\n• CNPJ irregular: Regularizar na Receita Federal\n• Dados desatualizados: Atualizar no Censo Escolar\n• Prestação de contas em atraso: Enviar documentação completa\n• Conta bancária incorreta: Informar dados corretos ao FNDE\n• Notas fiscais inadequadas: Verificar se estão em nome da UEX\n• Gastos indevidos: Restituir recursos e adequar prestação de contas"
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
      },

      // FUNDEB - Conhecimento Avançado
      fundeb_avancado: {
        keywords: ['fundeb detalhado', 'recursos fundeb', 'aplicação fundeb', '70% profissionais', 'mde fundeb'],
        responses: [
          {
            question: "Como aplicar corretamente os recursos do FUNDEB?",
            answer: "**Aplicação Correta dos Recursos FUNDEB:**\n\n**Regra dos 70%:**\n• Mínimo 70% em remuneração de profissionais da educação\n• Inclui: professores, pedagogos, diretores, secretários escolares\n• Base de cálculo: valor total recebido no exercício\n• R$ 854.300 × 70% = R$ 598.010 mínimo\n\n**30% Restantes (R$ 256.290):**\n• Outras ações de MDE (Manutenção e Desenvolvimento do Ensino)\n• Construção e reformas de escolas\n• Aquisição de equipamentos e materiais\n• Capacitação de profissionais\n• Transporte escolar\n\n**Vedações Importantes:**\n• Pessoal aposentado\n• Assistência social\n• Obras de saneamento\n• Formação de reservas financeiras\n\n**Controle e Fiscalização:**\n• Conselho de Acompanhamento do FUNDEB (CACS)\n• Tribunal de Contas\n• Ministério Público\n• Controladoria Geral da União"
          },
          {
            question: "Como calcular e comprovar os 70% do FUNDEB em profissionais?",
            answer: "**Cálculo e Comprovação dos 70% FUNDEB:**\n\n**Base de Cálculo:**\n• Total recebido: R$ 854.300\n• 70% obrigatório: R$ 598.010\n• Valor já aplicado: Verificar folha de pagamento\n\n**Profissionais Elegíveis:**\n✅ **Podem ser pagos:**\n• Professores da educação básica\n• Profissionais que exercem atividades de suporte pedagógico\n• Direção escolar, administração, planejamento\n• Inspeção, supervisão e orientação educacional\n\n❌ **NÃO podem ser pagos:**\n• Aposentados e pensionistas\n• Profissionais de outras secretarias\n• Serviços terceirizados de limpeza\n• Vigilantes e porteiros\n\n**Documentação para Comprovação:**\n• Folha de pagamento mensal\n• Relatório anual de aplicação\n• Demonstrativo de cumprimento dos 70%\n• Relação nominal dos profissionais\n• Função/cargo de cada profissional"
          },
          {
            question: "Quais são as penalidades por má aplicação do FUNDEB?",
            answer: "**Penalidades por Má Aplicação do FUNDEB:**\n\n**Penalidades Administrativas:**\n• Suspensão de transferências federais\n• Devolução de recursos com correção\n• Instauração de Tomada de Contas Especial\n• Cadastro de inadimplentes (CAUC, CADIN)\n\n**Penalidades Criminais:**\n• Improbidade administrativa (Lei 8.429/92)\n• Aplicação irregular de verbas (Código Penal)\n• Responsabilização pessoal do gestor\n\n**Para o Município:**\n• Perda de certificação no CAUC\n• Impossibilidade de novos convênios\n• Suspensão de transferências voluntárias\n• Intervenção do Estado (casos graves)\n\n**Para o Gestor:**\n• Ressarcimento ao erário\n• Multa civil (até 100x a remuneração)\n• Suspensão dos direitos políticos\n• Proibição de contratar com o poder público\n\n**Como Evitar:**\n• Capacitação contínua da equipe\n• Consultoria jurídica especializada\n• Acompanhamento do CACS ativo\n• Transparência nas aplicações"
          }
        ]
      },

      // Indicadores e Metas Educacionais
      indicadores_educacionais: {
        keywords: ['ideb', 'metas educacionais', 'qualidade educação', 'indicadores desempenho', 'avaliação educacional'],
        responses: [
          {
            question: "Como interpretar os resultados do IDEB?",
            answer: "**Interpretação do IDEB (Índice de Desenvolvimento da Educação Básica):**\n\n**Composição do IDEB:**\n• Fluxo escolar (aprovação/reprovação/abandono)\n• Desempenho (Prova Brasil/SAEB)\n• Escala: 0 a 10 (média OCDE: 6,0)\n\n**Metas Nacionais 2025:**\n• Anos iniciais (1º-5º ano): 6,0\n• Anos finais (6º-9º ano): 5,5\n• Ensino médio: 5,2\n\n**Análise dos Resultados:**\n**6,0+ = Excelente** 📈\n• Padrão internacional\n• Qualidade educacional elevada\n\n**4,5-5,9 = Bom** 📊\n• Próximo das metas\n• Melhorias pontuais necessárias\n\n**3,0-4,4 = Regular** ⚠️\n• Necessita intervenção\n• Plano de melhoria urgente\n\n**Abaixo 3,0 = Crítico** 🚨\n• Situação de emergência educacional\n• Ações imediatas obrigatórias"
          },
          {
            question: "Qual a relação entre investimento financeiro e resultados educacionais?",
            answer: "**Relação Investimento × Resultados Educacionais:**\n\n**Investimento Atual do Senhor Secretário:**\n• Total: R$ 980.450\n• Por aluno/mês: ~R$ 815 (estimativa)\n• CAQi mínimo: R$ 650/aluno/mês\n\n**Áreas de Impacto Direto:**\n**1. Remuneração Docente (70% FUNDEB)**\n• Atração de melhores profissionais\n• Redução de rotatividade\n• Impacto no IDEB: +0,5 pontos\n\n**2. Infraestrutura (PDDE/PNAE)**\n• Ambiente adequado de aprendizagem\n• Alimentação de qualidade\n• Impacto no IDEB: +0,3 pontos\n\n**3. Formação Continuada**\n• Metodologias modernas\n• Capacitação pedagógica\n• Impacto no IDEB: +0,4 pontos\n\n**ROI Educacional:**\n• Cada R$ 100 investidos adequadamente\n• Potencial melhoria: 0,1 ponto no IDEB\n• Retorno social: R$ 7 para cada R$ 1 investido\n\n**Recomendações Estratégicas:**\n• Foco na formação de professores\n• Tecnologia educacional\n• Acompanhamento pedagógico individualizado"
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