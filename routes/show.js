
let router = require("express").Router();
let { create, destroy, updateShow, readShow } = require("../controllers/show");

router.route("/").post(create);
router.route("/:id").delete(destroy);
router.route("/:id").patch(updateShow);
router.route("/").get(readShow)

module.exports = router;

