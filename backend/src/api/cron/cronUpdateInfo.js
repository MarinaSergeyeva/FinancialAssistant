const cron = require("node-cron");
const express = require("express");

const UserDB = require("../users/user.model");

const mongoose = require("mongoose");
const objectId = require("mongoose").objectId;
const catchAsync = require("../../utils/catchAsync");
const { TransactionModel } = require("../transactions/transaction.model");
const monthReportModel = require("./monthReport.model");

const updateInfo = () => {
  cron.schedule("*/10 * * * * *", async () => {
    //cron.schedule("0 0 1 * *", async () => {
    const users = await UserDB.find();

    //await TransactionModel.deleteMany({ type: "INCOME" });
    //await UserDB.deleteMany();
   // await UserDB.insertMany();
     //await monthReportModel.deleteMany();


    await Promise.all(
      users.map(async (user) => {
        const income = user.totalSalary + user.passiveIncome;
        user.balance += income;
        await user.save();

        await TransactionModel.create({
          amount: income,
          userId: user._id,
          transactionDate: Date.now(),
          type: "INCOME",
        });

        let now = new Date();
        const currentMonth = now.getMonth();
        const result = await TransactionModel.aggregate([
            {
              $match: {
                userId: user._id,
                 $expr: {
                   $eq: [{ $month: "$transactionDate" }, currentMonth+1],
                   
                },
                  type: "EXPENSE",
              },
            },
  
            {
              $group: {
                _id: null,
                total: { $sum: "$amount" },
              },
            },
          ]);
       
        let totalExpenses;
        if (result.length === 0) {
          totalExpenses = 0;
        } else {
          const [{ total }] = result;
          totalExpenses = total;
        };
        await monthReportModel.create({
             userId: user._id,
          totalExpenses: totalExpenses,//
          totalSavings: income - totalExpenses,//
          totalIncome: income,
          expectedSavingsPercentage: user.incomePercentageToSavings,
          expectedSavings: income * user.incomePercentageToSavings/100,//
           });

        sqmPrice = user.flatPrice / user.flatSquareMeters;
        user.giftsForUnpacking = Math.floor((income / sqmPrice) - user.giftsUnpacked);
        console.log('user.giftsForUnpacking', user.giftsForUnpacking)
        await user.save();

      }
     )
    )
  })
};

     module.exports = { updateInfo };
    