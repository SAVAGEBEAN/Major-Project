const Admin = require('../models/admin.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../../config/config.js')
const adminLogin = async (req, res) => {
    const admin = req.body.admin;
    //checking if user is present or not
    const findAdmin = await Admin.findOne({ admin: admin});
    if (!findAdmin) return res.status(404).send("Incorrect Username or Password");
    const validPass = await bcrypt.compare(req.body.password,findAdmin.password);
    if(!validPass) return res.status(400).send("Incorrect Username or Password");
   
    const token = jwt.sign({_id: findAdmin._id},config.authToken.tokenSecret);
    res.cookie('auth-token',token,{
        httpOnly : true,
        maxAge : 4*60*60*1000
    });
    res.send(token);
}

module.exports = adminLogin;