const db = require('../models')
const User = db.users

exports.findAll = async () => {
    try {
        const users = await User.findAll({
            attributes:['id', 'username', 'email', 'cpf', 'tipo']
        })
        return users
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.massage)
    }
}

exports.findById = async (id) => {
    try {
        const users = await users.findByPk(id, {
            attributes:['id', 'username', 'email', 'cpf', 'tipo']
        })
        return user
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar o usuário. ERROR: ' + e.massage)
    }
}

exports.create = async (username, email, password, cpf, tipo) => {
    try { 
        const user = await User.create({
            username: username, email: email, password: password, cpf: cpf, tipo: tipo})
        return user
    } catch (e) {
        throw Error('Erro ao inserir o usuário: ' + username + ' ERROR: ' + e.massage)
    }
}

exports.update = async (username, email, password, tipo) => {
    try {
        await User.update(
            { username: username, email: email, password: password, tipo: tipo },
            {where:{id: id}})
    } catch (e) {
        throw Error('Erro ao alterar o usuário: ' + username + ' ERROR: ' + e.massage)
    }
}

exports.delete = async (id) => {
    try {
        await User.destroy({
            where:{id: id}
        })
    } catch (e) {
        throw Error('Ocorreu um erro ao deletar o usuário. ERROR: ' + e.massage)
    }
}