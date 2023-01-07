import Joi from 'joi'

export const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().required().email({ tlds: { allow: false }}),
        password: Joi.string().min(5).required()
    });
    return schema.validate(data);
};