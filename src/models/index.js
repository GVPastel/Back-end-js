const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.DIALECT,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.users = require('../models/user.model')(db.sequelize, db.Sequelize)
db.users.sync()
db.loja = require('../models/loja.model')(db.sequelize, db.Sequelize)
db.loja.sync()
db.compra = require('../models/compra.model')(db.sequelize, db.Sequelize)
db.compra.sync()
db.produto = require('../models/produto.model')(db.sequelize, db.Sequelize)
db.produto.sync()
module.exports = db