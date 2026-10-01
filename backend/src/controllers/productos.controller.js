import mongoose from "mongoose";
import Producto from "../models/Producto.js";

function validarId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

export async function obtenerProductos(req, res) {
  try {
    const productos = await Producto.find().sort({ destacado: -1, createdAt: -1 });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener los productos" });
  }
}

export async function obtenerProducto(req, res) {
  try {
    const { id } = req.params;

    if (!validarId(id)) {
      return res.status(400).json({ error: "ID de producto no válido" });
    }

    const producto = await Producto.findById(id);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
}

export async function crearProducto(req, res) {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({
      error: "No se pudo crear el producto",
      detalle: error.message
    });
  }
}

export async function actualizarProducto(req, res) {
  try {
    const { id } = req.params;

    if (!validarId(id)) {
      return res.status(400).json({ error: "ID de producto no válido" });
    }

    const producto = await Producto.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(producto);
  } catch (error) {
    res.status(400).json({
      error: "No se pudo actualizar el producto",
      detalle: error.message
    });
  }
}

export async function eliminarProducto(req, res) {
  try {
    const { id } = req.params;

    if (!validarId(id)) {
      return res.status(400).json({ error: "ID de producto no válido" });
    }

    const producto = await Producto.findByIdAndDelete(id);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "No se pudo eliminar el producto" });
  }
}
