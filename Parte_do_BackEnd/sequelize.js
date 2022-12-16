const { Sequelize, Model, DataTypes, where } = require("sequelize");
const UserModel = require('./models/User')
const CarrinhoModel = require('./models/Carrinho')
const ComprasModel= require('./models/Compras')

// Fazer uma ligacao a base de dados utilizando o pacote sequelize
const sequelize = new Sequelize(
    process.env.DB_SCHEMA,
    process.env.DB_USER,
    process.env.DB_PASS,
    { 
      dialect: "mysql",

    dialectOptions: {
        ssl: {
            require : true
        }
    },
    host : process.env.DB_HOST,
}
  );

sequelize.authenticate() //                       
    .then(() => {
        console.log("Connection has beem established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    });



sequelize.sync({ force: false})   
    .then(() => {
        console.log("Database & tables created !");
    });


    
const User = UserModel(sequelize, Sequelize)
const Carrinho = CarrinhoModel(sequelize, Sequelize)
const Compras = ComprasModel(sequelize, Sequelize)

User.hasOne(Carrinho
//     ,{

//     onDelete:'CASCADE',
//     onUpdate:'CASCADE'

// }
);
Carrinho.hasMany(Compras
//     ,{
//     onDelete:'CASCADE',
//     onUpdate:'CASCADE'
// }

);


// Carrinho.bulkCreate([{
   
//     comida: "Arroz de Pato",
//     email: "arcanjosilva131@gmail.com",
//     userId: 1,

//   },
//   {
//     comida: "Espetada",
//     email: "paulavnoia@gmail.com",
//     userId: 2,
//   },
//   {
//     comida: "Arroz",
//     email: "arcanjosilva@msn.com",
//     userId: 3,
//   },
// ]).then(function () {
// return Carrinho.findAll();
// })
// .then(function (carrinho) {
// console.log(carrinho);
// });

// Compras.bulkCreate([{
   
//     compras: "2 x Arroz de Pato",
//     email: "arcanjosilva131@gmail.com",
//     carrinhoId: 1,

//   },
//   {
//     comida: "3 x Espetada",
//     email: "paulavnoia@gmail.com",
//     carrinhoId: 2,
//   },
//   {
//     comida: "1 x Arroz",
//     email: "arcanjosilva@msn.com",
//     carrinhoId: 3,
//   },
// ]).then(function () {
// return Compras.findAll();
// })
// .then(function (carrinho) {
// console.log(carrinho);
// });


    module.exports = {
        User,
        Carrinho,
        Compras
    }
