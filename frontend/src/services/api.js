const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

async function request(endpoint, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  // Si el usuario está logado, enviamos su token
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // Algunas peticiones DELETE pueden devolver 204
  if (response.status === 204) {
    return null;
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.mensaje || "Error en la petición"
    );
  }

  return data;
}


// ======================================================
// PRODUCTOS
// ======================================================

// Obtener todos los productos
// PÚBLICO
export async function getProductos() {
  return request("/api/productos");
}


// Obtener un producto por ID
// PÚBLICO
export async function getProducto(id) {
  return request(`/api/productos/${id}`);
}


// Crear producto
// REQUIERE LOGIN
export async function crearProducto(producto) {
  return request("/api/productos", {
    method: "POST",
    body: JSON.stringify(producto),
  });
}


// Editar producto
// REQUIERE LOGIN
export async function actualizarProducto(id, producto) {
  return request(`/api/productos/${id}`, {
    method: "PUT",
    body: JSON.stringify(producto),
  });
}


// Borrar producto
// REQUIERE LOGIN
export async function eliminarProducto(id) {
  return request(`/api/productos/${id}`, {
    method: "DELETE",
  });
}


// ======================================================
// AUTENTICACIÓN
// ======================================================

// Iniciar sesión
export async function login(email, password) {
  const response = await fetch(
    `${API_URL}/api/auth/login`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.mensaje || "Error al iniciar sesión"
    );
  }

  // Guardamos el JWT
  localStorage.setItem("token", data.token);

  // Guardamos los datos del usuario
  localStorage.setItem(
    "usuario",
    JSON.stringify(data.usuario)
  );

  return data;
}


// Cerrar sesión
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
}


// Comprobar si hay usuario logado
export function estaLogado() {
  return Boolean(
    localStorage.getItem("token")
  );
}


// Obtener usuario actual
export function obtenerUsuario() {
  const usuario = localStorage.getItem("usuario");

  if (!usuario) {
    return null;
  }

  try {
    return JSON.parse(usuario);
  } catch {
    return null;
  }
}