const db = require('../models')
const Produto = db.produto

exports.findAll = async () => {
    try {
        const produto = await Produto.findAll({
            attributes:['tipoProduto', 'tamanho']
        })
        return produto
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os produtos. ERROR: ' + e.massage)
    }
}

exports.findById = async (id) => {
    try {
        const produto = await Produto.findByPk(id, {
            attributes:['tipoProduto', 'tamanho']
        })
        return produto
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar o produto. ERROR: ' + e.massage)
    }
}

exports.create = async (tipoProduto) => {
    try { 
        const produto = await Produto.create({ tipoProduto, tamanho })
        return produto
    } catch (e) {
        throw Error('Erro ao inserir o produto: ' + tipoProduto + ' ERROR: ' + e.massage)
    }
}

exports.update = async (tipoProduto, tamanho) => {
    try {
        await Produto.update(
            { tipoProduto, tamanho },
            {where:{id: id}})
    } catch (e) {
        throw Error('Erro ao alterar a produto: ' + tipoProduto + ' ERROR: ' + e.massage)
    }
}

exports.delete = async (id) => {
    try {
        await Produto.destroy({
            where:{id: id}
        })
    } catch (e) {
        throw Error('Ocorreu um erro ao deletar a produto. ERROR: ' + e.massage)
    }
}