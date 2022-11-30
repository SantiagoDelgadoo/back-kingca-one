const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(3).max(70).messages({
    "any.required": "the field is required,please enter the value",
    "string.empty": "the field is empty",
    "string.min": "name to short",
    "string.max": "name to long",
  }),
  icon: joi.string().uri().required().messages({
    "string.uri": "the link does not correspond to a url",
  }),
  iconBack: joi.string().uri().required().messages({
    "string.uri": "the link does not correspond to a url",
  }),
  itineraryid: joi.string().required().messages({
    "string.empty": "the field is empty",
    "string.base": "userid must be a string",
  }),
  userId: joi.string().required().messages({
    "string.empty": "the field is empty",
    "string.base": "userid must be a string",
  }),
});

module.exports = schema;