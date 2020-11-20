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
    const users = await UserDB.find();

    //await TransactionModel.deleteMany({ type: "INCOME" });
    //await monthReportModel.deleteMany();
    //await TransactionModel.insertMany({ type: "INCOME" });
   

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
                  // { $month: "$transactionDate" },
                total: { $sum: "$amount" },
              },
            },
          ]);
        // console.log('result', result)
        let totalExpenses;
        if (result.length === 0) {
          totalExpenses = 0;
        } else {
          const [{ total }] = result;
          totalExpenses = total;
        };
           await monthReportModel.create({
          totalExpenses: totalExpenses,//
          totalSavings: income,
          totalIncome: income - totalExpenses,//
          expectedSavingsPercentage: user.incomePercentageToSavings,
          expectedSavings: income * user.incomePercentageToSavings/100,//
        });
//          totalIncome: income - totalAm,//
 (income/sqm.price )-giftsUnpacked =giftsForUnpacking
        //});
       // showResult();
      }
     )
    )
  })
};

     module.exports = { updateInfo };
         // type: "EXPENSES",
   
    
           // $expr: {
                //   $eq: [{ $month: "$transactionDate" }, currentMonth],
                // },
          // const result = await TransactionModel.aggregate([
          //   {
          //     userId: "5fb524d2665c1830649c3687",
          //     $expr: {
          //       $eq: [{ $month: "$transactionDate" }, currentMonth],
          //     },
          //     type: "EXPENSES",
          //   },
          // ]);
          // res.status(201).json({
          //   result,
          // });
        // });
      //Result = async () => {
        //   const result = await TransactionModel.aggregate({
        //     userId: "5fb524d2665c1830649c3687",
        //     $expr: {
        //       $eq: [{ $month: "$transactionDate" }, currentMonth],
        //     },
        //     type: "EXPENSES",
        //   });
        //   console.log("result", result);
        // };
        // showResult();
        // await TransactionModel.aggregate([
        //   {
        //     $match: {
        //       userId: user._id,
        //       type: "EXPENSES",
        //       $expr: {
        //         $eq: [{ $month: "$transactionDate" }, currentMonth ],
        //       },
        //     },
        //   },
        //   {
        //     $group: {
        //       _id: { $month: "$transactionDate" },
        //       total: { $sum: "$amount" },
        //     },
        //   },
        // ]);

        // await TransactionModel.find(
        //   {
        //     userId: user._id,
        //     type: "EXPENSES",
        //     $expr: {
        //       $eq: [{ $month: "$transactionDate" }, currentMonth],
        //     },
        //     totalAmount: { $sum: "$amount" },
        //   }
        //   //{ totalAmount: { $sum: "$amount" } }
        // );
        //   })
        // );

        //console.log("totalAmountOfEx", totalAmountOfEx);
     // })
    //);
//   });
// };

//         user.balance += income;
//         await user.save();
// await TransactionModel.create({
//   amount: income,
//   transactionDate: Date.now(),
//   type: "INCOME",
// });
//         await monthReportModel.create({
//           totalExpenses: total,
//           totalSavings: 200,
//           totalIncome: 200,
//           expectedSavingsPercentage: 5,
//           expectedSavings: 100,
//         });
//       })
//     );
//   });
//   });
// };


// await monthReportModel.create({
//   totalExpenses: { monthlyExpanses },
//   totalSavings: monthlyIncome - monthlyExpanses,
//   totalIncome: { income }, //DONE
//   expectedSavingsPercentage: user.incomePercentageToSavings,
//   expectedSavings: user.flatPrice - user.totalSavings,
// });
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
//==============
//const userTransactions = TransactionModel.find({
//   userId: user._id,
//   $expr: {
//     $eq: [{ $month: "$transactionDate" }, currentMonth],
//   },
// });

// const getAmount = userTransactions.reduce(function (sum, transaction) {
//   return sum + transaction.amount;
// }, 0);
//======
// { $type: "EXPENSE" },
//  { $userId: user._id }

// {

// { $group: { _id: null, totalAmount: { $sum: "$amount" } } }
