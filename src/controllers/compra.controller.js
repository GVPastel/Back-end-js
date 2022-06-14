const compraService = require('../services/compra.service')

exports.findAll = async (request, response) => {
    try {
        const compra = await compraService.findAll()
        return response.status(200).json({
            status: 200,
            data: compra,
            message: 'Usuários listados com sucesso'
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.findById = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const compra = await compraService.findById(id)
        response.status(200).json({
            status: 200,
            data: compra,
            message: 'Usuário selecionado com sucesso!'
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.create = async (request, response) => {
    try {
        const { dataCompra } = request.body
        const compra = await compraService.create(dataCompra)
        response.status(201).send({
            message: "Compra cadastrada com sucesso!",
            body: {
                compra: compra
            }
        })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: "Erro ao cadastrar o usuário. ERROR: " + e.message
        })
    }
}

exports.update = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const { dataCompra } = request.body
        
        await compraService.update(id, dataCompra)
        response.status(200).send({
            message: "Usuário alterado com sucesso!",
            body: {
                dataCompra: dataCompra
            }
        })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.delete = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        await compraService.delete(id)
        response.status(200).send({message: "Compra deletada"})
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}