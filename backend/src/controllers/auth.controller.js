import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        mensaje: "Email y contraseña son obligatorios",
      });
    }

    const usuario = await Usuario.findOne({
      email: email.toLowerCase(),
    });

    if (!usuario) {
      return res.status(401).json({
        mensaje: "Email o contraseña incorrectos",
      });
    }

    const passwordCorrecta = await bcrypt.compare(
      password,
      usuario.password
    );

    if (!passwordCorrecta) {
      return res.status(401).json({
        mensaje: "Email o contraseña incorrectos",
      });
    }

    const token = jwt.sign(
      {
        id: usuario._id,
        email: usuario.email,
        nombre: usuario.nombre,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );

    res.json({
      mensaje: "Login correcto",
      token,
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
      },
    });
  } catch (error) {
    console.error("ERROR LOGIN:", error);

    res.status(500).json({
      mensaje: "Error interno del servidor",
    });
  }
}
