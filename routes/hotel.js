let router = require("express").Router();
let { create, destroy } = require("../controllers/hotel");

router.route("/").post(create);
router.route("/:id").delete(destroy);

module.exports = router;
