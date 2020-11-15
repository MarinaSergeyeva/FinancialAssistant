const Joi = require('joi');

const UserSchema = Joi.object({
  balance: Joi.number(),
  flatPrice: Joi.number(),
  flatSquareMeters: Joi.number(),
  totalSalary: Joi.number(),
  passiveIncome: Joi.number(),
  incomePercentageToSavings: Joi.number(),
});

const validationMiddleware = schema => async (req, res, next) => {
  const { error } = await schema.validate(req.body);
  if (error) {
    const message = error.details.reduce((msg, nextError) => {
      if (msg) {
        return msg + ', ' + nextError;
      }
      return nextError.message;
    }, '');
    res.status(400).send(message);
    return;
  }
  next();
};

module.exports = {
  userValidationMiddleware: validationMiddleware(UserSchema),
};
