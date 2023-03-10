const router = require('express').Router();
const Info = require('../controller/Info.js');
const userVerify = require('../middlewares/userVerify');
const adminVerify = require('../middlewares/adminVerify');
const getAdmin = Info.getAdmin;
const getUser = Info.getUser;
const getUserDetails = Info.getUserDetails;
const getUserList = Info.getUserList;

router.get('/admin',adminVerify,getAdmin);
router.get('/user',userVerify,getUser);
router.post('/userDetails',getUserDetails);
router.post('/userList',getUserList);

module.exports = router;
