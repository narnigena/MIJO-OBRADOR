import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // Si no hay token, no puede entrar en Administración
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Si hay token, puede entrar
  return children;
}