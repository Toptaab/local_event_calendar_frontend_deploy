import Joi from 'joi';

const organizerRegisterSchema = Joi.object({
  profileImage: Joi.any().required().disallow('empty').messages({
    'any.required': 'Official image is required',
  }),
  identityCopyImage: Joi.any().required().disallow('empty').messages({
    'any.required': 'ID copy image is required',
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .trim()
    .messages({
      'any.required': 'Email is required',
      'string.empty': 'Email is required',
      'string.email': 'Email should be in email format',
    }),
  userName: Joi.string().required().trim().messages({
    'any.required': 'Username is required',
    'string.empty': 'Username is required',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
    'string.empty': 'Password is required',
  }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.required': 'Confirm password is required',
    'string.empty': 'Confirm password is required',
    'any.only': 'Confirm password should be matched',
  }),
  gender: Joi.string().required().trim().messages({
    'any.required': 'Gender is required',
    'string.empty': 'Gender is required',
  }),
  corporation: Joi.string().required().trim().messages({
    'any.required': 'Entity type is required',
    'string.empty': 'corporation is required',
  }),
  officialName: Joi.string().required().trim().messages({
    'any.required': 'Official name is required',
    'string.empty': 'Official Name is required',
  }),
}).unknown(true);

const userRegisterSchema = Joi.object({
  profileImage: Joi.any().required().disallow('empty').messages({
    'any.required': 'Official image is required',
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .trim()
    .messages({
      'any.required': 'Email is required',
      'string.empty': 'Email is required',
      'string.email': 'Email should be in email format',
    }),
  userName: Joi.string().required().trim().messages({
    'any.required': 'Username is required',
    'string.empty': 'Username is required',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
    'string.empty': 'Password is required',
  }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.required': 'Confirm password is required',
    'string.empty': 'Confirm password is required',
    'any.only': 'Confirm password should be matched',
  }),
  gender: Joi.string().required().trim().messages({
    'any.required': 'Gender is required',
    'string.empty': 'Gender is required',
  }),
}).unknown(true);

export const validateOrganizerRegister = (input) => {
  const { error } = organizerRegisterSchema.validate(input, {
    abortEarly: false,
  });
  console.dir(error);

  const errorObject = {};
  error?.details.map((el) => {
    errorObject[el.path[0]] = el.message;
    return null;
  });

  return errorObject;
};

export const validateUserRegister = (input) => {
  const { error } = userRegisterSchema.validate(input, { abortEarly: false });
  console.dir(error);

  const errorObject = {};
  error?.details.map((el) => {
    errorObject[el.path[0]] = el.message;
    return null;
  });

  return errorObject;
};
