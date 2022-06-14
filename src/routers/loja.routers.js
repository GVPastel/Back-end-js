const router = require('express-promise-router')()
const lojaController = require('../controllers/loja.controller') 

router.get('/loja', lojaController.findAll)
router.get('/loja/:id', lojaController.findById)
router.post('/loja', lojaController.create)
router.put('/loja/:id', lojaController.update)
router.delete('/loja/:id', lojaController.delete)

module.exports = router