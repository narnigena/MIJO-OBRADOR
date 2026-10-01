const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    },
    ...options
  });

  if (response.status === 204) {
    return null;
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "Ha ocurrido un error");
  }

  return data;
}

export function getProductos() {
  return request("/api/productos");
}

export function getProducto(id) {
  return request(`/api/productos/${id}`);
}

export function crearProducto(producto) {
  return request("/api/productos", {
    method: "POST",
    body: JSON.stringify(producto)
  });
}

export function actualizarProducto(id, producto) {
  return request(`/api/productos/${id}`, {
    method: "PUT",
    body: JSON.stringify(producto)
  });
}

export function eliminarProducto(id) {
  return request(`/api/productos/${id}`, {
    method: "DELETE"
  });
}
