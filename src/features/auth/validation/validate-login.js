import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .trim()
    .messages({ 'string.empty': 'Email is required' }),
  password: Joi.string()
    .required()
    .messages({ 'string.empty': 'Password is required' }),
});

export const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });

  const errorObject = {};
  const temp = error?.details.map((el) => {
    errorObject[el.path[0]] = el.message;
    return null;
  });

  return errorObject;
};

export const temp = () => {};
