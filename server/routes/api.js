const express = require('express')
const router = express.Router()
const apiController = require('../controllers/api')

router.get('/', apiController.getIndex)
router.get('/api', apiController.getStretch)
// router.get('/api:stretchId', apiController.getStretchById)
router.post('/stretches', apiController.createStretch)

module.exports = router