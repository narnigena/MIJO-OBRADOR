import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  actualizarProducto,
  crearProducto,
  getProducto
} from "../services/api.js";
import ProductFields from "../components/ProductForm.jsx";

const initialState = {
  nombre: "",
  descripcion: "",
  precio: "",
  categoria: "Pan",
  ingredientes: "",
  imagen: "",
  disponible: true,
  destacado: false
};

export default function ProductoForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    getProducto(id)
      .then((producto) => {
        setForm({
          ...producto,
          ingredientes: producto.ingredientes.join(", ")
        });
      })
      .catch((err) => setError(err.message));
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const payload = {
      ...form,
      precio: Number(form.precio),
      ingredientes: form.ingredientes
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    };

    try {
      if (id) {
        await actualizarProducto(id, payload);
      } else {
        await crearProducto(payload);
      }

      navigate("/admin");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="section form-page">
      <Link to="/admin" className="text-link">← Volver a administración</Link>

      <div className="page-heading">
        <span className="eyebrow">CRUD · {id ? "Editar" : "Crear"}</span>
        <h1>{id ? "Editar producto" : "Nuevo producto"}</h1>
      </div>

      {error && <p className="error">{error}</p>}

      <form className="product-form" onSubmit={handleSubmit}>
        <ProductFields form={form} setForm={setForm} />

        <button className="button" type="submit">
          {id ? "Guardar cambios" : "Crear producto"}
        </button>
      </form>
    </section>
  );
}
