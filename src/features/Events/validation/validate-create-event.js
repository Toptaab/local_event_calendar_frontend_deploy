import Joi from 'joi';

const loginSchema = Joi.object({
  title: Joi.string()
    .required()
    .trim()
    .messages({ 'string.empty': 'title is required' }),
  description: Joi.string()
    .required()
    .messages({ 'string.empty': 'description is required' }),
  startDate: Joi.date()
    .required()
    .messages({ 'string.empty': 'Start Date is required' }),
  endDate: Joi.date()
    .required()
    .messages({ 'string.empty': 'End Date is required' }),
  startTime: Joi.date()
    .required()
    .messages({ 'string.empty': 'Start Date is required' }),
  endTime: Joi.date()
    .required()
    .messages({ 'string.empty': 'Start Date is required' }),
});

export const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });

  const errorObject = {};
  const temp = error?.details.map((el) => {
    errorObject[el.path[0]] = el.message;
    return null;
  });
  console.log('error object is here!!!!');
  console.log(temp);

  return errorObject;
};

export const temp = () => {};
