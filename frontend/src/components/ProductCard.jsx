import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ producto }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link to={`/productos/${producto._id}`}>
        <img src={producto.imagen} alt={producto.nombre} />
      </Link>

      <div className="product-card-content">
        <span className="eyebrow">{producto.categoria}</span>
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>

        <div className="product-bottom">
          <strong>{producto.precio.toFixed(2)} €</strong>
          <button onClick={() => addToCart(producto)}>
            Añadir
          </button>
        </div>
      </div>
    </article>
  );
}
