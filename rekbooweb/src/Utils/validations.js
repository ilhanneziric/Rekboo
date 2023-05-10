import Joi, { string } from 'joi'

export const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().required().email({ tlds: { allow: false }}).messages({
            'string.empty': 'Moraš unijeti email!',
            'string.email': 'Moraš unijeti validan email!',
            'any.required': 'Moraš unijeti email!',
        }),
        password: Joi.string().min(5).required().messages({
            'string.empty': 'Moraš unijeti lozinku!' ,
            'string.min': 'Lozinka mora sadržavati najmanje 5 karaktera!' ,
            'any.required': 'Moraš unijeti lozinku!' ,
        })
    });
    return schema.validate(data);
};

export const registerValidation = data => {
    const schema = Joi.object({
        email: Joi.string().required().email({ tlds: { allow: false }}).messages({
            'string.empty': 'Moraš unijeti email!',
            'string.email': 'Moraš unijeti validan email!',
            'any.required': 'Moraš unijeti email!',
        }),
        password: Joi.string().min(5).required().messages({
            'string.empty': 'Moraš unijeti lozinku!' ,
            'string.min': 'Lozinka mora sadržavati najmanje 5 karaktera!' ,
            'any.required': 'Moraš unijeti lozinku!' ,
        }),
        passwordConfirmation: Joi.string().min(5).required().equal(data.password).messages({
            'any.only': 'Lozinke se ne podudaraju!' ,
            'string.empty': 'Moraš unijeti lozinku!' ,
            'string.min': 'Lozinka mora sadržavati najmanje 5 karaktera!' ,
            'any.required': 'Moraš unijeti lozinku!' ,
        }),
        role: Joi.string().min(5).required().equal('User').messages({
            'string.empty': 'Greška na serveru!' ,
            'string.min': 'Greška na serveru!' ,
            'any.required': 'Greška na serveru!' ,
            'string.only': 'Greška na serveru!' ,
        }),
        terms: Joi.boolean().valid(true).required().messages({
            'any.only': 'Moraš prihvatiti uslove korištenja!' ,
            'any.required': 'Moraš prihvatiti uslove korištenja!' ,
        }),
    });
    return schema.validate(data);
};


export const emailValidation = data => {
    const schema = Joi.object({
        email: Joi.string().required().email({ tlds: { allow: false }}).messages({
            'string.empty': 'Moraš unijeti email!',
            'string.email': 'Moraš unijeti validan email!',
            'any.required': 'Moraš unijeti email!',
        }),
    });
    return schema.validate(data);
};

export const addressDataValidation = data => {
    const schema = Joi.object({
        firstName: Joi.string().required().messages({
            'string.empty': 'Moraš unijeti ime!' ,
            'any.required': 'Moraš unijeti ime!' ,
        }),
        lastName: Joi.string().required().messages({
            'string.empty': 'Moraš unijeti prezime!' ,
            'any.required': 'Moraš unijeti prezime!' ,
        }),
        address: Joi.string().required().messages({
            'string.empty': 'Moraš unijeti adresu!' ,
            'any.required': 'Moraš unijeti adresu!' ,
        }),
        city: Joi.string().required().messages({
            'string.empty': 'Moraš unijeti grad!' ,
            'any.required': 'Moraš unijeti grad!' ,
        }),
        phone: Joi.string().required().messages({
            'string.empty': 'Moraš unijeti broj telefona!' ,
            'any.required': 'Moraš unijeti broj telefona!' ,
        })
    });
    return schema.validate(data);
};

export const mealValidation = data => {
    const schema = Joi.object({
        mealID: Joi.number().messages({
            'any.required': 'Moraš unijeti ID jela!' ,
        }),
        active: Joi.bool().required().messages({
            'any.required': 'Moraš odabrati da li je jelo aktivno ili nije!' ,
        }),
        calories: Joi.number().min(1).required().messages({
            'any.required': 'Kalorije moraju biti cijeli broj veći od 0!' ,
            'number.min': 'Kalorije moraju biti cijeli broj veći od 0!' ,
        }),
        description: Joi.string().required().messages({
            'any.required': 'Moraš unijeti opis!' ,
        }),
        name: Joi.string().required().messages({
            'any.required': 'Moraš unijeti ime jela!' ,
        }),
        photo1: Joi.object().required().messages({
            'any.required': 'Glavna slika nije validna!' ,
        }),
        photo2: Joi.object().required().messages({
            'any.required': 'Sporedna slija nije validna!' ,
        }),
        tags: Joi.array().min(1).required().messages({
            'array.required': 'Moraš odabrati barem jednu kategoriju!' ,
            'array.min': 'Moraš odabrati barem jednu kategoriju!' ,
        }),
        time: Joi.number().min(1).required().messages({
            'number.required': 'Moraš unijeti trajanje u minutama!' ,
            'number.min': 'Moraš unijeti trajanje u minutama!' ,
        }),
        
    });
    return schema.validate(data);
};
