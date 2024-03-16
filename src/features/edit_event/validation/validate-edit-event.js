import Joi from 'joi';

const editEvenntSchema = Joi.object({
  coverImage: Joi.object()
    .required()
    .messages({ 'any.required': 'Cover image is required' }),
  title: Joi.string().trim().messages({
    'any.required': 'Title is required',
    'string.empty': 'Title is required',
  }),
  startDate: Joi.date()

    .messages({ 'any.required': 'Start date is required' }),
  endDate: Joi.date()

    .messages({ 'any.required': 'End date is required' }),
  timePeriod: Joi.string()

    .messages({ 'any.required': 'Start time and end time is required' }),
  provinceId: Joi.number()

    .messages({ 'any.required': 'Province is required' }),
  districtId: Joi.number()

    .messages({ 'any.required': 'District is required' }),
  subDistrictId: Joi.number()

    .messages({ 'any.required': 'SubDistrict is required' }),
  categoryId: Joi.number()

    .messages({ 'any.required': 'Category is required' }),
  lat: Joi.number()

    .messages({ 'any.required': 'Map location is required' }),
}).unknown(true);

export const validateEditEvent = (input) => {
  const { error } = editEvenntSchema.validate(input, { abortEarly: false });
  // console.dir(error);

  const errorObject = {};
  error?.details.map((el) => {
    errorObject[el.path[0]] = el.message;
    return undefined;
  });

  return errorObject;
};

export default validateEditEvent;
