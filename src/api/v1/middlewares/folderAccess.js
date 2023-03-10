const jwt = require('jsonwebtoken');
const userDetail = require('../models/userDetail');
const uploadAccess= async(req,res,next) =>{    
    try{
        const userAccess = await userDetail.findOne({username:req.user.username});
        if(userAccess.folderaccess){
            next();
        }
        else{
            res.send("Folder Access Denied");
        }
    }
    catch(err){
        res.send(err)
    }
}

module.exports = uploadAccess;