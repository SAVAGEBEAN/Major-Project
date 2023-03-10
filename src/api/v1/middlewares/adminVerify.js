const jwt = require('jsonwebtoken');
const config = require('../../../config/config');

function adminAuth(req,res,next){
    
    if(!req.headers.cookie) return res.status(401).send('Access Denied');
    const token = req.headers.cookie.slice(11);

    try{
        const verified = jwt.verify(token,config.authToken.tokenSecret);
        req.user = verified;
        next();
    }catch(err){
        res.send('Invalid Token');
    }
}
module.exports = adminAuth;