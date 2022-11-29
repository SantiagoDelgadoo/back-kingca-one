
let router = require("express").Router();
let { create, destroy, updateShow, readShow } = require("../controllers/show");
const passport = require("../config/passport");

router.route("/").post(create);
router.delete("/:id",passport.authenticate('jwt', { session:false }),destroy);
router.patch("/:id",passport.authenticate('jwt', { session:false }),updateShow);
router.route("/").get(readShow)

module.exports = router;

