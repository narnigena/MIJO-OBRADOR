# PEC 5 — Obrador Martos

Mini aplicación fullstack para un obrador artesanal de pan de Martos (Jaén).

## Objetivo

La aplicación une el valor del trabajo artesanal y la historia familiar del obrador con una gestión digital sencilla del catálogo.

La entidad principal del CRUD es **Producto**.

## Tecnologías

- Frontend: React + Vite + React Router
- Backend: Node.js + Express
- Base de datos: MongoDB Atlas
- ODM: Mongoose
- Variables de entorno: dotenv
- Pruebas API: `.http` y Postman

## Funcionalidades

### Parte pública
- Inicio
- Historia del obrador
- Catálogo de productos
- Filtros por categoría
- Producto destacado
- Carrito local
- Formulario de pedido

### CRUD
- GET todos los productos
- GET producto por ID
- POST crear producto
- PUT actualizar producto
- DELETE eliminar producto

### Administración
- Listado de productos
- Crear producto
- Editar producto
- Eliminar producto

> Para mantener el alcance de la PEC 5 controlado, el pedido se gestiona como formulario frontend y no constituye una segunda entidad CRUD.

## Estructura

```text
PEC5_Obrador_Martos/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
├── docs/
│   ├── PLAN.md
│   ├── AGENTS.md
│   ├── SKILLS.md
│   ├── TASKS.md
│   └── REFLEXION_IA.md
├── tests/
│   └── productos.http
└── postman/
    └── PEC5_Obrador_Martos.postman_collection.json
```

## Instalación

### 1. Backend

```bash
cd backend
npm install
```

Crear `.env` a partir de `.env.example`:

```env
PORT=4000
MONGODB_URI=mongodb+srv://USUARIO:CONTRASEÑA@CLUSTER.mongodb.net/obrador_martos
```

Arrancar:

```bash
npm run dev
```

API:

```text
http://localhost:4000
```

### 2. Frontend

En otra terminal:

```bash
cd frontend
npm install
```

Crear `.env`:

```env
VITE_API_URL=http://localhost:4000
```

Arrancar:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

## Endpoints

| Método | Endpoint | Función |
|---|---|---|
| GET | `/api/productos` | Obtener productos |
| GET | `/api/productos/:id` | Obtener un producto |
| POST | `/api/productos` | Crear |
| PUT | `/api/productos/:id` | Actualizar |
| DELETE | `/api/productos/:id` | Eliminar |
| GET | `/api/health` | Comprobar API |

## Despliegue

Backend recomendado: Vercel/Render/Railway.

Frontend recomendado: Vercel.

En producción hay que cambiar `VITE_API_URL` por la URL pública del backend y configurar `MONGODB_URI` en las variables de entorno del proveedor.

## IA utilizada

La IA se utiliza como herramienta de apoyo para:
- planificación de arquitectura;
- generación inicial de estructuras;
- revisión de errores;
- refactorización;
- documentación;
- comprobación de casos de uso.

La lógica final ha sido revisada y adaptada al proyecto.
