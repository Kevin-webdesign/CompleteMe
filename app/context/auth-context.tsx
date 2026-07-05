"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { demoUsers, type DemoUser } from "../data/mock-store";

type AuthContextValue = {
  user: DemoUser | null;
  isReady: boolean;
  demoUsers: DemoUser[];
  login: (email: string, password?: string) => DemoUser | null;
  register: (user: Pick<DemoUser, "name" | "email" | "password">) => DemoUser;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const storageKey = "will-shop-demo-user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem(storageKey);
    setUser(stored ? (JSON.parse(stored) as DemoUser) : null);
    setIsReady(true);
  }, []);

  const persist = useCallback((nextUser: DemoUser | null) => {
    setUser(nextUser);
    if (nextUser) {
      window.localStorage.setItem(storageKey, JSON.stringify(nextUser));
    } else {
      window.localStorage.removeItem(storageKey);
    }
  }, []);

  const login = useCallback(
    (email: string, password?: string) => {
      const nextUser =
        demoUsers.find(
          (candidate) =>
            candidate.email.toLowerCase() === email.toLowerCase() &&
            (!password || candidate.password === password),
        ) ?? demoUsers[0];

      persist(nextUser);
      return nextUser;
    },
    [persist],
  );

  const register = useCallback(
    (newUser: Pick<DemoUser, "name" | "email" | "password">) => {
      const nextUser: DemoUser = {
        ...newUser,
        id: `registered-${Date.now()}`,
        role: "customer",
      };
      persist(nextUser);
      return nextUser;
    },
    [persist],
  );

  const logout = useCallback(() => persist(null), [persist]);

  const value = useMemo(
    () => ({ user, isReady, demoUsers, login, register, logout }),
    [isReady, login, logout, register, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
