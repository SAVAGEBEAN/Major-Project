const router = require('express').Router();
const addUser = require('../controller/addUser');
const adminVerify = require('../middlewares/adminVerify');
const adminSignup = require('../controller/signup');

router.post('/user',adminVerify,addUser);
router.post('/admin',adminSignup);

module.exports = router;
