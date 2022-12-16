var Carrinho = require('../sequelize').Carrinho;



exports.findAll = function (req, res, next) {
    Carrinho.findAll().then(results => {
        res.send(results);
    })
}




exports.create = function (req, res, next) {
    var { comida } = req.body;
    var { email } = req.body;

    Carrinho.findOne({
        where: {
            email: email
        }
    }).then(result => {
        if (result == null) {
            Carrinho.create({ 'email': email, 'comida': comida }).then(addcarrinho => {
                // req.session.addcarrinho = addcarrinho;
                // res.redirect('/index')
                res.send("Email foi adicionado à tabela" + " " + addcarrinho.email)
            })
        }
        else {
            // req.flash('comprasMessage', 'That e-mail is already taken ');
            res.status(404).send("That e-mail is already taken");

        }



    }
    )
}


exports.delete = function (req, res, next) {
    var id = req.body.id;
    if (id != undefined) {
        if (isNaN(id)) {
            res.status(404).send("It's not a number");
        } else {
            Carrinho
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then((selectedPerson) => {
                    if (selectedPerson == 0) {
                        res.status(404).send("Perons not defined");
                    } else {
                        res.send("Number of deleted rows " + selectedPerson);
                    }
                });
        }
    } else {
        person.findAll().then((allPerson) => {
            res.send(allPerson);
        });
    }
}



exports.update = function (req, res, next) {

    var id = req.query.id;  
    if (isNaN(id)) {
        res.status(404).send("it's not a number");
    } else {
        Carrinho
            .update(req.body, {
                where: {
                    id: id,
                },
            })
            .then((updatePerson) => {
                if (updatePerson == 0) { 
                    res.status(404).send("Cannot find id");
                } else {
                    Carrinho
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