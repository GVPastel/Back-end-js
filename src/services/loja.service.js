const db = require('../models')
const Loja = db.loja

exports.findAll = async () => {
    try {
        const loja = await Loja.findAll({
            attributes:['cnpj']
        })
        return loja
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar as lojas. ERROR: ' + e.massage)
    }
}

exports.findById = async (id) => {
    try {
        const loja = await Loja.findByPk(id, {
            attributes:['cnpj']
        })
        return loja
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar a loja. ERROR: ' + e.massage)
    }
}

exports.create = async (cnpj) => {
    try { 
        const loja = await loja.create({ cnpj })
        return loja
    } catch (e) {
        throw Error('Erro ao inserir a loja: ' + cnpj + ' ERROR: ' + e.massage)
    }
}

exports.update = async (cnpj) => {
    try {
        await Loja.update(
            { cnpj },
            {where:{id: id}})
    } catch (e) {
        throw Error('Erro ao alterar a loja: ' + cnpj + ' ERROR: ' + e.massage)
    }
}

exports.delete = async (id) => {
    try {
        await Loja.destroy({
            where:{id: id}
        })
    } catch (e) {
        throw Error('Ocorreu um erro ao deletar a loja. ERROR: ' + e.massage)
    }
}