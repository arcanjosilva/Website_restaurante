var express = require('express');
var router = express.Router();
var carrinhoController = require('../controllers/carrinhoController');
var jwt = require('jsonwebtoken')
/* GET users listing. */

// router.use(authenticateTokenFromHeaders);
router.get('/', carrinhoController.findAll);
router.post('/', carrinhoController.create);
router.delete('/', carrinhoController.delete);
router.put('/', carrinhoController.update);



function authenticateTokenFromHeaders(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // Unauthorized
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.DB_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); //Forbidden
    req.user = user;
    next();
  });
}
module.exports = router;