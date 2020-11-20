const passport = require("passport");
const userModel = require('../../users/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const { UserModel } = require("../../users/user.model");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

exports.initGoogleOauthStrategy = function () {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_OAUTH_CALLBACK_URL,
        passReqToCallback: true,
      },
      async (request, accessToken, refreshToken, profile, done) => {
        console.log(profile, ">>>profile<<<<")
        console.log(accessToken, ">>> accessToken <<<<")
       
          const user = await userModel.findOneAndUpdate(
            { email: profile.email },
            { $setOnInsert: { username: profile.username} }, 
            // profile.name
            { upsert: true, new: true },
          )
 

        done(null, user);
      }
    )
  );
};