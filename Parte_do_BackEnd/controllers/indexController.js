var User = require('../sequelize').User;
var Compras =  require('../sequelize').Compras;
var Carrinho =  require('../sequelize').Carrinho;

var jwt = require('jsonwebtoken')

function generateAcessToken(email,password){
    var token = jwt.sign({email, password}, process.env.DB_TOKEN_SECRET, { expiresIn :'1800s'})
    return token;
}
exports.signup = function (req,res){

        var { email }= req.body;
        var { password} = req.body;

        User.findOne({
            where :{
                email : email
            }
        }).then (result =>{
            if(result == null){
                User.create({ 'email' : email , 'password': password})
                .then(user =>{
                    var token = generateAcessToken(email,password)
                    req.session.user = user;
                    req.session.token = token;
                    res.redirect('/profile');
                });
            }
            else{
                req.flash('signupMessage', 'That e-mail is already taken');
                res.redirect('/signup')
            }
        })
    
}


exports.login = function (req,res){

    var {email} = req.body;
    var {password} = req.body;
    User.findOne({
        where :{
            email : email
        }
    }).then (user =>{
        if(user == null){
            req.flash('loginMessage', ' No user found with that e-mail')
            res.redirect('/login');
        }
        else if (user.password != password){
            req.flash('loginMessage', 'Opss ! Wrong password');
            res.redirect('/login');
        }
        else{
            var token = generateAcessToken(email,password)
            req.session.user = user;
            req.session.token = token;
            res.cookie('acess_token', token,{
                expires : new Date(Date.now() + 8 * 3600)
            });
            res.redirect('/profile');
           
        }


    })

}

exports.logout = function (req,res){
                req.session.user = null;
                res.redirect('/login');
}
        



exports.carrinho = function (req,res){

    var {email} = req.body;
    var {password} = req.body;
    User.findOne({
        where :{
            email : email
        }
    }).then (user =>{
        if(user == null){
            req.flash('loginMessage', ' No user found with that e-mail')
            res.redirect('/login');
        }
        else if (user.password != password){
            req.flash('loginMessage', 'Opss ! Wrong password');
            res.redirect('/login');
        }
        else{
            var token = generateAcessToken(email,password)
            req.session.user = user;
            req.session.token = token;
            res.cookie('acess_token', token,{
                expires : new Date(Date.now() + 8 * 3600)
            });
            res.send('/compras');
           
        }


    })

}

// exports.compras = function (req,res){

// }










