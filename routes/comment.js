
let router= require('express').Router()
const passport = require("../config/passport");
const schema = require ('../schema/newComment')
const validator = require('../middlewares/validator')
let {create,getComments,editComment,destroy} = require("../controllers/comment");
router.post("/",passport.authenticate('jwt', { session:false }),validator(schema),create);
router.route('/').get(getComments);
router.patch("/:id",passport.authenticate('jwt', { session:false }),editComment);
router.delete("/:id",passport.authenticate('jwt', { session:false }),destroy);
module.exports = router;