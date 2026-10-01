import mongoose from "mongoose";

export default async function conectarDB() {
  if (!process.env.MONGODB_URI) {
    throw new Error("Falta MONGODB_URI en el archivo .env");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB conectado");
}
