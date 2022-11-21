const joi = require ('joi')

const schema = joi.object({
    name: joi.string().pattern(/[a-z]/).required().min(5).max(37).messages({
        "any.required": "name is required",
        "string.base": "name is empty",
        "string.min": "name is too short",
        "string.max": "name is too long",
        "string.pattern.base": "name is not a number"
    }),
    continent: joi.string().pattern(/[a-z]/).required().min(4).max(7).messages({
        "any.required": "continent is required",
        "string.base": "continent is empty",
        "string.min": "continent is too short",
        "string.max": "continent is too long",
        "string.pattern.base": "continent is not a number"
    }),
    photo: joi.string().required().messages({
        "any.required": "photo is required",
        "string.base": "please insert a valid url",
    }),
    population: joi.number().required().messages({
        "any.required": "population is required",
        "string.base": "population has to be a number",
    }),
    userid: joi.string().required().messages({
        "any.required": "userid is required",
        "string.base": "userid must be a string",
    })
})

module.exports = schema;