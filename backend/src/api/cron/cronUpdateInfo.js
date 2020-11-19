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
    //const userTransactions = TransactionModel.find({ userId: user._id });

    const users = await UserDB.find();

    await Promise.all(
      users.map(async (user) => {
        const income = user.totalSalary + user.passiveIncome;
        let now = new Date();
        const currentMonth = now.getMonth();
        const userTransactions = TransactionModel.find({
          userId: user._id,
          $expr: {
            $eq: [{ $month: "$transactionDate" }, currentMonth],
          },
        });

        const getAmount = userTransactions.reduce(function (sum, transaction) {
          return sum + transaction.amount;
        }, 0);

        user.balance += income;
        await user.save();

        await TransactionModel.create({
          amount: income,
          transactionDate: new Date(),
          type: "INCOME",
        });

        await monthReportModel.create({
          totalExpenses: getAmount(),
          totalSavings: 200,
          totalIncome: 200,
          expectedSavingsPercentage: 5,
          expectedSavings: 100,
        });
        // await monthReportModel.create({
        //   totalExpenses: { monthlyExpanses },
        //   totalSavings: monthlyIncome - monthlyExpanses,
        //   totalIncome: { income }, //DONE
        //   expectedSavingsPercentage: user.incomePercentageToSavings,
        //   expectedSavings: user.flatPrice - user.totalSavings,
        // });
      })
    );
  });
};
module.exports = { updateInfo };

// const totalExpansesMonthly = userTransactions.amount;
// console.log("userTransactions", userTransactions);
//=======
//   [
//     {
//       $project: {
//         doc: "$$ROOT",
//         year: { $year: "$created" },
//         month: { $month: "$created" },
//         day: { $dayOfMonth: "$created" },
//       },
//     },
//     { $match: { month: 4, year: 2016 } },
//     ]
//======
//       [
//   { $match: { userId: user._id } },
//   {
//     $group: { type: "EXPENSE" },
//     $month: { $month: "$transactionDate" },
//   },
//       ]
//=======
// await monthReportModel.create({
//   totalExpenses: { monthlyExpanses },
//   totalSavings: monthlyIncome - monthlyExpanses,
//   totalIncome: { income }, //DONE
//   expectedSavingsPercentage: user.incomePercentageToSavings,
//   expectedSavings: user.flatPrice - user.totalSavings,
// });

// const userTransactionsfilteredMonth = userTransactions.filter(
//   (transaction) => transaction.transactionDate. === currentMonth
// );

// await TransactionModel.aggregate([
//   {
//     $group: {
//       userId: user._id,
//       $match: {
//         $expr: {
//           $eq: [{ $month: "$transactionDate" }, currentMonth],
//         },
//       },
//     },
//   },
// ]);
// })
