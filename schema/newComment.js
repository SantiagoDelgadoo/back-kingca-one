const joi = require("joi");

const schema = joi.object({
  comment: joi.string().required().min(3).messages({
    "any.required": "the field is required,please enter the value",
    "string.empty": "the field is empty",
    "string.min": "comment to short",
  }),
  date: joi.date().messages({
    "any.required": "the field is required,please enter the value",
  }),
  showId: joi.string().required().messages({
    "any.required": "the field is required,please enter the value",
    "string.empty": "the field is empty",
  }),
});

module.exports = schema;
