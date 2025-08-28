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
      name: credentials.login || 'Senhor Secretário',
      role: 'Secretário de Educação',
      municipality: 'Município de Oriovaldo',
      login: credentials.login || 'secretario',
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
    const userName = user?.name || 'Sr. Oriovaldo';
    const hour = new Date().getHours();
    
    let timeGreeting;
    if (hour < 12) {
      timeGreeting = "Bom dia";
    } else if (hour < 18) {
      timeGreeting = "Boa tarde";
    } else {
      timeGreeting = "Boa noite";
    }
    
    // Saudações cordiais e personalizadas baseadas no horário
    const greetings = [
      `${timeGreeting}, ${userName}! Como posso ajudá-lo?`,
      `${timeGreeting}, ${userName}! Em que posso ser útil hoje?`,
      `${timeGreeting}, ${userName}! Estou aqui para auxiliá-lo.`,
      `${timeGreeting}, ${userName}! Como posso colaborar com você?`,
      `${timeGreeting}, ${userName}! Pronto para nossa conversa?`,
      `${timeGreeting}, ${userName}! Vamos trabalhar juntos?`
    ];
    
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    const userName = user?.name || 'Sr. Oriovaldo';
    
    if (hour < 12) {
      return `Bom dia, ${userName}! Como posso ajudar você hoje?`;
    } else if (hour < 18) {
      return `Boa tarde, ${userName}! Em que posso auxiliá-lo?`;
    } else {
      return `Boa noite, ${userName}! Como posso ajudá-lo?`;
    }
  };

  const getCurrentGreeting = () => {
    const userName = "Senhor Secretário"; // Alterado para Senhor Secretário
    const hour = new Date().getHours();
    
    let timeGreeting;
    if (hour < 12) {
      timeGreeting = "Bom dia";
    } else if (hour < 18) {
      timeGreeting = "Boa tarde";
    } else {
      timeGreeting = "Boa noite";
    }
    
    // Saudações cordiais e personalizadas baseadas no horário
    const greetings = [
      `${timeGreeting}, ${userName}! Como posso ajudá-lo?`,
      `${timeGreeting}, ${userName}! Em que posso ser útil hoje?`,
      `${timeGreeting}, ${userName}! Estou aqui para auxiliá-lo.`,
      `${timeGreeting}, ${userName}! Como posso colaborar com você?`,
      `${timeGreeting}, ${userName}! Pronto para nossa conversa?`,
      `${timeGreeting}, ${userName}! Vamos trabalhar juntos?`
    ];
    
    return greetings[Math.floor(Math.random() * greetings.length)];
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