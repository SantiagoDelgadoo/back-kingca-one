let router = require ('express').Router () //requiero el metodo de enrrutamiento de express
const controllers = require ('../controllers/city')
let { create,deleteCity,EditCity,SeeCity,CaptureCity } = require ('../controllers/city') //desestructuro el controlador de user para traerme los metodos que necesito enrrutar, mas adelante si quier agregar alguno los voy a poder agregar dentro de las {} y utilizando una , para separarlos
const validator = require ('../middlewares/validator')
const schema = require ('../schema/schemaCity')


router.route('/').post(validator(schema), create) 
router.route('/:id').delete(deleteCity) //en esta ruta voy a crear los usuarios y uso post para postear el usuario creado 
router.route('/:id').put(EditCity) //en esta ruta voy a crear los usuarios y uso post para postear el usuario creado 
router.route('/').get(SeeCity) //en esta ruta voy a crear los usuarios y uso post para postear el usuario creado 
router.route('/:id').get(CaptureCity) //en esta ruta voy a crear los usuarios y uso post para postear el usuario creado 




module.exports = router;
