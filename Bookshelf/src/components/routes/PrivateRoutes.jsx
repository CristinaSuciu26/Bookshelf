import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Dacă nu e logat → du-l la /register
    return <Navigate to="/register" />;
  }

  return children; // altfel, afișează componenta protejată
}
