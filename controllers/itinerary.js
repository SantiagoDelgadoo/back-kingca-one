const Itinerary = require('../models/Itinerary') //requiero el modelo que necesito controlar
const controller ={
    create: async (req,res) =>{ //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion

        try {
        let new_itinerary = await Itinerary.create(req.body) //defino variable que va a esperar la creacion de un nuevo documento (un usuario en este caso)
        
        res.status(201).json({//el status de exito de creacion es 201
            id: new_itinerary._id,
            success: true,
            messagge: 'itineraryCreated'
        }) 
        
        } catch (error) {
            res.status(400).json({
                success: false,
                messagge: 'itineraryNoCreated',
                error: error.status
            })
        }
        
        },


        deleteItinerary: async (req,res) =>{ //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion
            let {id} = req.params
            try {
            let delete_itinerary = await Itinerary.findOneAndDelete({_id: id})
            res.status(201).json({//el status de exito de creacion es 201
                id: delete_itinerary._id,
                success: true,
                messagge: 'itineraryDelete'
            }) 
            
            } catch (error) {
                res.status(400).json({
                    success: false,
                    messagge: 'itineraryNoDelete',
                    error: error.status
                })
            }
            
            },

           EditItinerary: async (req,res) =>{ //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion
                let {id} = req.params
                try {
                let editItinerary = await Itinerary.findByIdAndUpdate({_id: id})
                res.status(201).json({//el status de exito de creacion es 201
                    id: editItinerary._id,
                    success: true,
                    messagge: 'itineraryEdit'
                }) 
                
                } catch (error) {
                    res.status(400).json({
                        success: false,
                        messagge: 'itineraryNoEdit',
                        error: error.status
                    })
                }
                
                },

                CaptureItinerary: async (req,res) =>{ //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion
                    /* let {cityId} = req.query */
                    let query = {}
                    if (req.query.cityId) {
                        query={...query,
                        cityid:req.query.cityId}
                    }
                    if (req.query.userId) {
                        query={...query,
                        userId:req.query.userId}
                    }
                    try {
                    let captureItinerary = await Itinerary.find(query).populate("userId","_id")
                    res.status(201).json({//el status de exito de creacion es 201
                        id: captureItinerary,
                        success: true,
                        messagge: 'captureItinerary'
                    }) 
                    
                    } catch (error) {
                        res.status(400).json({
                            success: false,
                            messagge: 'noCaptureItinerary',
                            error: error.status
                        })
                    }
                    
                    },
}
module.exports = controller //exporto el controlador