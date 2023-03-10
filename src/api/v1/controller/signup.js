const Admin = require('../models/admin.js');
const  adminValidation  = require('../validation/adminvalidation.js');
const bcrypt = require('bcryptjs');
const adminSignup = async (req, res) => {

    const admin = req.body.admin;
    const email = req.body.email;
    const password = req.body.password;
    
    const {error} = adminValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    if (await Admin.findOne({ admin: admin })) return res.send("Username Already taken");
    if (await Admin.findOne({ email: email })) return res.send("Email Already exist");
    
    const hash = await bcrypt.hash(password,10);
 
    const admin_signup = new Admin({
        admin: admin,
        email: email,
        password: hash
    });
    
    try {
        const saved = await admin_signup.save();
        res.send(saved);
    } catch (err) {
        res.send(err);
    }

}

module.exports = adminSignup;