var express = require('express');
var router = express.Router();
var Controller = require('../controllers/user')
var verify = require('../helper/verifying')
var image = require('../helper/image')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/create', Controller.createUser)
router.put('/update', verify.isLogin, image.multer.single('profpict'), image.uploadGCS, Controller.updateUser)
router.get('/all', verify.isLogin, Controller.findAllUser)
router.post('/login', Controller.login)
router.get('/myaccount', verify.isLogin, Controller.findMe)
router.get('/:id', verify.isLogin, Controller.findUser)


module.exports = router;
