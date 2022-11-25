
let router= require('express').Router()
let { create, destroy, updateHotel,read,readHotel} = require("../controllers/hotel");

router.route("/").post(create);
router.route('/').get(read)
router.route('/:id').get(readHotel)
router.route("/:id").delete(destroy);
router.route("/:id").patch(updateHotel);
module.exports = router;

