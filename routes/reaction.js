const controller = require ('../controllers/reaction')
const schema = require ('../schema/reaction')
const validator = require ('../middlewares/validator')
const passport = require("../config/passport");
let router = require('express').Router() //requiero el metodo de enrrutamiento de express

let {create} = controller


router.post('/', validator (schema), passport.authenticate("jwt", { session: false }), create) 




module.exports = router;