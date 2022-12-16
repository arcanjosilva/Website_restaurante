var express = require('express');
var router = express.Router();
var comprasController = require('../controllers/comprasController');
var jwt = require('jsonwebtoken')
/* GET users listing. */

// router.use(authenticateTokenFromHeaders);
router.get('/', comprasController.findAll);
// router.post('/', comprasController.create);
router.delete('/', comprasController.delete);
router.put('/', comprasController.update);

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