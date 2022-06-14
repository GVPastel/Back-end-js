const router = require('express-promise-router')()
const compraController = require('../controllers/compra.controller') 

router.get('/compra', compraController.findAll)
router.get('/compra/:id', compraController.findById)
router.post('/compra', compraController.create)
router.put('/compra/:id', compraController.update)
router.delete('/compra/:id', compraController.delete)

module.exports = router