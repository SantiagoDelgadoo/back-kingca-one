const controller = require ('../controllers/reaction')
const schema = require ('../schema/reaction')
const validator = require ('../middlewares/validator')
const passport = require("../config/passport");
let router = require('express').Router() //requiero el metodo de enrrutamiento de express

let {create, post, get} = controller


router.post('/', validator (schema), create)
router.put('/', passport.authenticate('jwt', { session:false }) , post)
router.get('/', get)





module.exports = router;