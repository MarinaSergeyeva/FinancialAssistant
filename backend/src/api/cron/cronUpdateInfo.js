const cron = require("node-cron");
const express = require("express");
//const { getCurrentUser } = require("../users/user.controller");
const UserDB = require("../users/user.model");
// const { db } = require("../users/user.model");
const mongoose = require("mongoose");
const updateInfo = () => {
  cron.schedule("* * * * *", async () => {
    const cronUpdateUsers = await UserDB.updateMany(
      {},
      { $inc: { balance: "200" } }
    );
    //   const CronUpdateUsersController = catchAsync(async (req, res, next) => {
    //const cronUpdateUsers = await UserDB.updateMany({}, { $set: { "balance": "3500" } }, {multi:true})
    cronUpdateUsers();
    console.log("running a task every minute");

    // });
  });
};
module.exports = { updateInfo };
