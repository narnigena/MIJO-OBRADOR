import dotenv from "dotenv";
dotenv.config();

import conectarDB from "./config/db.js";
import Producto from "./models/Producto.js";

const productos = [
  {
    nombre: "Pan de masa madre",
    descripcion: "Pan elaborado con fermentación lenta y masa madre.",
    precio: 4.5,
    categoria: "Pan",
    ingredientes: ["Harina de trigo", "Agua", "Masa madre", "Sal"],
    imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    disponible: true,
    destacado: true
  },
  {
    nombre: "Hogaza de pueblo",
    descripcion: "Hogaza de corteza crujiente y miga alveolada.",
    precio: 5.2,
    categoria: "Pan",
    ingredientes: ["Harina", "Agua", "Masa madre", "Sal"],
    imagen: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=80",
    disponible: true,
    destacado: false
  },
  {
    nombre: "Bollo de canela",
    descripcion: "Bollo artesanal de canela, horneado cada mañana.",
    precio: 2.8,
    categoria: "Dulce",
    ingredientes: ["Harina", "Canela", "Azúcar", "Mantequilla"],
    imagen: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1200&q=80",
    disponible: true,
    destacado: true
  },
  {
    nombre: "Empanada artesana",
    descripcion: "Masa fina y relleno preparado en el propio obrador.",
    precio: 3.9,
    categoria: "Salado",
    ingredientes: ["Harina", "Aceite de oliva", "Verduras", "Especias"],
    imagen: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    disponible: true,
    destacado: false
  }
];

async function seed() {
  await conectarDB();
  await Producto.deleteMany({});
  await Producto.insertMany(productos);
  console.log("Productos de prueba insertados");
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
