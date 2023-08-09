import { prisma } from "../../db.js"

export const postProducto = async (req, res) => {
    try {
        const newProduct = await prisma.productos.create({
            data: req.body,
        })
        res.json(newProduct)
    } catch (error) {
        res.json({'message': error.message}); 
    }

}