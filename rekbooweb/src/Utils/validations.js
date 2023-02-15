import Joi from 'joi'

export const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().required().email({ tlds: { allow: false }}),
        password: Joi.string().min(5).required()
    });
    return schema.validate(data);
};

export const registerValidation = data => {
    const schema = Joi.object({
        email: Joi.string().required().email({ tlds: { allow: false }}),
        password: Joi.string().min(5).required(),
        passwordConfirmation: Joi.string().min(5).required().equal(data.password),
        role: Joi.string().min(5).required().equal('User'),
    });
    return schema.validate(data);
};


export const emailValidation = data => {
    const schema = Joi.object({
        email: Joi.string().required().email({ tlds: { allow: false }}),
    });
    return schema.validate(data);
};