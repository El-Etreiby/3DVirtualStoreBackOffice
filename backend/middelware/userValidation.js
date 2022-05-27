const Joi = require("joi");


const validateSignin = (req, res, next) => {
  console.log(req.body);
  const schema = Joi.object({
    Email: Joi.string().required(),
    Password: Joi.string().required(),
  }).required();

  const isValid = schema.validate(req.body);
  console.log(isValid.value.email);
  if (!isValid.value) {
    console.log("invalid credentials");
    res.json({
      statusCode: 1,
      error: isValid.error.details[0].message,
    }).status(400).send("invalid credentials");
    return res.end();
  }
  console.log('next');
  return next();
};

const validateSignup = (req, res, next) => {
  console.log('signup validation');
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    password: Joi.string().required(),
    username: Joi.string().required(),
  }).required();

  const isValid = schema.validate(req.body);
  console.log(isValid);
  if (!isValid.value) {
    console.log("invalid data");
     res.json({
      statusCode: 1,
      message: "Invalid Email,this email already exists",
      error: isValid.error.details[0].message,
    }).status(400).send("E-mail already exists");
    return res.end();
  }
  console.log("next");
  return next();
};

module.exports={validateSignin,validateSignup}