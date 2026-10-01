import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import conectarDB from "./src/config/db.js";

const PORT = process.env.PORT || 4000;

async function iniciarServidor() {
  try {
    await conectarDB();

    app.listen(PORT, () => {
      console.log(`API OBRADOR MARTOS ARRANCADA EN http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("No se pudo iniciar la API:", error.message);
    process.exit(1);
  }
}

iniciarServidor();
