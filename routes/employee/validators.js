const Joi = require('joi');

const createEmployeeSchema = Joi.object({
  email : Joi.string().email().required(),
  name : Joi.string().required(),
  phone : Joi.string().required(),
  designation : Joi.string().required(),
});

const updateEmployeeSchema = Joi.object({
  email : Joi.string().email(),
  name : Joi.string(),
  phone : Joi.string(),
  designation : Joi.string(),
});

const createEmployeeSchemaValidator = (req, res, next) => {
  const val = createEmployeeSchema.validate(req.body);
  if(val.error) {
    res.status(400).send({ success : false, msg : val.error.message });
    return;
  }
  next();
}

const updateEmployeeSchemaValidator = (req, res, next) => {
  const val = updateEmployeeSchema.validate(req.body);
  if(val.error) {
    res.status(400).send({ success : false, msg : val.error.message });
    return;
  }
  next();
}

module.exports = {
  createEmployeeSchemaValidator,
  updateEmployeeSchemaValidator
};