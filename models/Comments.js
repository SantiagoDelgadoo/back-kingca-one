const mongoose = require('mongoose') //requiero el paquete que estamos usando (mongoose)
const schema = new mongoose.Schema({ 
    comment: {type: String, required: true},
    date : {type: Date, required: true},
    showId: {type: mongoose.Types.ObjectId,ref:'events', required: true},
    userId: {type: mongoose.Types.ObjectId,ref:'users', required: true}, //le paso id de la base de datos de users
}) 

const Comment = mongoose.model('comments',schema)
module.exports= Comment