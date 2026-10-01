import express from "express";

import {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} from "../controllers/productos.controller.js";

import verificarToken from "../middleware/auth.middleware.js";

const router = express.Router();

// ------------------------------------
// RUTAS PÚBLICAS
// ------------------------------------

router.get("/", obtenerProductos);

router.get("/:id", obtenerProducto);

// ------------------------------------
// RUTAS PROTEGIDAS
// ------------------------------------

router.post("/", verificarToken, crearProducto);

router.put("/:id", verificarToken, actualizarProducto);

router.delete("/:id", verificarToken, eliminarProducto);

export default router;