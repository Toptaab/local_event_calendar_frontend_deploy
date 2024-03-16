const validate = (schema) => (input) => {
  const { value, error } = schema.validate(input, { abortEarly: false });
  if (error) {
    // console.dir(error);
    const errObj = error.details.reduce((acc, el) => {
      let key = el.context.key;
      return { ...acc, [key]: el.message };
    }, {});
    return errObj;
  }
};

export default validate;
