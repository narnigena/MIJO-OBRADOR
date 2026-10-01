import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";



export default function Carrito() {
  const {
    items,
    removeFromCart,
    changeQuantity,
    totalPrice
  } = useCart();

  if (items.length === 0) {
    return (
      <section className="section empty">
        <span className="eyebrow">Tu pedido</span>

        <h1>Aún no has elegido nada.</h1>

        <Link className="button" to="/productos">
          Ver productos
        </Link>
      </section>
    );
  }

  return (
    <section className="section cart-page">

      <div className="page-heading">
        <span className="eyebrow">Tu pedido</span>
        <h1>Lo que te llevas.</h1>
      </div>

      <div className="cart-list">

        {items.map((item) => (
          <article className="cart-item" key={item._id}>

            <img
              src={item.imagen}
              alt={item.nombre}
            />

            <div>
              <h3>{item.nombre}</h3>

              <p>
                {item.precio.toFixed(2)} €
              </p>
            </div>

            <input
              type="number"
              min="1"
              value={item.cantidad}
              onChange={(e) =>
                changeQuantity(
                  item._id,
                  Number(e.target.value)
                )
              }
            />

            <strong>
              {(item.precio * item.cantidad).toFixed(2)} €
            </strong>

            <button
              onClick={() => removeFromCart(item._id)}
            >
              Eliminar
            </button>

          </article>
        ))}

      </div>

      <div className="cart-total">
        <span>Total</span>

        <strong>
          {totalPrice.toFixed(2)} €
        </strong>
      </div>

      <form
        className="order-form"
        onSubmit={(e) => {
          e.preventDefault();

          alert(
            "Pedido preparado. En una versión real se enviaría al obrador."
          );
        }}
      >

        <h2>Haz tu pedido</h2>

        <label>
          Nombre

          <input
            type="text"
            name="nombre"
            required
          />
        </label>

        <label>
          Teléfono

          <input
            type="tel"
            name="telefono"
            required
          />
        </label>

        <label>
          Comentario

          <textarea
            name="comentario"
            placeholder="Indica cuándo quieres recogerlo..."
          />
        </label>

        <button
          className="button"
          type="submit"
        >
          Enviar pedido
        </button>

      </form>

    </section>
  );
}