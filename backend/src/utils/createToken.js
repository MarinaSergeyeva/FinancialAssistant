const jwt = require('jsonwebtoken');

exports.createToken = (existingUser, expiresIn) => {
  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
    expiresIn,
  });
  return token;
};
