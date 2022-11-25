const User = require('../models/User') //requiero el modelo que necesito controlar
const controller ={
    create: async (req,res) =>{ //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion

        try {
        let new_user = await User.create(req.body) //defino variable que va a esperar la creacion de un nuevo documento (un usuario en este caso)
        
        res.status(201).json({//el status de exito de creacion es 201
            id: new_user._id,
            success: true,
            messagge: 'userCreated'
        }) 
        
        } catch (error) {
            res.status(400).json({
                success: false,
                messagge: 'userNoCreated',
                error: error.status
            })
        }
        
        }
}
module.exports = controller //exporto el controlador