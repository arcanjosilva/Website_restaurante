

module.exports = (sequelize, type) => {
    return sequelize.define('carrinho',{
        comida : type.STRING,
        email : type.STRING,
        userId : type.INTEGER,
    })
}

