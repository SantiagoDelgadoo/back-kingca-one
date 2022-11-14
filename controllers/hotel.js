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
    },

    read: async (req,res) => {
        let query={}
        let order = {}
        if (req.query.name){
            query=req.query.name
        }
        if (req.query.order){
            order={name:req.query.order}
        }

        console.log(req.query);
            try {
            let arrayHotels = await Hotel.find(query).sort(order)
            if (arrayHotels){
                res.status(200).json({
                    Response : arrayHotels,
                    success: true,
                    message:"el usuario se creo satisfactoriamente"    
                })
                }
                else{
                    res.status(404).json({
                        success: false,
                        message:"no hay usuarios"    
                    })  
                }
           
            
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