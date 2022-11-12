const Activity = require('../models/Activity') //requiero el modelo que necesito controlar
const controller ={
    create: async (req,res) =>{ //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion

        try {
        let new_activity = await Activity.create(req.body) //defino variable que va a esperar la creacion de un nuevo documento (un usuario en este caso)
        
        res.status(201).json({//el status de exito de creacion es 201
            id: new_activity._id,
            success: true,
            messagge: 'activityCreated'
        }) 
        
        } catch (error) {
            res.status(400).json({
                success: false,
                messagge: 'activityNoCreated',
                error: error.status
            })
        }
        
        },


        deleteActivity: async (req,res) =>{ //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion
            let {id} = req.params
            try {
            let delete_activity = await Activity.findOneAndDelete({_id: id})
            res.status(201).json({//el status de exito de creacion es 201
                id: delete_activity._id,
                success: true,
                messagge: 'activityDelete'
            }) 
            
            } catch (error) {
                res.status(400).json({
                    success: false,
                    messagge: 'activityNoDelete',
                    error: error.status
                })
            }
            
            },
}
module.exports = controller //exporto el controlador