import { prisma } from "../../db.js";

export const putProducto = async (req, res) => {
    
        const actualizarProducto = await prisma.productos.update({
            where:{
                id: parseInt(req.params.id)
            },
            data: req.body,
            include: {
				categoria: true,
			},
            
        })
        res.json(actualizarProducto);
   
}
