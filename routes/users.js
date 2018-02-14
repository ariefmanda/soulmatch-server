var express = require('express');
var router = express.Router();
var Controller = require('../controllers/user')
var verify = require('../helper/verifying')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/create', Controller.createUser)
router.put('/update/:id', verify.isLogin, Controller.updateUser)
router.get('/all', verify.isLogin, Controller.findAllUser)
router.get('/:id', verify.isLogin, Controller.findUser)
router.post('/login', Controller.login)
router.get('/myaccount', verify.isLogin, Controller.findMe)


module.exports = router;
