let router = require ('express').Router () //requiero el metodo de enrrutamiento de express
let { userRegister,verifyUser,signIn,signInWithToken, logout } = require ('../controllers/user') //desestructuro el controlador de user para traerme los metodos que necesito enrrutar, mas adelante si quier agregar alguno los voy a poder agregar dentro de las {} y utilizando una , para separarlos
const accountExistsSignUp = require ('../middlewares/accountExistSignUp')
const accountExistsSignIn = require ('../middlewares/accountExistsSignIn')
const accountHasBeenVerified = require ('../middlewares/accountHasBeenVerified')
const mustSignIn = require ('../middlewares/mustSignIn')
const validator = require ('../middlewares/validator')
const schema = require ('../schema/schemaUser')
const schemaUserSignIn = require ('../schema/schemaUserSignIn')
const passport = require("../config/passport");

router.post('/sign-up', validator(schema), accountExistsSignUp, userRegister)//en esta ruta voy a crear los usuarios y uso post para postear el usuario creado 

//singin
router.get('/verify/:code',verifyUser) 
router.post('/signin',validator(schemaUserSignIn),accountExistsSignIn,accountHasBeenVerified,signIn) 
router.post('/token', passport.authenticate('jwt', { session:false }), mustSignIn, signInWithToken)
router.post('/sign-out', passport.authenticate('jwt', { session:false }), logout)


module.exports = router;
