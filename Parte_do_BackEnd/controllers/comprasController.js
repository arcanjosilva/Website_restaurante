var Compras = require('../sequelize').Compras;

exports.findAll = function (req, res, next) {
    Compras.findAll().then(results => {
        res.send(results);
    })
}




// exports.create = function (req, res, next) {
//     var { comida } = req.body;
//     var { email } = req.body;

//     Compras.findOne({
//         where: {
//             email: email
//         }
//     }).then(result => {
//         if (result == null) {
//             Compras.create({ 'email': email, 'comida': comida }).then(addcarrinho => {
//                 // req.session.addcarrinho = addcarrinho;
//                 // res.redirect('/index')
//                 res.send("Email foi adicionado à tabela" + " " + addcarrinho.email)
//             })
//         }
//         else {
//             // req.flash('comprasMessage', 'That e-mail is already taken ');
//             res.status(404).send("That e-mail is already taken");

//         }



//     }
//     )
// }


exports.delete = function (req, res, next) {
    var id = req.body.id;
    if (id != undefined) {
        if (isNaN(id)) {
            res.status(404).send("It's not a number");
        } else {
            Compras
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then((selectedPerson) => {
                    if (selectedPerson == 0) {
                        res.status(404).send("Person not defined");
                    } else {
                        res.send("Number of deleted rows " + selectedPerson);
                    }
                });
        }
    } else {
        Compras.findAll().then((allPerson) => {
            res.send(allPerson);
        });
    }
}



exports.update = function (req, res, next) {

    var id = req.query.id;  
    if (isNaN(id)) {
        res.status(404).send("it's not a number");
    } else {
        Compras
            .update(req.body, {
                where: {
                    id: id,
                },
            })
            .then((updatePerson) => {
                if (updatePerson == 0) { 
                    res.status(404).send("Cannot find id");
                } else {
                    Compras
                        .findAll({
                            where: {
                                id: id,
                            },
                        })
                        .then((newPerson) => {
                            res.send(newPerson);
                        });
                }
            });
    }
}