const Reaction = require('../models/Reaction') //requiero el modelo que necesito controlar

const controller ={
    create: async (req,res) =>{ //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion

        try {
        let new_reaction = await Reaction.create(req.body) //defino variable que va a esperar la creacion de un nuevo documento (un usuario en este caso)
        
        res.status(201).json({//el status de exito de creacion es 201
            id: new_reaction,
            success: true,
            messagge: 'reactionCreated'
        }) 
        
        } catch (error) {
            res.status(400).json({
                success: false,
                messagge: 'reactionNoCreated',
                error: error.status
            })
        }
        
        },
}
module.exports = controller //exporto el controlador