import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api.js";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setCargando(true);

    try {
      await login(email, password);

      // Login correcto → administración
      navigate("/admin");
    } catch (error) {
      console.error("ERROR LOGIN:", error);

      setError(
        error.message || "Email o contraseña incorrectos"
      );
    } finally {
      setCargando(false);
    }
  }

  return (
    <main className="login-page">

      <div className="login-card">

        <span className="eyebrow">
          OBRADOR MARTOS
        </span>

        <h1>Administración</h1>

        <p>
          Inicia sesión para gestionar los productos
          del obrador.
        </p>

        <form onSubmit={handleSubmit}>

          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@obrador.com"
            required
          />

          <label htmlFor="password">
            Contraseña
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="button"
            disabled={cargando}
          >
            {cargando
              ? "Accediendo..."
              : "Iniciar sesión"}
          </button>

        </form>

      </div>

    </main>
  );
}