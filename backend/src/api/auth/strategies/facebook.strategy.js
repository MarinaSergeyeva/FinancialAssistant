const passport = require('passport');
const userModel = require('../../users/user.model');
const FacebookStrategy = require('passport-facebook').Strategy;

exports.initFacebookOauthStrategy = function () {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: process.env.FACEBOOK_APP_CALLBACK_URL,
        passReqToCallback: true,
      },
      async (request, accessToken, refreshToken, profile, done) => {
        const user = await userModel.findOneAndUpdate(
          { email: profile.email },
          {
            $setOnInsert: {
              username: profile.displayName,
              picture: profile.picture,
              balance: 0,
              flatPrice: 0,
              flatSquareMeters: 0,
              totalSalary: 0,
              passiveIncome: 0,
              incomePercentageToSavings: 0,
              giftsUnpacked: 0,
              giftsForUnpacking: 0,
            },
          },
          { upsert: true, new: true },
        );

        done(null, user);
      },
    ),
  );
};
