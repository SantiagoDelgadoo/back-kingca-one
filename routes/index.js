let router = require("express").Router(); //requiero el metodo de enrrutamiento de express

let user = require("./user"); //ubicacion de las rutas de user
let city = require("./city"); //ubicacion de las rutas de user
let hotel = require("./hotel");
let activity = require("./activity"); //ubicacion de las rutas de user
let show = require("./show");

router.use('/user',user) //le obligo el enrrutador que use la palabra ./user para controlar las rutas de user 

router.use('/city',city) //le obligo el enrrutador que use la palabra ./user para controlar las rutas de user 

router.use('/hotel',hotel)
router.use('/show',show)
router.use('/activity',activity) //le obligo el enrrutador que use la palabra ./user para controlar las rutas de user 


module.exports = router;
