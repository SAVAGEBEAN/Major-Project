const userDetail = require('../models/userDetail.js');

const userUpdate = async(req,res)=>{
    const username = req.body.username;
    const authenticate = req.body.authenticate;
    const folderaccess =req.body.folderaccess;
    const upload = req.body.upload;
    const review = req.body.review;

    const user_detail = new userDetail({
        authenticate,
        folderaccess,
        upload,
        review
    })

    try{
        const update = await userDetail.findOneAndUpdate({username : username,user_detail});
        res.send(update);
    }catch(err){
        res.send(err);
    }  
}

module.exports = userUpdate;