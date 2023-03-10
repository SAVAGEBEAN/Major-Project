const Joi = require('@hapi/joi');

//admin signup validation
const adminValidation=(data)=>{
    const schema = Joi.object( {
        admin : Joi.string().min(6).max(15).required(),
        email : Joi.string().min(6).max(255).required(),
        password : Joi.string().min(6).max(1024).required()
    })
    return schema.validate({admin : data.admin,email : data.email, password : data.password});
}

module.exports = adminValidation;