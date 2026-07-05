"use client";

import { type ReactNode } from "react";
import { useAuth } from "../context/auth-context";
import { AuthPage } from "./auth";

export function AuthGate({ children }: { children: ReactNode }) {
  const { isReady, user } = useAuth();

  if (!isReady) {
    return <main className="min-h-screen bg-white" />;
  }

  if (!user) {
    return <AuthPage mode="login" />;
  }

  return children;
}
