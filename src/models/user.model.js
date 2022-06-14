module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            notNull: true,
            is: /^[a-zA-z0-9\._]{4, 32}$/,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            notNull: true,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            notNull: true
        },
        cpf: {
            type: Sequelize.INTEGER,
            unique: true,
            char: 11
        },
        tipo: {
            type: Sequelize.STRING('15'),
            notNull: true
        },
        
    },
    {
        timestamps: false,    
    },
    )
    return User    
}