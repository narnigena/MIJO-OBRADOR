import express from "express";
import cors from "cors";
import productosRoutes from "./routes/productos.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    proyecto: "Obrador Martos",
    mensaje: "API funcionando"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    servicio: "obrador-martos-api"
  });
});

app.use("/api/productos", productosRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada"
  });
});

app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).json({
    error: "Error interno del servidor"
  });
});

export default app;
