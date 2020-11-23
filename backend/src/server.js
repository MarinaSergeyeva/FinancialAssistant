const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const authRouter = require("./api/auth/auth.routers");
const usersRouter = require("./api/users/user.router");
const transactionRouter = require("./api/transactions/transactionRouter");
const { initGoogleOauthStrategy } = require('./api/auth/strategies/google.strategy');
const passport =  require('passport');
const cookieParser = require("cookie-parser");

require("dotenv").config({ path: path.join("./.env") });


const AppError = require("./api/errors/appError");
const PORT = process.env.PORT || 8080;
const globalErrorHandler = require('./api/errors/error.controller');

const mongoose = require('mongoose');
const { updateInfo } = require('./api/cron/cronUpdateInfo');

const giftsRouter = require('./api/gifts/gifts.router');



class CrudServer {
  constructor() {
    this.server = null;
    // this.config = config;
  }

  async start() {
    this.initServer();
    await this.initDatabase();
    this.initMiddlewares();
    this.initServerRouters();
    this.initErrorHandling();
    this.startListening();
  }


  initServer() {
    this.server = express('');
  }

  async initDatabase() {
    try {
      mongoose.set('debug', true);
      await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });
      updateInfo();
      console.log('Database has been connected');
    } catch (err) {
      console.log('Something bad happened while connection to DB', err);
      process.exit(1);
    }
  }

  initMiddlewares() {
    this.server.use(cookieParser());
    this.server.use(passport.initialize());
    this.server.use(passport.session());
    initGoogleOauthStrategy();

    passport.serializeUser((user, done) => {
      done(null, user._id);
    });
    passport.deserializeUser(async (id, done) => {
      const user = await UserModel.findById(id);
      if (!user) {
        done(new Error("User not authorized"));
      }

      done(null, user);
    });


    this.server.use(cors({ origin: process.env.ALLOWED_ORIGIN }));

    if (process.env.NODE_ENV === "development") {
      this.server.use(morgan("dev"));
    }

    if (process.env.NODE_ENV !== 'development') {
      this.server.use(morgan('combined'));
    }
    this.server.use(express.json());

    this.server.use((req, res, next) => {
      req.requestTime = new Date().toISOString();

      next();
    });

    updateInfo();
  }

  initServerRouters() {
    //   this.server.use('/api/v1/contacts', contactRouter);
    this.server.use('/api/v1/transactions', transactionRouter);
    this.server.use('/api/v1/auth', authRouter);
    this.server.use('/api/v1/users', usersRouter);
    this.server.use('/api/v1', giftsRouter);
  }

 
  initErrorHandling() {
    this.server.all('*', (req, res, next) => {
      next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
    });

    this.server.use(globalErrorHandler);
  }

  startListening() {
    this.server.listen(PORT, err => {
      if (err) {
        return console.log('Something bad happened', err);
      }
      console.log(`Server is listening on port ${PORT}...`);
    });
  }
}

exports.CrudServer = CrudServer;
exports.crudServer = new CrudServer();

