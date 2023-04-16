import Joi, { string } from 'joi'

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
        terms: Joi.boolean().invalid(false)
    });
    return schema.validate(data);
};


export const emailValidation = data => {
    const schema = Joi.object({
        email: Joi.string().required().email({ tlds: { allow: false }}),
    });
    return schema.validate(data);
};

export const addressDataValidation = data => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        address: Joi.string().required(),
        city: Joi.string().required(),
        phone: Joi.string().required()
    });
    return schema.validate(data);
};

export const mealValidation = data => {
    const schema = Joi.object({
        mealID: Joi.number(),
        active: Joi.bool().required(),
        calories: Joi.number().min(1).required(),
        description: Joi.string().required(),
        name: Joi.string().required(),
        photo1: Joi.string().required(),
        photo2: Joi.string().required(),
        tags: Joi.array().min(1).required(),
        time: Joi.number().min(1).required()
    });
    return schema.validate(data);
};
