const Joi = require("@hapi/joi");

const registerSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required().min(8),
  email: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = {
  registerSchema,
  loginSchema,
};
