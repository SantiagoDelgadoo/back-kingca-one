
let router= require('express').Router()
let { create, destroy, updateHotel,read,readHotel} = require("../controllers/hotel");
const schema = require ('../schema/newhotel')
const validator = require('../middlewares/validatorNewHotel')
router.route("/").post(validator(schema),create);
router.route('/').get(read)
router.route('/:id').get(readHotel)
router.route("/:id").delete(destroy);
router.route("/:id").patch(updateHotel);
module.exports = router;

