import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Verifica localStorage para usuário logado
    const savedUser = localStorage.getItem('aylla_user');
    if (savedUser) {
      return JSON.parse(savedUser);
    }
    return null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  useEffect(() => {
    if (user) {
      localStorage.setItem('aylla_user', JSON.stringify(user));
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem('aylla_user');
      setIsAuthenticated(false);
    }
  }, [user]);

  const login = (credentials, rememberMe = false) => {
    // Login opcional - aceita qualquer credencial ou entrada vazia
    const userData = {
      id: Date.now().toString(),
      name: credentials.login || 'Sr. Oriovaldo',
      role: 'Secretário de Educação',
      municipality: 'Município de Oriovaldo',
      login: credentials.login || 'oriovaldo',
      loginTime: new Date().toISOString(),
      rememberMe: rememberMe
    };

    setUser(userData);
    return { success: true, user: userData };
  };

  const logout = () => {
    setUser(null);
  };

  const updateUserGreeting = () => {
    const greetings = [
      `Olá, ${user?.name || 'Sr. Oriovaldo'}! Como posso ajudá-lo hoje?`,
      `Bem-vindo, ${user?.name || 'Sr. Oriovaldo'}! Em que posso auxiliá-lo?`,
      `Oi, ${user?.name || 'Sr. Oriovaldo'}! Como posso ser útil?`,
      `Olá, ${user?.name || 'Sr. Oriovaldo'}! Estou aqui para ajudar.`,
      `Bem-vindo de volta, ${user?.name || 'Sr. Oriovaldo'}!`,
      `Oi, ${user?.name || 'Sr. Oriovaldo'}! Pronto para conversar?`,
      `Olá! Como vai, ${user?.name || 'Sr. Oriovaldo'}?`,
      `Bem-vindo, ${user?.name || 'Sr. Oriovaldo'}! Vamos começar?`
    ];
    
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    const userName = user?.name || 'Sr. Oriovaldo';
    
    if (hour < 12) {
      return `Bom dia, ${userName}. Que este dia seja profícuo para a educação de nosso município.`;
    } else if (hour < 18) {
      return `Boa tarde, ${userName}. Como posso auxiliá-lo em suas demandas educacionais nesta tarde?`;
    } else {
      return `Boa noite, ${userName}. Estou à disposição para atendê-lo neste período noturno.`;
    }
  };

  const getCurrentGreeting = () => {
    if (!user) {
      return "Prezado Sr. Oriovaldo, seja bem-vindo ao sistema Aylla de gestão educacional.";
    }
    
    // Alterna entre saudações baseadas no tempo e personalizadas
    return Math.random() > 0.5 ? getTimeBasedGreeting() : updateUserGreeting();
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    getCurrentGreeting,
    updateUserGreeting,
    getTimeBasedGreeting
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;