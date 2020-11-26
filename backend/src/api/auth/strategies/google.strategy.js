const passport = require('passport');
const userModel = require('../../users/user.model');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

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
        try {
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
        } catch (error) {
          done(error, false);
        }
      },
    ),
  );
};
