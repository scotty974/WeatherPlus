// contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getToken, removeToken } from '../services/StorageService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Vérifier si un token existe au démarrage de l'application
  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      setUserToken(token);
      setIsLoading(false);
    };

    checkToken();
  }, []);

  const signOut = async () => {
    await removeToken();
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, setUserToken, isLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
