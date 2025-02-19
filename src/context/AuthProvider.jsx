import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: null });

  // Load data from localStorage when the app starts
  useEffect(() => {
    const data = getLocalStorage();
    if (data.employees && data.admin) {
      setUserData(data);
    } else {
      setLocalStorage({ employees: [], admin: null });
    }
  }, []);

  // Save to localStorage when userData changes
  useEffect(() => {
    if (userData.employees.length > 0) {
      setLocalStorage(userData);
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
