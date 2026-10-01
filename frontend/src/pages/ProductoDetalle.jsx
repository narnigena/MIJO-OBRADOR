import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProducto } from "../services/api.js";
import { useCart } from "../context/CartContext.jsx";

export default function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    getProducto(id)
      .then(setProducto)
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return <section className="section"><p>{error}</p></section>;
  }

  if (!producto) {
    return <section className="section"><p>Cargando...</p></section>;
  }

  return (
    <section className="detail">
      <div className="detail-image">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>

      <div className="detail-copy">
        <Link to="/productos" className="text-link">← Volver</Link>
        <span className="eyebrow">{producto.categoria}</span>
        <h1>{producto.nombre}</h1>
        <p className="detail-price">{producto.precio.toFixed(2)} €</p>
        <p>{producto.descripcion}</p>

        <h3>Ingredientes</h3>
        <ul>
          {producto.ingredientes.map((ingrediente) => (
            <li key={ingrediente}>{ingrediente}</li>
          ))}
        </ul>

        <button
          className="button"
          disabled={!producto.disponible}
          onClick={() => addToCart(producto)}
        >
          {producto.disponible ? "Añadir al pedido" : "No disponible"}
        </button>
      </div>
    </section>
  );
}
