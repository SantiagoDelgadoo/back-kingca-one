let router = require ('express').Router () //requiero el metodo de enrrutamiento de express

let user = require ('./user') //ubicacion de las rutas de user
let city = require ('./city') //ubicacion de las rutas de user

router.use('/user',user) //le obligo el enrrutador que use la palabra ./user para controlar las rutas de user 

router.use('/city',city) //le obligo el enrrutador que use la palabra ./user para controlar las rutas de user 





module.exports = router;
