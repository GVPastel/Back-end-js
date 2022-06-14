module.exports = (sequelize, Sequelize) => {
    const Produto = sequelize.define('produto', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        tipoProduto: {
            type: Sequelize.STRING,
            notNull: true,
            varchar: 50
        },
        tamanho: {
            type: Sequelize.STRING,
            notNull: true,
            varchar: 50
        }
    },
    {
        timestamps: false,    
    },
    )
    return Produto
}