import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Historia from "./pages/Historia.jsx";
import Productos from "./pages/Productos.jsx";
import ProductoDetalle from "./pages/ProductoDetalle.jsx";
import Admin from "./pages/Admin.jsx";
import ProductoForm from "./pages/ProductoForm.jsx";
import Carrito from "./pages/Carrito.jsx";
import { CartProvider, useCart } from "./context/CartContext.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function Header() {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <Link className="logo" to="/">OBRADOR<br />MARTOS</Link>

      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/historia">Nuestra historia</NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/login">Login</NavLink>
        <Link className="cart-link" to="/carrito">
          Pedido ({totalItems})
        </Link>
      </nav>
    </header>
  );
}

function App() {
  return (
    <CartProvider>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/carrito" element={<Carrito />} />

          <Route path="/login" element={<Login />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/nuevo"
              element={
                <ProtectedRoute>
                  <ProductoForm />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/editar/:id"
              element={
                <ProtectedRoute>
                  <ProductoForm />
                </ProtectedRoute>
              }
            />

        </Routes>
      </main>

      <footer>
        <p>Obrador Martos · Martos, Jaén</p>
        <p>Pan hecho con tiempo, oficio y memoria.</p>
      </footer>
    </CartProvider>
  );
}

export default App;
