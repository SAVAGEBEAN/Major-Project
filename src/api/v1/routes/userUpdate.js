const router = require('express').Router();
const userUpdate = require('../controller/userupdate.js');
const userRemove = require('../controller/userRemove.js');
const adminVerify = require('../middlewares/adminVerify');

router.post('/update',adminVerify,userUpdate);
router.post('/remove',adminVerify,userRemove);

module.exports = router;