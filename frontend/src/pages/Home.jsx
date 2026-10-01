import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductos } from "../services/api.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then(setProductos).catch(console.error);
  }, []);

  const destacados = productos.filter((producto) => producto.destacado).slice(0, 3);

  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">Martos · Jaén</span>
          <h1>Pan hecho con<br /><em>tiempo.</em></h1>
          <p>
            Una historia familiar convertida en oficio.
            Tradición, trabajo manual y nuevas formas de acercar
            el obrador a nuestro pueblo.
          </p>
          <Link className="button" to="/productos">Ver productos</Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=85"
            alt="Pan artesanal"
          />
        </div>
      </section>

      <section className="intro">
        <span className="eyebrow">Una historia que continúa</span>
        <h2>Del trabajo de unas manos a una nueva generación.</h2>
        <p>
          Un obrador nacido del esfuerzo de una familia que llegó a Martos
          y encontró aquí un lugar donde construir su futuro.
        </p>
        <Link to="/historia" className="text-link">Conocer nuestra historia →</Link>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Del horno</span>
            <h2>Lo que hacemos</h2>
          </div>
          <Link to="/productos" className="text-link">Ver todo →</Link>
        </div>

        <div className="product-grid">
          {destacados.map((producto) => (
            <ProductCard key={producto._id} producto={producto} />
          ))}
        </div>
      </section>
    </>
  );
}
