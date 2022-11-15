let router = require("express").Router();
let { create, destroy, updateShow } = require("../controllers/show");

router.route("/").post(create);
router.route("/:id").delete(destroy);
router.route("/:id").patch(updateShow);
module.exports = router;
