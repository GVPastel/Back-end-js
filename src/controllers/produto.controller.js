const produtoService = require('../services/produto.service')

exports.findAll = async (request, response) => {
    try {
        const produtos = await produtoService.findAll()
        return response.status(200).json({
            status: 200,
            data: produtos,
            message: 'Produtos listados com sucesso'
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
        const produto = await produtoService.findById(id)
        response.status(200).json({
            status: 200,
            data: produto,
            message: 'Produto selecionado com sucesso!'
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
        const { tipoProduto, tamanho } = request.body
        const produto = await produtoService.create(tipoProduto, tamanho)
        response.status(201).send({
            message: "Produto cadastrado com sucesso!",
            body: {
                produto: produto
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
        const { tipoProduto, tamanho } = request.body
        
        await produtoService.update(id, tipoProduto, tamanho)
        response.status(200).send({
            message: "Produto alterado com sucesso!",
            body: {
                tipoProduto : tipoProduto,
                tamanho : tamanho
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
        await produtoService.delete(id)
        response.status(200).send({message: "Produto deletado"})
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}