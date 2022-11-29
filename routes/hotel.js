
let router= require('express').Router()
let { create, destroy, updateHotel,read,readHotel} = require("../controllers/hotel");
const schema = require ('../schema/newhotel')
const validator = require('../middlewares/validatorNewHotel')
const passport = require("../config/passport");
router.route("/").post(validator(schema),create);
router.route('/').get(read)
router.route('/:id').get(readHotel)
router.delete("/:id",passport.authenticate('jwt', { session:false }),destroy);
router.patch("/:id",passport.authenticate('jwt', { session:false }),updateHotel);
module.exports = router;

