const path = require("path");
require("dotenv").config({ path: path.join("../../.env") });
const PORT = process.env.PORT || 3000;

exports.config = {
  port: PORT,
  mongodb_url: process.env.DB_URI,
  jwtSecret: process.env.JWT_SECRET,

  oAuthGoogle: {
    clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_OAUTH_CALLBACK_URL,
  },
};