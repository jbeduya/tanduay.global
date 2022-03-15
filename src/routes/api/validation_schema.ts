import Joi from 'joi';

const subscribeSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
});

const requiredMessage = {
    'string.empty': '* required'
}

const feedbackSchema = Joi.object({
    firstname: Joi.string().required().messages(requiredMessage),
    lastname: Joi.string().required().messages(requiredMessage),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        'string.empty': '* required',
        'string.email': '* invalid email'
    }),
    mobile: Joi.string().required().messages(requiredMessage),
    message: Joi.string().required().messages(requiredMessage),
});

export { subscribeSchema, feedbackSchema };