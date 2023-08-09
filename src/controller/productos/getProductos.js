import {prisma} from '../../db.js'

export const getProductos = async (req, res) => {
    try {
        const productos = await prisma.productos.findMany(
            {
                include: {
                    categoria :true
                }
            }
        )
        res.status(200).json(productos);
    } catch (error) {
        res.json({'message': error.message});
    }
}