const mongoose = require('mongoose') //requiero el paquete que estamos usando (mongoose)
const schema = new mongoose.Schema({ //creo el esquema que necesita el modelo
    //propiedades de mi estructura de datos, a cada una le indico el tipo de dato que va a ser y especifico si es requerido o no es requerido
    name: {type: String, required: true},
    continent: {type: String ,required: true},
    photo: {type: String, required: true},
    population: {type: String, required: true},
    userid: {type: mongoose.Types.ObjectId,ref:'users', required: true}, //le paso id de la base de datos de users
}) 

const City = mongoose.model('cities',schema)
module.exports= City


