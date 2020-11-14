const mongoose = require("mongoose");

const { Schema } = mongoose;

const userScheme = new Schema({
  username:{ type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String },
  id : { type: String },
  totalSalary:{ type: Number },
  passiveIncome: { type: Number },
  incomePercentageToSavings : { type: Number },
  flatPrice: { type: Number },
  flatSquareMeters : { type: Number },
  balance: { type: Number },
});

const UserModel = mongoose.model("User", userScheme);

module.exports = UserModel;