var express = require('express');
var router = express.Router();
var Controller = require('../controllers/gallery')
var verify = require('../helper/verifying')
var image = require('../helper/image')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/create', verify.isLogin, Controller.createGallery)
router.put('/update/:id', verify.isLogin, image.multer.single('profpict'), image.uploadGCS, Controller.updateGallery)
router.delete('/delete', verify.isLogin, Controller.deleteGallery)
router.get('/:id', verify.isLogin, Controller.findGallery)


module.exports = router;