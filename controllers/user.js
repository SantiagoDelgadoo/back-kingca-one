const User = require('../models/User') //requiero el modelo que necesito controlar
const bcrypsjs = require ('bcryptjs')
const crypto = require ('crypto')
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse } = require('../config/responses')
const controller ={
    // create: async (req,res) =>{ //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion

    //     try {
    //     let new_user = await User.create(req.body) //defino variable que va a esperar la creacion de un nuevo documento (un usuario en este caso)
        
    //     res.status(201).json({//el status de exito de creacion es 201
    //         id: new_user._id,
    //         success: true,
    //         messagge: 'userCreated'
    //     }) 
        
    //     } catch (error) {
    //         res.status(400).json({
    //             success: false,
    //             messagge: 'userNoCreated',
    //             error: error.status
    //         })
    //     }
        
    //     }

userRegister: async (req, res, next)=> {
    let {name, lastName, photo, age, email, password, role} = req.body
let verified = false
let logged = false
let code = crypto.randomBytes (10) .toString ('hex')
    password = bcrypsjs.hashSync(password, 10)
try {
    await User.create 
    ({name,
    lastName,
    photo,
    age,
    email,
    password,
    logged,
    role,
    verified,
    code})
await accountVerificationEmail(email,code)
return userSignedUpResponse (req, res)
} catch (error) {
    
}
}
}
module.exports = controller //exporto el controlador