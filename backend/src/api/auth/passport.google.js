const { Strategy: LocalStrategy } = require( "passport-local");
// const LocalStrategy = require('passport-google-oauth20').Strategy;
// const GoogleOAuthStrategy = require('passport-google-oauth20').Strategy;
const { Strategy: GoogleOAuthStrategy } = require( "passport-local");
const {userModel} = require('../users/user.model');
const {config} = require('../../config');
const passport =  require('passport');

class PassportStrategies {
  initLocalPassportStrategy() {
    passport.use(
      new LocalStrategy(
        {
          usernameField: "email"
        },
        async (email, password, done) => {
          const user = await userModel.findUserByEmail(email);
          if (!user) {
            return done(null, false, { message: "Incorrect email" });
          }
          if (!(await user.isValidPassword(password))) {
            return done(null, false, { message: "Incorrect password" });
          }

          return done(null, user);
        }
      )
    );
  }

  initGoogleOAuthStrategy() {
    passport.use(
      new GoogleOAuthStrategy(config.oAuthGoogle, async function(
        request,
        accessToken,
        refreshToken,
        profile,
        done
      ) {
        const user = await userModel.findOrCreateUserByEmail(
          profile.email,
          profile.displayName
        );
        done(null, user);
      })
    );
  }
}



exports.passportStrategies = new PassportStrategies();