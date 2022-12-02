
let router= require('express').Router()
const passport = require("../config/passport");
const schema = require ('../schema/newComment')
let {create,getComments} = require("../controllers/comment");
router.post("/",passport.authenticate('jwt', { session:false }),create);
router.route('/').get(getComments);
module.exports = router;