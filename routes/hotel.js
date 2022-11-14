let router = require("express").Router();
let { create, destroy, updateHotel } = require("../controllers/hotel");

router.route("/").post(create);
router.route("/:id").delete(destroy);
router.route("/:id").patch(updateHotel);
module.exports = router;
