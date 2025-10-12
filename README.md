# API Basica en Nodejs

1. Inicializar el proyecto:
   
```bash
mkdir mi-api
cd mi-api
npm init -y
```

   
2. Instala las dependencias:
```bash
npm install express
npm install -D nodemon
```


3. Crear el archivo principal (index.js)
```javascript
npm install express
npm install -D nodemon
.
.
.
```


4. Configura el package.json para desarrollo:
```json
"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
}
```


5. Ejecutar la aplicación:
```json
npm run dev
```

## Endpoints diponibles
+ GET /api/usuarios - Obtiene todos los usuarios
+ POST /api/usuarios - Crea un nuevo usuario
+ GET /api/usuarios/:id - Obtiene un usuario por ID

### Ejemplo de uso con curl:

Crear un usuario:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"nombre":"Carlos"}' http://localhost:3000/api/usuarios
```

Obtener usuarios:
```bash
curl http://localhost:3000/api/usuarios
```

### Para producción:

1. Instalar dependencias de producción:
```bash
npm install --only=production
```

2. Ejecutar :
```bash
npm start
```


## Recomendaciones adicionales:

1. Instala y configura CORS si necesitas acceso desde frontends:
```bash
npm install cors
```
```javascript
const cors = require('cors');
app.use(cors());
```

2. Para variables de entorno, usar el paquete dotenv:
```bash
npm install cors
```
Crear un archivo  .env:
```env
PORT=3000
```
