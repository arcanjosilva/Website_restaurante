module.exports = (sequelize, type) => {
    return sequelize.define('compras',{
        compras : type.STRING,
        email : type.STRING,
        carrinhoId : type.INTEGER
    })
}
