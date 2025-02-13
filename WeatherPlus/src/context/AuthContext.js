import React, { createContext, useState, useEffect } from 'react';
import { getToken, removeToken } from '../services/StorageService';
import { Buffer } from 'buffer';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const decodeToken = (token) => {
    try {
      const base64Url = token.split('.')[1]; // Récupération de la partie payload
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = Buffer.from(base64, 'base64').toString('utf-8');
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Erreur lors du décodage du token :", error);
      return null;
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (token) {
        const decoded = decodeToken(token);
        if (decoded && decoded.exp * 1000 < Date.now()) {
          await removeToken();
          setUserToken(null);
        } else {
          setUserToken(token);
        }
      }
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
