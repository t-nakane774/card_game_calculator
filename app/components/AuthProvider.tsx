"use client"

import React, { ReactNode, createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  loginUser: () => { },
  logoutUser: () => { },
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, loginUser: login, logoutUser: logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);