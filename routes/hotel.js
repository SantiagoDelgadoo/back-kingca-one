let router= require('express').Router()
let {create,read,readHotel} = require('../controllers/hotel')

router.route('/').post(create)
router.route('/').get(read)
router.route('/:id').get(readHotel)

module.exports = router;