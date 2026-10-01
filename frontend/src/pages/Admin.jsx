import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { eliminarProducto, getProductos } from "../services/api.js";

export default function Admin() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");

  async function cargar() {
    try {
      setProductos(await getProductos());
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    cargar();
  }, []);

  async function eliminar(id) {
    const confirmar = window.confirm("¿Eliminar este producto?");
    if (!confirmar) return;

    try {
      await eliminarProducto(id);
      await cargar();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="section admin">
      <div className="admin-heading">
        <div>
          <span className="eyebrow">CRUD</span>
          <h1>Administrar productos</h1>
        </div>

        <Link className="button" to="/admin/nuevo">
          + Nuevo producto
        </Link>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="admin-table">
        <div className="admin-row admin-header">
          <span>Producto</span>
          <span>Categoría</span>
          <span>Precio</span>
          <span>Estado</span>
          <span>Acciones</span>
        </div>

        {productos.map((producto) => (
          <div className="admin-row" key={producto._id}>
            <strong>{producto.nombre}</strong>
            <span>{producto.categoria}</span>
            <span>{producto.precio.toFixed(2)} €</span>
            <span>{producto.disponible ? "Disponible" : "No disponible"}</span>
            <span className="actions">
              <Link to={`/admin/editar/${producto._id}`}>Editar</Link>
              <button onClick={() => eliminar(producto._id)}>Eliminar</button>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
