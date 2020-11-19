const cron = require("node-cron");
const express = require("express");
//const { getCurrentUser } = require("../users/user.controller");
const UserDB = require("../users/user.model");
// const { db } = require("../users/user.model");
// const TransactionModel = require("./Trans.model");
// TransactionModel
const mongoose = require("mongoose");
const objectId = require("mongoose").objectId;
const catchAsync = require("../../utils/catchAsync");
const { TransactionModel } = require("../transactions/transaction.model");
const monthReportModel = require("./monthReport.model");

const updateInfo = () => {
  cron.schedule("*/10 * * * * *", async () => {
    // let t = UserDB.find({ [id]: _id });

    const users = await UserDB.find();

    await Promise.all(
      users.map(async (user) => {
        const income = user.totalSalary + user.passiveIncome;
          const totalExpansesMonthly = ;

          
          user.balance += income;
        await user.save();

        await TransactionModel.create({
          amount: income,
          transactionDate: new Date(),
          type: "INCOME",
        });
        //=======
        await monthReportModel.create({
          totalExpenses: {},
          totalSavings: {},
          totalIncome: {income},
          expectedSavingsPercentage: {},
          expectedSavings: {},
        });
        //========
      })
    );
  });
};

module.exports = { updateInfo };
