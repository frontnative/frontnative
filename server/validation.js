const Joi = require('@hapi/joi');
// register validation
const registerValidation = data => {
    const schema = {
        firstName: Joi.string().min(2).required(),
        lastName: Joi.string().min(2).required(),
        male: Joi.string(),
        email: Joi.string().min(2).required().email(),
        password: Joi.string().min(6).required(),
        phone: Joi.string().required(),
        country: Joi.string().required(),
        city: Joi.string(),
    };

    return Joi.validate(data, schema);
};
// login validation
const loginValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    };

    return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
