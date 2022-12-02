let router = require ('express').Router () //requiero el metodo de enrrutamiento de express
const controllers = require ('../controllers/itinerary')
let { create, deleteItinerary, EditItinerary, CaptureItinerary } = require ('../controllers/itinerary') //desestructuro el controlador de user para traerme los metodos que necesito enrrutar, mas adelante si quier agregar alguno los voy a poder agregar dentro de las {} y utilizando una , para separarlos

const passport = require("../config/passport");


router.route('/').post(create) //en esta ruta voy a crear los usuarios y uso post para postear el usuario creado 
router.delete('/:id' ,passport.authenticate("jwt", { session: false }) ,deleteItinerary) //en esta ruta voy a crear los usuarios y uso post para postear el usuario creado 
router.put('/:id' ,passport.authenticate("jwt", { session: false }) ,EditItinerary) //en esta ruta voy a crear los usuarios y uso post para postear el usuario creado 
router.route('/').get(CaptureItinerary) //en esta ruta voy a crear los usuarios y uso post para postear el usuario creado 



module.exports = router;