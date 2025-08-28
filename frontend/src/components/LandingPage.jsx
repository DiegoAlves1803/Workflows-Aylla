import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  MessageCircle, 
  Settings, 
  Code, 
  Clock, 
  Shield, 
  User,
  Eye,
  EyeOff,
  ArrowRight,
  X,
  Lightbulb,
  BarChart3,
  ChevronDown
} from 'lucide-react';

const LandingPage = () => {
  const { isDark, toggleTheme, colors } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ login: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    state: '',
    city: ''
  });

  const currentTheme = isDark ? colors.dark : colors.light;

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = login(loginData, rememberMe);
    if (result.success) {
      setShowLoginModal(false);
      navigate('/chat');
    }
  };

  const handleSkipLogin = () => {
    const result = login({ login: '', password: '' }, false);
    if (result.success) {
      setShowLoginModal(false);
      navigate('/chat');
    }
  };

  const features = [
    {
      icon: MessageCircle,
      title: 'Conversas Naturais',
      description: 'Interaja com a Aylla através de linguagem natural. Ela entende contexto e responde de forma inteligente.'
    },
    {
      icon: Settings,
      title: 'APIs Modulares',
      description: 'Arquitetura robusta e APIs padronizadas que permitem integração fácil com qualquer sistema externo.'
    },
    {
      icon: Code,
      title: 'Core Extensível',
      description: 'Infraestrutura robusta que permite adicionar novas funcionalidades e setores sem modificar o núcleo do sistema.'
    },
    {
      icon: Clock,
      title: 'Sempre Disponível',
      description: 'A Aylla está sempre pronta para ajudar, a qualquer momento.'
    },
    {
      icon: Shield,
      title: 'Privacidade Garantida',
      description: 'Seus dados estão seguros com criptografia avançada e políticas rigorosas de privacidade.'
    },
    {
      icon: User,
      title: 'Experiência personalizada',
      description: 'Adapta-se ao seu estilo e preferências para oferecer uma experiência única e personalizada.'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isDark ? 'bg-[#0F172A]/95' : 'bg-white/95'
      } backdrop-blur-sm border-b ${isDark ? 'border-[#1E293B]' : 'border-[#E2E8F0]'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/aylla-logo.jpg" 
              alt="Aylla" 
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className={`text-sm font-['Lato'] transition-colors duration-200 ${
              isDark ? 'text-[#E2E8F0] hover:text-[#07C9FD]' : 'text-[#334155] hover:text-[#08215D]'
            }`}>
              Início
            </a>
            <a href="#funcionalidades" className={`text-sm font-['Lato'] transition-colors duration-200 ${
              isDark ? 'text-[#E2E8F0] hover:text-[#07C9FD]' : 'text-[#334155] hover:text-[#08215D]'
            }`}>
              Funcionalidades
            </a>
            <a href="#saiba-mais" className={`text-sm font-['Lato'] transition-colors duration-200 ${
              isDark ? 'text-[#E2E8F0] hover:text-[#07C9FD]' : 'text-[#334155] hover:text-[#08215D]'
            }`}>
              Saiba Mais
            </a>
            <a href="#contato" className={`text-sm font-['Lato'] transition-colors duration-200 ${
              isDark ? 'text-[#E2E8F0] hover:text-[#07C9FD]' : 'text-[#334155] hover:text-[#08215D]'
            }`}>
              Contato
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-200 hover:scale-110 ${
                isDark ? 'border-[#334155] hover:border-[#07C9FD]' : 'border-[#E2E8F0] hover:border-[#08215D]'
              }`}
              style={{
                backgroundColor: isDark ? 'rgba(51, 65, 85, 0.3)' : 'rgba(248, 250, 252, 0.8)'
              }}
              title={isDark ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
            >
              {isDark ? (
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#FCD34D" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2"/>
                  <path d="M12 21v2"/>
                  <path d="M4.22 4.22l1.42 1.42"/>
                  <path d="M18.36 18.36l1.42 1.42"/>
                  <path d="M1 12h2"/>
                  <path d="M21 12h2"/>
                  <path d="M4.22 19.78l1.42-1.42"/>
                  <path d="M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#475569" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Login Button */}
            <button
              onClick={() => setShowLoginModal(true)}
              className="bg-[#08215D] hover:bg-[#061A4F] text-white px-6 py-2 rounded-full font-['Lato'] font-medium text-sm transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-2"
            >
              Login
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className={`pt-24 pb-16 px-6 relative overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]' : 'bg-gradient-to-br from-[#F8FAFC] via-[#E2E8F0] to-[#CBD5E1]'
      }`}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 left-10 w-32 h-32 rounded-2xl ${
            isDark ? 'bg-[#07C9FD]/10' : 'bg-[#08215D]/10'
          } backdrop-blur-sm`}></div>
          <div className={`absolute top-40 right-20 w-24 h-24 rounded-xl ${
            isDark ? 'bg-[#07C9FD]/5' : 'bg-[#08215D]/5'
          } backdrop-blur-sm`}></div>
          <div className={`absolute bottom-32 left-20 w-20 h-20 rounded-lg ${
            isDark ? 'bg-[#07C9FD]/15' : 'bg-[#08215D]/15'
          } backdrop-blur-sm`}></div>
          
          {/* Chart Element */}
          <div className={`absolute top-32 right-32 w-40 h-24 rounded-lg ${
            isDark ? 'bg-[#07C9FD]/10' : 'bg-[#08215D]/10'
          } backdrop-blur-sm flex items-end p-2 space-x-1`}>
            <div className="w-4 h-8 bg-[#07C9FD] rounded"></div>
            <div className="w-4 h-12 bg-[#07C9FD] rounded"></div>
            <div className="w-4 h-16 bg-[#07C9FD] rounded"></div>
            <div className="w-4 h-10 bg-[#07C9FD] rounded"></div>
          </div>
          
          {/* Person Silhouettes */}
          <div className="absolute bottom-20 right-1/3">
            <div className={`w-12 h-20 rounded-t-full ${
              isDark ? 'bg-gradient-to-t from-[#07C9FD]/30 to-[#07C9FD]/50' : 'bg-gradient-to-t from-[#08215D]/30 to-[#08215D]/50'
            }`}></div>
          </div>
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <div className={`w-16 h-24 rounded-t-full ${
              isDark ? 'bg-gradient-to-t from-[#07C9FD]/20 to-[#07C9FD]/40' : 'bg-gradient-to-t from-[#08215D]/20 to-[#08215D]/40'
            }`}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-4xl md:text-5xl font-['Lexend'] font-bold mb-6 leading-tight ${
                isDark ? 'text-white' : 'text-[#0F172A]'
              }`}>
                Assistente Inteligente<br />
                de Educação
              </h1>
              
              <p className={`text-lg mb-8 font-['Lato'] leading-relaxed ${
                isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
              }`}>
                Sistema centralizado de Inteligência Artificial modular e extensível, projetado para operar no modelo "IA como Serviço"
              </p>

              <button
                onClick={() => setShowLoginModal(true)}
                className="bg-[#07C9FD] hover:bg-[#06B8EC] text-white px-8 py-4 rounded-full font-['Lato'] font-medium text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Saiba Mais
              </button>
            </div>

            <div className="relative">
              {/* Illustration placeholder */}
              <div className={`w-full h-80 rounded-2xl ${
                isDark ? 'bg-gradient-to-br from-[#1E293B] to-[#334155]' : 'bg-gradient-to-br from-[#E2E8F0] to-[#CBD5E1]'
              } flex items-center justify-center relative overflow-hidden`}>
                {/* Business person illustration */}
                <div className="absolute right-8 bottom-0">
                  <div className={`w-32 h-48 rounded-t-full ${
                    isDark ? 'bg-gradient-to-t from-[#07C9FD] to-[#06B8EC]' : 'bg-gradient-to-t from-[#08215D] to-[#061A4F]'
                  }`}></div>
                </div>
                
                {/* Person at desk */}
                <div className="absolute left-8 bottom-0">
                  <div className={`w-24 h-32 rounded-t-lg ${
                    isDark ? 'bg-gradient-to-t from-[#334155] to-[#475569]' : 'bg-gradient-to-t from-[#64748B] to-[#475569]'
                  }`}></div>
                </div>

                {/* Charts and graphs */}
                <div className="absolute top-8 left-8 w-16 h-12 grid grid-cols-4 gap-1">
                  <div className="bg-[#07C9FD] rounded h-6"></div>
                  <div className="bg-[#07C9FD] rounded h-8"></div>
                  <div className="bg-[#07C9FD] rounded h-4"></div>
                  <div className="bg-[#07C9FD] rounded h-10"></div>
                </div>

                <div className="absolute top-8 right-8">
                  <User size={32} className="text-[#07C9FD]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-['Lexend'] font-bold text-center mb-12 ${
            isDark ? 'text-white' : 'text-[#0F172A]'
          }`}>
            Conheça a Aylla
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  isDark 
                    ? 'bg-[#1E293B] border-[#334155] hover:border-[#07C9FD]' 
                    : 'bg-white border-[#E2E8F0] hover:border-[#08215D] shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                  isDark ? 'bg-[#07C9FD]/20' : 'bg-[#08215D]/10'
                }`}>
                  <feature.icon size={24} className={isDark ? 'text-[#07C9FD]' : 'text-[#08215D]'} />
                </div>
                
                <h3 className={`text-lg font-['Lexend'] font-semibold mb-3 ${
                  isDark ? 'text-white' : 'text-[#0F172A]'
                }`}>
                  {feature.title}
                </h3>
                
                <p className={`text-sm font-['Lato'] leading-relaxed ${
                  isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Aylla Section */}
      <section id="saiba-mais" className={`py-16 px-6 ${
        isDark ? 'bg-[#1E293B]/50' : 'bg-[#F8FAFC]'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-['Lexend'] font-bold mb-6 ${
                isDark ? 'text-white' : 'text-[#0F172A]'
              }`}>
                Por que escolher<br />
                a Aylla?
              </h2>
              
              <p className={`text-lg font-['Lato'] leading-relaxed mb-8 ${
                isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
              }`}>
                A Aylla não é apenas uma IA - é sua parceira inteligente para resolver problemas educacionais, gerar insights e potencializar sua produtividade com tecnologia de ponta.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Technology Advanced Card */}
              <div className={`p-6 rounded-2xl border ${
                isDark 
                  ? 'bg-[#334155] border-[#475569]' 
                  : 'bg-white border-[#E2E8F0] shadow-sm'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isDark ? 'bg-[#07C9FD]/20' : 'bg-[#08215D]/10'
                  }`}>
                    <Lightbulb size={20} className={isDark ? 'text-[#07C9FD]' : 'text-[#08215D]'} />
                  </div>
                  <h3 className={`text-lg font-['Lexend'] font-semibold ${
                    isDark ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    Tecnologia Avançada
                  </h3>
                </div>
                <ul className={`space-y-2 text-sm font-['Lato'] ${
                  isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                }`}>
                  <li>• Processamento de linguagem natural de última geração</li>
                  <li>• Algoritmos de machine learning adaptativos</li>
                  <li>• Interface responsiva e intuitiva</li>
                  <li>• Integração perfeita com suas ferramentas favoritas</li>
                </ul>
              </div>

              {/* Use Cases Card */}
              <div className={`p-6 rounded-2xl border ${
                isDark 
                  ? 'bg-[#334155] border-[#475569]' 
                  : 'bg-white border-[#E2E8F0] shadow-sm'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isDark ? 'bg-[#07C9FD]/20' : 'bg-[#08215D]/10'
                  }`}>
                    <BarChart3 size={20} className={isDark ? 'text-[#07C9FD]' : 'text-[#08215D]'} />
                  </div>
                  <h3 className={`text-lg font-['Lexend'] font-semibold ${
                    isDark ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    Casos de Uso
                  </h3>
                </div>
                <ul className={`space-y-2 text-sm font-['Lato'] ${
                  isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                }`}>
                  <li>• Assistência em pesquisas e análises</li>
                  <li>• Automação de tarefas repetitivas</li>
                  <li>• Geração de conteúdo criativo</li>
                  <li>• Suporte à tomada de decisões</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className={`text-3xl font-['Lexend'] font-bold mb-6 ${
                isDark ? 'text-white' : 'text-[#0F172A]'
              }`}>
                Entre em contato
              </h2>
              
              <p className={`text-lg font-['Lato'] mb-8 ${
                isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
              }`}>
                Quer implementar a Aylla na sua secretaria ou escola? Entre em contato para agendar uma demonstração.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className={`block text-sm font-['Lato'] font-medium mb-2 ${
                  isDark ? 'text-[#E2E8F0]' : 'text-[#334155]'
                }`}>
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu Nome"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border font-['Lato'] transition-colors duration-200 ${
                    isDark 
                      ? 'bg-[#1E293B] border-[#374151] text-white placeholder-[#94A3B8] focus:border-[#07C9FD]' 
                      : 'bg-white border-[#CBD5E1] text-[#0F172A] placeholder-[#64748B] focus:border-[#08215D]'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    isDark ? 'focus:ring-[#07C9FD]' : 'focus:ring-[#08215D]'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-['Lato'] font-medium mb-2 ${
                  isDark ? 'text-[#E2E8F0]' : 'text-[#334155]'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="contato@email.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border font-['Lato'] transition-colors duration-200 ${
                    isDark 
                      ? 'bg-[#1E293B] border-[#374151] text-white placeholder-[#94A3B8] focus:border-[#07C9FD]' 
                      : 'bg-white border-[#CBD5E1] text-[#0F172A] placeholder-[#64748B] focus:border-[#08215D]'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    isDark ? 'focus:ring-[#07C9FD]' : 'focus:ring-[#08215D]'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-['Lato'] font-medium mb-2 ${
                  isDark ? 'text-[#E2E8F0]' : 'text-[#334155]'
                }`}>
                  Estado
                </label>
                <div className="relative">
                  <select
                    value={contactForm.state}
                    onChange={(e) => setContactForm({ ...contactForm, state: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border font-['Lato'] transition-colors duration-200 appearance-none ${
                      isDark 
                        ? 'bg-[#1E293B] border-[#374151] text-white focus:border-[#07C9FD]' 
                        : 'bg-white border-[#CBD5E1] text-[#0F172A] focus:border-[#08215D]'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      isDark ? 'focus:ring-[#07C9FD]' : 'focus:ring-[#08215D]'
                    }`}
                  >
                    <option value="">Selecione seu estado</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                  </select>
                  <ChevronDown size={20} className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none ${
                    isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                  }`} />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-['Lato'] font-medium mb-2 ${
                  isDark ? 'text-[#E2E8F0]' : 'text-[#334155]'
                }`}>
                  Cidade
                </label>
                <div className="relative">
                  <select
                    value={contactForm.city}
                    onChange={(e) => setContactForm({ ...contactForm, city: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border font-['Lato'] transition-colors duration-200 appearance-none ${
                      isDark 
                        ? 'bg-[#1E293B] border-[#374151] text-white focus:border-[#07C9FD]' 
                        : 'bg-white border-[#CBD5E1] text-[#0F172A] focus:border-[#08215D]'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      isDark ? 'focus:ring-[#07C9FD]' : 'focus:ring-[#08215D]'
                    }`}
                  >
                    <option value="">Selecione sua cidade</option>
                    <option value="Capital">Capital</option>
                    <option value="Interior">Interior</option>
                  </select>
                  <ChevronDown size={20} className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none ${
                    isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                  }`} />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#07C9FD] hover:bg-[#06B8EC] text-white py-3 rounded-lg font-['Lato'] font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                Enviar
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className={`w-full max-w-md rounded-2xl p-8 transition-all duration-300 ${
            isDark ? 'bg-[#1E293B]' : 'bg-white'
          }`}>
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setShowLoginModal(false)}
                className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                  isDark ? 'hover:bg-[#334155]' : 'hover:bg-[#F1F5F9]'
                }`}
              >
                <X size={20} className={isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'} />
              </button>
            </div>

            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className={`text-2xl font-['Lexend'] font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-[#0F172A]'
              }`}>
                Login
              </h2>
              <p className={`font-['Lato'] ${
                isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
              }`}>
                Continue sua jornada com a Aylla
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Login Field */}
              <div>
                <label className={`block text-sm font-['Lato'] font-medium mb-2 ${
                  isDark ? 'text-[#E2E8F0]' : 'text-[#334155]'
                }`}>
                  Login
                </label>
                <input
                  type="text"
                  value={loginData.login}
                  onChange={(e) => setLoginData({ ...loginData, login: e.target.value })}
                  placeholder="Seu Login"
                  className={`w-full px-4 py-3 rounded-lg border font-['Lato'] transition-colors duration-200 ${
                    isDark 
                      ? 'bg-[#334155] border-[#475569] text-white placeholder-[#94A3B8] focus:border-[#07C9FD]' 
                      : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] placeholder-[#64748B] focus:border-[#08215D]'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    isDark ? 'focus:ring-[#07C9FD]' : 'focus:ring-[#08215D]'
                  }`}
                />
              </div>

              {/* Password Field */}
              <div>
                <label className={`block text-sm font-['Lato'] font-medium mb-2 ${
                  isDark ? 'text-[#E2E8F0]' : 'text-[#334155]'
                }`}>
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    placeholder="Sua Senha"
                    className={`w-full px-4 py-3 pr-12 rounded-lg border font-['Lato'] transition-colors duration-200 ${
                      isDark 
                        ? 'bg-[#334155] border-[#475569] text-white placeholder-[#94A3B8] focus:border-[#07C9FD]' 
                        : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] placeholder-[#64748B] focus:border-[#08215D]'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      isDark ? 'focus:ring-[#07C9FD]' : 'focus:ring-[#08215D]'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                      isDark ? 'text-[#94A3B8] hover:text-[#07C9FD]' : 'text-[#64748B] hover:text-[#08215D]'
                    } transition-colors duration-200`}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-modal"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className={`w-4 h-4 rounded border-2 ${
                    isDark 
                      ? 'border-[#475569] bg-[#334155] checked:bg-[#07C9FD] checked:border-[#07C9FD]' 
                      : 'border-[#CBD5E1] bg-white checked:bg-[#08215D] checked:border-[#08215D]'
                  } focus:ring-2 focus:ring-opacity-50 ${
                    isDark ? 'focus:ring-[#07C9FD]' : 'focus:ring-[#08215D]'
                  }`}
                />
                <label 
                  htmlFor="remember-modal" 
                  className={`ml-2 text-sm font-['Lato'] ${
                    isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                  } cursor-pointer`}
                >
                  Lembrar de mim
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-['Lato'] font-medium text-white transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 bg-[#08215D] hover:bg-[#061A4F]"
              >
                Entrar
                <ArrowRight size={20} />
              </button>

              {/* Skip Login */}
              <button
                type="button"
                onClick={handleSkipLogin}
                className={`w-full py-2 text-sm font-['Lato'] ${
                  isDark 
                    ? 'text-[#94A3B8] hover:text-[#07C9FD]' 
                    : 'text-[#64748B] hover:text-[#08215D]'
                } transition-colors duration-200 hover:underline`}
              >
                Continuar sem login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;