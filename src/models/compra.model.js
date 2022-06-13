module.exports = (sequelize, Sequelize) => {
    const Compra = sequelize.define('compra', {
        idCompra: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        dataCompra: {
            type: Sequelize.DATE,
            notNull: true
        },
    },
    {
        timestamps: false,    
    },
    )
    return Compra
}