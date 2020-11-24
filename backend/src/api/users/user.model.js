const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    passwordHash: { type: String },
    picture: { type: String },
    balance: { type: Number, default: 0, required: true },
    flatPrice: { type: Number, default: 0, required: true },
    flatSquareMeters: { type: Number, default: 0, required: true },
    totalSalary: { type: Number, default: 0, required: true },
    passiveIncome: { type: Number, default: 0, required: true },
    incomePercentageToSavings: { type: Number, default: 0, required: true },
    giftsUnpacked: { type: Number, default: 0 },
    giftsForUnpacking: { type: Number, default: 0 },
    tokens: [{ type: String }],
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);
