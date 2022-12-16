var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

var jwt = require('jsonwebtoken')
/* GET users listing. */

// router.use(authenticateTokenFromHeaders);
router.get('/', userController.findAll);
// router.post('/', userController.create);
// router.delete('/', userController.delete);

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

