//primero requiero el modelo que necesito para controlar
const Hotel = require('../models/Hotel')
// segundo defino el objeto controller (que va a controlar el modelo)

const controller={
    //cada uno de los metodos son async
    //metodo para crear un documento de Usuario
    create: async(req,res)=>{
        try {
            let new_hotel= await Hotel.create(req.body)
            res.status(201).json({
                id: new_hotel._id,
                success: true,
                message:"el usuario se creo satisfactoriamente"
            })

            } catch (error) {
            res.status(400).json(
                {
                    success: false,
                    message: error.message
                }
            )
        }
    }
}


//tercero exporto el controlador
module.exports = controller