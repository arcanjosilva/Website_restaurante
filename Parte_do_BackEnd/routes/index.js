var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');
// var carrinhoController = require('../controllers/carrinhoController')
var jwt = require('jsonwebtoken')

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
    res.render('login', { message: req.flash('loginMessage') });
});
router.get('/signup', function(req, res) {
    res.render('signup', {message: req.flash('signupMessage') });
});

// router.get('/compras', function(req, res) {
//     res.render('compras', {message: req.flash('comprasMessage') });
// });

// router.get('/carrinhos', function(req, res) {
//     res.render('carrinhos', {user : req.session.addcarrinho });
// });


router.get('/profile', authenticateTokenFromSession, function(req, res) {
    res.render('profile', {user : req.session.user });
});

router.post('/signup', indexController.signup)

router.post('/login', indexController.login)

router.post('/logout', indexController.logout)

// router.get('/carrinhos', carrinhoController.findAll)







module.exports = router;

// funcao que verifica se o token ta valido 

function authenticateTokenFromSession(req,res,next){
    var token = req.session.token;
    if( token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.DB_TOKEN_SECRET, (err,user) => {
        if (err)
        return res.sendStatus(403);
        req.user = user;
        next();
    })
}