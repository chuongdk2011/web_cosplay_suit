var express = require('express');
var router = express.Router();
var tb_userCtrl = require('../controllers/user.controller');
var tb_productCtrl = require('../controllers/product.controller');




router.get('/',tb_userCtrl.loginWeb);
router.post('/',tb_userCtrl.loginWeb);
router.get('/signup',tb_userCtrl.dangky);
router.post('/signup',tb_userCtrl.dangky);

router.get('/home',tb_productCtrl.homeWeb);

module.exports = router;
