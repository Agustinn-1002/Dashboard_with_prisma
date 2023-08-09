import express from 'express';
import productosRoutes from './routes/productos.routes.js'
import categoriasRoutes from './routes/categorias.routes.js'

const app = express();

app.use(express.json());

app.use('/api', productosRoutes)
app.use('/api', categoriasRoutes)


app.listen(3000);
console.log('listening on port 3000');