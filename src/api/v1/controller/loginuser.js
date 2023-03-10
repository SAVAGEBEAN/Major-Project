const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../../config/config');

const userLogin = async(req,res) =>{
    const username = req.body.username;
    
    const findUser = await User.findOne({username : username});
    if(!findUser) return res.status(401).send("Invalid Username or Password");
    const validPass = await bcrypt.compare(req.body.password,findUser.password);
    if(!validPass) return res.status(401).send("Invalid Username or Password");

    const token = jwt.sign({_id : findUser._id},config.authToken.tokenSecret);
    res.cookie('auth-token',token,{
        httpOnly : true,
        maxAge : 4*60*60*1000
    });
    res.send(token);
    

}

module.exports = userLogin;