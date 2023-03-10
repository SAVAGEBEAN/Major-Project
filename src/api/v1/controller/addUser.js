const User = require('../models/user.js');
const config = require('../../../config/config.js');
const Admin = require('../models/admin.js');
const bcrypt = require('bcryptjs');
const userDetail = require('../models/userDetail');
const userValidation = require('../validation/uservalidation.js');

const addUser = async (req, res) => {
    const username = req.body.username;
    const name = req.body.name;

    const {error} = userValidation(req.body);
    if(error) return res.status(0).send(error.details[0].message);

    if (await User.findOne({ username: username })) return res.send("Username already taken");

    const cookie = req.headers?.cookie;
    if (cookie) {
        const admin = await Admin.findOne({ _id: req.user._id });
        if(!admin)return res.send("Not valid")
        const password = await bcrypt.hash(req.body.password, 10);
        const add_user = new User({
            admin: admin.admin,
            name : name,
            username : username,
            password : password
        });

        const user_detail = new userDetail({
            username : username,
        });
        try{
            const saveduser = await add_user.save();
            const saveddetail = await user_detail.save();
            res.send(saveduser);
        }catch(err){
            res.send(err);
        }
    }
}

module.exports = addUser;