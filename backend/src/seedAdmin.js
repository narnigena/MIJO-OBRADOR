import dotenv from "dotenv";
dotenv.config();

import bcrypt from "bcryptjs";
import conectarDB from "./config/db.js";
import Usuario from "./models/Usuario.js";

async function crearAdmin() {
  try {
    await conectarDB();

    const email = "admin@obrador.com";
    const password = "Obrador2026";

    const usuarioExistente = await Usuario.findOne({
      email,
    });

    if (usuarioExistente) {
      console.log("El usuario administrador ya existe");
      process.exit(0);
    }

    const passwordEncriptada = await bcrypt.hash(
      password,
      10
    );

    await Usuario.create({
      nombre: "Administrador",
      email,
      password: passwordEncriptada,
    });

    console.log("Usuario administrador creado");
    console.log("Email:", email);
    console.log("Contraseña:", password);

    process.exit(0);
  } catch (error) {
    console.error("Error creando administrador:", error);
    process.exit(1);
  }
}

crearAdmin();