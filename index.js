const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

//const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT;


// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

// Datos de ejemplo
let usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'María' }
];

// Ruta GET /api/usuarios
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

// Ruta POST /api/usuarios
app.post('/api/usuarios', (req, res) => {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre
  };
  
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// Ruta GET por ID
app.get('/api/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).send('Usuario no encontrado');
  res.json(usuario);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});