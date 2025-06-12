"use client";

import React, { createContext, useState } from "react";

interface AuthData {
  username: string;
  password: string;
}

interface AuthContextType {
  getData: () => AuthData;
  setData: (data: AuthData) => void;
}

export const AuthContext = createContext<AuthContextType>({
  getData: () => ({ username: "", password: "" }),
  setData: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authData, setAuthData] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  const getData = () => {
    return authData;
  };

  const setData = (data: AuthData) => {
    setAuthData(data);
  };

  return (
    <AuthContext.Provider value={{ getData, setData }}>
      {children}
    </AuthContext.Provider>
  );
};
