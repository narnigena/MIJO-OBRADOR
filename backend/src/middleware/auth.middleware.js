import jwt from "jsonwebtoken";

function verificarToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        mensaje: "No estás autenticado",
      });
    }

    const partes = authHeader.split(" ");

    if (partes.length !== 2 || partes[0] !== "Bearer") {
      return res.status(401).json({
        mensaje: "Formato de token incorrecto",
      });
    }

    const token = partes[1];

    const usuario = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.usuario = usuario;

    next();
  } catch (error) {
    return res.status(401).json({
      mensaje: "Token inválido o caducado",
    });
  }
}

export default verificarToken;