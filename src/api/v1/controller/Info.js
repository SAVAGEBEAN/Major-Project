const User = require('../models/user.js');
const Admin = require('../models/admin.js');
const userDetail = require('../models/userDetail.js');
const getAdmin = async(req,res)=>{

    const admin = req.admin;
    const findAdmin = await Admin.findOne({admin:admin});
    if(!findAdmin) return res.send("Not Found");

    const {password , ...data} = findAdmin.toJSON();
    res.send(data);
}
const getUser = async(req,res)=>{

    const user = req.user;
    const findUser = await User.findOne({_id:user._id});
    if(!findUser) return res.send("User Not found");

    const  { password , ...data} = findUser.toJSON();
    res.send(data);

}
const getUserList = async(req,res)=>{

    const admin = req.admin;
    const findUser = await User.find({admin:admin});
    if(!findUser) return res.send("No User found");

    const {password, ...data} = findUser.toJSON();

    res.send(data);

}
const getUserDetails = async(req,res)=>{

    const user = req.body.user;
    const findUSerDetails = await userDetail.findOne({username:user});
    if(!findUSerDetails) return res.send("Details Not Found");

    res.send(findUSerDetails);

}

module.exports = {
    getAdmin,
    getUser,
    getUserList,
    getUserDetails

};