const mongoose = require('mongoose') //requiero el paquete que estamos usando (mongoose)
const schema = new mongoose.Schema({ //creo el esquema que necesita el modelo
    //propiedades de mi estructura de datos, a cada una le indico el tipo de dato que va a ser y especifico si es requerido o no es requerido
    cityid: {type: mongoose.Types.ObjectId,ref:'cities', required: true}, //le paso id de la base de datos de users
    name: {type: String, required: true},
    photo: {type: String, required: true},
    description: {type: String, required: true},
    price:{type: Number, required: true},
    duration: {type: Number, required: true},
    userId: {type: mongoose.Types.ObjectId,ref:'users', required: true}, //le paso id de la base de datos de users
}) 

const Itinerary = mongoose.model('itineraries',schema)
module.exports= Itinerary