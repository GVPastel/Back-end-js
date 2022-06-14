const db = require('../models')
const Compra = db.compra

exports.findAll = async () => {
    try {
        const compra = await Compra.findAll({
            attributes:['dataCompra']
        })
        return compra
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar as compras. ERROR: ' + e.massage)
    }
}

exports.findById = async (id) => {
    try {
        const compra = await compra.findByPk(id, {
            attributes:['dataCompra']
        })
        return compra
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar a compra. ERROR: ' + e.massage)
    }
}

exports.create = async (dataCompra) => {
    try { 
        const compra = await Compra.create({ dataCompra })
        return compra
    } catch (e) {
        throw Error('Erro ao inserir a compra: ' + dataCompra + ' ERROR: ' + e.massage)
    }
}

exports.update = async (dataCompra) => {
    try {
        await Compra.update(
            { dataCompra },
            {where:{id: id}})
    } catch (e) {
        throw Error('Erro ao alterar a compra: ' + dataCompra + ' ERROR: ' + e.massage)
    }
}

exports.delete = async (id) => {
    try {
        await Compra.destroy({
            where:{id: id}
        })
    } catch (e) {
        throw Error('Ocorreu um erro ao deletar a compra. ERROR: ' + e.massage)
    }
}