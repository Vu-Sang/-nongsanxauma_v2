import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AuthUser } from '../pages/AuthPage';

interface AuthContextType {
  user: (AuthUser & { id: string }) | null;
  token: string | null;
  login: (user: AuthUser, token?: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<(AuthUser & { id: string }) | null>(() => {
    try {
      const saved = localStorage.getItem('capnong-user');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          id: parsed.id ? String(parsed.id) : '1',
        };
      }
      return {
        id: '1',
        name: 'Quản trị viên Hệ thống',
        email: 'admin@capnong.vn',
        role: 'admin',
        detail: 'Quản trị viên cấp cao',
      };
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('capnong-token') || 'mock-admin-jwt-token';
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('capnong-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('capnong-user');
    }
  }, [user]);

  const login = (newUser: AuthUser, newToken: string = 'mock-jwt-token') => {
    const userWithId = {
      ...newUser,
      id: (newUser as { id?: string | number }).id ? String((newUser as { id?: string | number }).id) : '1',
    };
    setUser(userWithId);
    setToken(newToken);
    localStorage.setItem('capnong-token', newToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('capnong-token');
    localStorage.removeItem('capnong-user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
