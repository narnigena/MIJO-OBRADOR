import { useEffect, useMemo, useState } from "react";
import { getProductos } from "../services/api.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState("Todos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductos()
      .then(setProductos)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))];

  const filtrados = useMemo(() => {
    if (categoria === "Todos") return productos;
    return productos.filter((p) => p.categoria === categoria);
  }, [productos, categoria]);

  return (
    <section className="section products-page">
      <div className="page-heading">
        <span className="eyebrow">Nuestro catálogo</span>
        <h1>Hecho aquí.</h1>
        <p>Productos elaborados en el obrador con ingredientes sencillos y tiempo.</p>
      </div>

      <div className="filters">
        {categorias.map((item) => (
          <button
            key={item}
            className={categoria === item ? "active" : ""}
            onClick={() => setCategoria(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-grid">
          {filtrados.map((producto) => (
            <ProductCard key={producto._id} producto={producto} />
          ))}
        </div>
      )}
    </section>
  );
}
