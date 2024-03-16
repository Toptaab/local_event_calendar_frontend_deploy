import Joi from 'joi';

const createEventSchema = Joi.object({
  coverImage: Joi.object()
    .required()
    .messages({ 'any.required': 'Cover image is required' }),
  title: Joi.string().required().messages({
    'any.required': 'Title is required',
    'string.empty': 'Title is required',
  }),
  startDate: Joi.date()
    .required()
    .messages({ 'any.required': 'Start date is required' }),
  endDate: Joi.date()
    .required()
    .messages({ 'any.required': 'End date is required' }),
  timePeriod: Joi.string()
    .required()
    .messages({ 'any.required': 'Start time and end time is required' }),
  provinceId: Joi.number()
    .required()
    .messages({ 'any.required': 'Province is required' }),
  districtId: Joi.number()
    .required()
    .messages({ 'any.required': 'District is required' }),
  subDistrictId: Joi.number()
    .required()
    .messages({ 'any.required': 'SubDistrict is required' }),
  categoryId: Joi.number()
    .required()
    .messages({ 'any.required': 'Category is required' }),
  lat: Joi.number()
    .required()
    .messages({ 'any.required': 'Map location is required' }),
}).unknown(true);

export const validateCreateEvent = (input) => {
  const { error } = createEventSchema.validate(input, { abortEarly: false });
  // console.dir(error);

  const errorObject = {};
  error?.details.map((el) => {
    errorObject[el.path[0]] = el.message;
    return undefined;
  });

  return errorObject;
};

export default validateCreateEvent;
