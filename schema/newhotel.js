const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(3).max(50).messages({
    "any.required": "the field is required,please enter the value",
    "string.empty": "the field is empty",
    "string.min": "name to short",
    "string.max": "name to long",
  }),
  photo: joi.string().uri().required().messages({
    "string.uri": "the link does not correspond to a uri",
  }),
  capacity: joi.number().required().min(0).messages({
    "number.min": "capacity cannot be less than 0",
  }),
  description: joi.string().required().max(500).messages({
    "string.max": "description to long",
  }),
  cityId: joi.any(),
  userId: joi.any(),//acomodar los dos iguales
});

module.exports = schema;
