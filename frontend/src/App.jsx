import { Routes, Route, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import Historia from "./pages/Historia.jsx";
import Productos from "./pages/Productos.jsx";
import ProductoDetalle from "./pages/ProductoDetalle.jsx";
import Admin from "./pages/Admin.jsx";
import ProductoForm from "./pages/ProductoForm.jsx";
import Carrito from "./pages/Carrito.jsx";
import { CartProvider, useCart } from "./context/CartContext.jsx";

function Header() {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <Link className="logo" to="/">OBRADOR<br />MARTOS</Link>

      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/historia">Nuestra historia</NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/admin">Administración</NavLink>
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
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/nuevo" element={<ProductoForm />} />
          <Route path="/admin/editar/:id" element={<ProductoForm />} />
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
