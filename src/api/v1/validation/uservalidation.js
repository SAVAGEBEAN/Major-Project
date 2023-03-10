const Joi = require('@hapi/joi');

//login input validation
const userValidation= (data) => {
    const schema = Joi.object({
        username : Joi.string().min(6).required(),
        password : Joi.string().min(6).required()
    });
    return schema.validate({username:data.username, password:data.password});

}
module.exports = userValidation;