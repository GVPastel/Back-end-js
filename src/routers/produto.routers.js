const router = require('express-promise-router')()
const produtoController = require('../controllers/produto.controller') 

router.get('/produto', produtoController.findAll)
router.get('/produto/:id', produtoController.findById)
router.post('/produto', produtoController.create)
router.put('/produto/:id', produtoController.update)
router.delete('/produto/:id', produtoController.delete)

module.exports = router