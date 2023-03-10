const router = require('express').Router();
const userLogin = require('../controller/loginuser.js');
const adminLogin = require('../controller/loginadmin.js');

router.post('/admin',adminLogin);
router.post('/user',userLogin);

module.exports = router;