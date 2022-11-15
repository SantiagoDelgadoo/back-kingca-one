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
            query={name:{ $regex: req.query.name, $options: "s && i" }}
        }
        if (req.query.order){
            order={name:req.query.order}
        }

        console.log(req.query.name);
            try {
            let arrayHotels = await Hotel.find(query).sort(order)
            if (arrayHotels){
                res.status(200).json({
                    response : arrayHotels,
                    success: true,
                    message:"el hotel se creo correctamente"    
                })
                }
                else{
                    res.status(404).json({
                        success: false,
                        message:"no hay hoteles"    
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
    },

    readHotel: async (req, res) => {
        let { id } = req.params;
    
        try {
          const hotel = await Hotel.findById({ _id: id }).populate("userId", ("name & photo"));
          hotel
            ? res.status(200).json({
                hotel: hotel,
                success: true,
                message: "read hotel",
              })
            : res.status(400).json({
                success: false,
                message: "hotel not found",
              });
        } catch (error) {
          res.status(400).json({
            success: false,
            message: error.message,
          });
        }
      },

}


//tercero exporto el controlador
module.exports = controller