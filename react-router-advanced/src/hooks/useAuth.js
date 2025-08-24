// src/hooks/useAuth.js
import { useState } from "react";

export function useAuth() {
  // fake auth state (you could improve this later)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}
