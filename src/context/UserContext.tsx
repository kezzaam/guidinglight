"use client"

// UserContext.tsx
import { createContext, useContext, useState } from 'react';

const UserContext = createContext({
  userData: {
    email: '',
    password: '',
  },
  setUserData: (userData: any) => {}, // Initialize with an empty function for now
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

