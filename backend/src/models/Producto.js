import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
      minlength: 2
    },
    descripcion: {
      type: String,
      required: [true, "La descripción es obligatoria"],
      trim: true
    },
    precio: {
      type: Number,
      required: [true, "El precio es obligatorio"],
      min: [0, "El precio no puede ser negativo"]
    },
    categoria: {
      type: String,
      required: [true, "La categoría es obligatoria"],
      enum: ["Pan", "Dulce", "Salado", "Temporada"]
    },
    ingredientes: {
      type: [String],
      default: []
    },
    imagen: {
      type: String,
      default: ""
    },
    disponible: {
      type: Boolean,
      default: true
    },
    destacado: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Producto", productoSchema);
