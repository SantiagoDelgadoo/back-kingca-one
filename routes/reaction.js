const controller = require ('../controllers/reaction')
const schema = require ('../schema/reaction')
const validator = require ('../middlewares/validator')
const passport = require("../config/passport");
const usercheck = require('../middlewares/usercheck');
const Reaction = require('../models/Reaction');
let router = require('express').Router() //requiero el metodo de enrrutamiento de express

let {create, post, get, deletea2 } = controller


router.post('/', validator (schema), create)
router.put('/', passport.authenticate('jwt', { session:false }) , post)
router.get('/', passport.authenticate('jwt', { session:false }) ,  get)
router.put("/:id", passport.authenticate("jwt", { session: false }), usercheck(Reaction) ,deletea2);





module.exports = router;