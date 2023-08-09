import {prisma} from '../../db.js'

export const deleteProducto = async (req, res) => {
    
        const productoDelete = await prisma.productos.delete({
            where: {
                id: parseInt( req.params.id ) //convertimos el valor de la url en INT
            },
        });
        res.json(productoDelete)
 
}