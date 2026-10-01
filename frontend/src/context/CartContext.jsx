import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addToCart(producto) {
    setItems((current) => {
      const found = current.find((item) => item._id === producto._id);

      if (found) {
        return current.map((item) =>
          item._id === producto._id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...current, { ...producto, cantidad: 1 }];
    });
  }

  function removeFromCart(id) {
    setItems((current) => current.filter((item) => item._id !== id));
  }

  function changeQuantity(id, cantidad) {
    if (cantidad < 1) {
      removeFromCart(id);
      return;
    }

    setItems((current) =>
      current.map((item) =>
        item._id === id ? { ...item, cantidad } : item
      )
    );
  }

  const totalItems = useMemo(
    () => items.reduce((total, item) => total + item.cantidad, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((total, item) => total + item.precio * item.cantidad, 0),
    [items]
  );

  const value = {
    items,
    addToCart,
    removeFromCart,
    changeQuantity,
    totalItems,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
