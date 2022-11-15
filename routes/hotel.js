
let router= require('express').Router()
let { create, destroy, updateHotel,read } = require("../controllers/hotel");

router.route("/").post(create);
router.route('/').get(read)
router.route("/:id").delete(destroy);
router.route("/:id").patch(updateHotel);
module.exports = router;

