module.exports = (sequelize, Sequelize) => {
    const Loja = sequelize.define('loja', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        cnpj: {
            type: Sequelize.INTEGER,
            notNull: true,
            char: 14
        }
    },
    {
        timestamps: false,    
    },
    )
    return Loja
}