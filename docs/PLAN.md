# PLAN — PEC 5 Obrador Martos

## 1. Problema

El obrador necesita trasladar parte de su catálogo y comunicación tradicional a una experiencia digital sencilla.

## 2. Objetivo técnico

Construir una aplicación fullstack donde React consuma una API REST desarrollada con Express y ésta gestione productos almacenados en MongoDB mediante Mongoose.

## 3. Entidad CRUD

Producto.

Campos:
- nombre
- descripcion
- precio
- categoria
- ingredientes
- imagen
- disponible
- destacado

## 4. Arquitectura

React
↓
services/api.js
↓
Express REST API
↓
Controllers
↓
Mongoose
↓
MongoDB Atlas

## 5. Fases

1. Crear estructura.
2. Configurar Express.
3. Configurar MongoDB/Mongoose.
4. Crear modelo Producto.
5. Crear CRUD REST.
6. Probar API.
7. Crear frontend React.
8. Conectar frontend con API.
9. Crear interfaz pública.
10. Crear panel CRUD.
11. Documentar IA.
12. Preparar GitHub y despliegue.

## 6. Criterios de aceptación

- La API responde correctamente.
- MongoDB guarda los productos.
- React obtiene productos desde la API.
- Se puede crear, editar y eliminar.
- Los errores reciben respuestas JSON.
- No hay credenciales reales dentro del repositorio.
- El proyecto puede instalarse desde cero.
