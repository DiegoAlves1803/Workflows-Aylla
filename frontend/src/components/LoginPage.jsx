import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ login: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();
  const { isDark } = useTheme();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simula loading
    setTimeout(() => {
      const result = login(credentials, rememberMe);
      if (result.success) {
        navigate('/chat');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSkipLogin = () => {
    // Login opcional - permite entrar sem credenciais
    const result = login({ login: '', password: '' }, false);
    if (result.success) {
      navigate('/chat');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Presentation */}
      <div 
        className="flex-1 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)'
        }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-xl backdrop-blur-sm"></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-white/15 rounded-lg backdrop-blur-sm"></div>
          
          {/* Chart elements */}
          <div className="absolute top-32 right-32 w-40 h-24 bg-white/10 rounded-lg backdrop-blur-sm flex items-end p-2 space-x-1">
            <div className="w-4 h-8 bg-[#07C9FD] rounded"></div>
            <div className="w-4 h-12 bg-[#07C9FD] rounded"></div>
            <div className="w-4 h-16 bg-[#07C9FD] rounded"></div>
            <div className="w-4 h-10 bg-[#07C9FD] rounded"></div>
          </div>
          
          {/* Person silhouettes */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-24 bg-gradient-to-t from-black/30 to-black/50 rounded-t-full"></div>
          </div>
          <div className="absolute bottom-16 right-1/3">
            <div className="w-12 h-20 bg-gradient-to-t from-black/20 to-black/40 rounded-t-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-12">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/images/aylla-logo.jpg" 
              alt="Aylla Logo" 
              className="h-16 w-auto filter brightness-0 invert"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-['Lexend'] font-medium text-white mb-4 leading-tight">
            Assistente Inteligente<br />
            de Educação
          </h1>

          {/* Description */}
          <p className="text-lg text-white/90 font-['Lato'] font-normal leading-relaxed mb-8 max-w-lg">
            Sistema centralizado de Inteligência Artificial modular e 
            extensível, projetado para operar no modelo "IA como Serviço"
          </p>

          {/* CTA Button */}
          <button className="bg-[#07C9FD] hover:bg-[#06B8EC] text-white px-8 py-3 rounded-full font-['Lato'] font-medium text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 w-fit">
            Saiba Mais
          </button>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className={`w-[480px] flex flex-col justify-center px-12 transition-all duration-300 ${
        isDark ? 'bg-[#0F172A]' : 'bg-white'
      }`}>
        <div className="w-full max-w-sm mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2 className={`text-3xl font-['Lexend'] font-medium mb-2 ${
              isDark ? 'text-white' : 'text-[#0F172A]'
            }`}>
              Login
            </h2>
            <p className={`font-['Lato'] font-normal ${
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
                value={credentials.login}
                onChange={(e) => setCredentials({ ...credentials, login: e.target.value })}
                placeholder="Seu Login"
                className={`w-full px-4 py-3 rounded-lg border font-['Lato'] transition-colors duration-200 ${
                  isDark 
                    ? 'bg-[#1E293B] border-[#374151] text-white placeholder-[#94A3B8] focus:border-[#07C9FD]' 
                    : 'bg-white border-[#CBD5E1] text-[#0F172A] placeholder-[#64748B] focus:border-[#08215D]'
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
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  placeholder="Sua Senha"
                  className={`w-full px-4 py-3 pr-12 rounded-lg border font-['Lato'] transition-colors duration-200 ${
                    isDark 
                      ? 'bg-[#1E293B] border-[#374151] text-white placeholder-[#94A3B8] focus:border-[#07C9FD]' 
                      : 'bg-white border-[#CBD5E1] text-[#0F172A] placeholder-[#64748B] focus:border-[#08215D]'
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
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className={`w-4 h-4 rounded border-2 ${
                  isDark 
                    ? 'border-[#374151] bg-[#1E293B] checked:bg-[#07C9FD] checked:border-[#07C9FD]' 
                    : 'border-[#CBD5E1] bg-white checked:bg-[#08215D] checked:border-[#08215D]'
                } focus:ring-2 focus:ring-opacity-50 ${
                  isDark ? 'focus:ring-[#07C9FD]' : 'focus:ring-[#08215D]'
                }`}
              />
              <label 
                htmlFor="remember" 
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
              disabled={isLoading}
              className={`w-full py-3 rounded-lg font-['Lato'] font-medium text-white transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 ${
                isLoading 
                  ? 'bg-[#64748B] cursor-not-allowed' 
                  : 'bg-[#08215D] hover:bg-[#061A4F]'
              }`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Entrar
                  <ArrowRight size={20} />
                </>
              )}
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
    </div>
  );
};

export default LoginPage;