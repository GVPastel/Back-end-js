const lojaService = require('../services/loja.service')

exports.findAll = async (request, response) => {
    try {
        const loja = await lojaService.findAll()
        return response.status(200).json({
            status: 200,
            data: loja,
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
        const loja = await lojaService.findById(id)
        response.status(200).json({
            status: 200,
            data: loja,
            message: 'Loja selecionada com sucesso!'
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
        const { cnpj } = request.body
        const loja = await lojaService.create(cnpj)
        response.status(201).send({
            message: "Loja cadastrada com sucesso!",
            body: {
                loja: loja
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
        const { cnpj } = request.body
        
        await lojaService.update(id, cnpj)
        response.status(200).send({
            message: "Loja alterada com sucesso!",
            body: {
                cnpj: cnpj
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
        await lojaService.delete(id)
        response.status(200).send({message: "Loja deletada"})
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}