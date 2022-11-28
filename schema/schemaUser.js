const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(3).max(50).messages({
    "any.required": "Name is requiered",
    "string.empty": "Name is requiered",
    "string.min": "Name is to short",
    "string.max": "Name is to large",
  }),
  lastName: joi.string().required().min(3).max(50).messages({
    "any.required": "Lastname is required",
    "string.empty": "Lastname ts shorted",
    "string.min": "Lastname istto short",
    "string.max": "Lastname is to large",
  }),
  age: joi.number().required().min(15).messages({
    "any.required": "Age is requiered",
    "number.base": "Age is requiered",
    "number.min": "You must be over 15 years old",
  }),
  photo: joi.string().required().uri().messages({
    "any.required": "Photo is required",
    "string.empty": "Photo is required",
    "string.uri": "Invalid URL",
  }),
  email: joi.string().required().email({ minDomainSegments: 2 }).messages({
    "any.required": "Email is required",
    "string.empty": "Email is required",
    "string.email": "The email is not valid",
  }),
  password: joi.string().required(),
  role: joi.string().valid("user", "admin"),
});

module.exports = schema;