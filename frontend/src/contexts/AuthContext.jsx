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
      `Olá, ${user?.name || 'Secretário'}! Como posso ajudá-lo hoje?`,
      `Bem-vindo de volta, ${user?.name || 'Secretário'}! Em que posso auxiliá-lo?`,
      `Oi, ${user?.name || 'Secretário'}! Pronto para continuar nossa conversa?`,
      `Olá! É um prazer falar com você novamente, ${user?.name || 'Secretário'}!`,
      `Bem-vindo, ${user?.name || 'Secretário'}! Como está sua jornada educacional hoje?`
    ];
    
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    const userName = user?.name || 'Secretário';
    
    if (hour < 12) {
      return `Bom dia, ${userName}! Como posso ajudá-lo nesta manhã?`;
    } else if (hour < 18) {
      return `Boa tarde, ${userName}! Em que posso auxiliá-lo hoje?`;
    } else {
      return `Boa noite, ${userName}! Como posso ajudá-lo nesta noite?`;
    }
  };

  const getCurrentGreeting = () => {
    if (!user) {
      return "Olá! Como posso ajudá-lo hoje?";
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