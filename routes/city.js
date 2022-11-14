let router = require ('express').Router () //requiero el metodo de enrrutamiento de express
const controllers = require ('../controllers/city')
let { create,deleteCity,EditCity,SeeCity } = require ('../controllers/city') //desestructuro el controlador de user para traerme los metodos que necesito enrrutar, mas adelante si quier agregar alguno los voy a poder agregar dentro de las {} y utilizando una , para separarlos

router.route('/').post(create) //en esta ruta voy a crear los usuarios y uso post para postear el usuario creado 
router.route('/:id').delete(deleteCity) //en esta ruta voy a crear los usuarios y uso post para postear el usuario creado 
router.route('/:id').put(EditCity) //en esta ruta voy a crear los usuarios y uso post para postear el usuario creado 
router.route('/').get(SeeCity) //en esta ruta voy a crear los usuarios y uso post para postear el usuario creado 



module.exports = router;