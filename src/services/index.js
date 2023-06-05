import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('access_token'));
  const isLoggedIn = Boolean(token);

  useEffect(() => {
    setToken(localStorage.getItem('access_token'));
  }, []);

  const login = (token) => {
    setToken(token);
    localStorage.setItem('access_token', token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('access_token');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
