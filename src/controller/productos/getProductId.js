import {prisma} from '../../db.js'

export const getProductId = async (req, res) => {
    try {
        const productoById = await prisma.productos.findFirst({
            where: {
                id: parseInt(req.params.id) //convertimos el valor de la url en INT
            },
            include: {
                categoria: true
            }
        })
        if (!productoById) {
            res.json({error: 'no se encontro nada'})
        }
        res.json(productoById)
    } catch (error) {
        res.json({'message': error.message});
    }
}