import { Router } from "express";
import { getProductos} from "../controller/productos/getProductos.js";
import { getProductId} from "../controller/productos/getProductId.js";
import { postProducto } from "../controller/productos/postproducto.js";
import { deleteProducto } from "../controller/productos/deleteProducto.js";
import { putProducto } from "../controller/productos/putProducto.js";

const router = Router();

router.get('/productos', getProductos)
router.get('/productos/:id', getProductId)
router.post('/productos', postProducto)
router.delete('/productos/:id', deleteProducto)
router.put('/productos/:id', putProducto)

export default router