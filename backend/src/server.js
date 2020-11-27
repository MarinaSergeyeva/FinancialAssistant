const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const authRouter = require('./api/auth/auth.routers');
const usersRouter = require('./api/users/user.router');
const giftsRouter = require('./api/gifts/gifts.router');
const transactionRouter = require('./api/transactions/transactionRouter');
const {
  initGoogleOauthStrategy,
} = require('./api/auth/strategies/google.strategy');
const {
  initFacebookOauthStrategy,
} = require('./api/auth/strategies/google.strategy');

const AppError = require('./api/errors/appError');
const globalErrorHandler = require('./api/errors/error.controller');
const { updateInfo } = require('./api/cron/cronUpdateInfo');
require('dotenv').config({ path: path.join('./.env') });
const PORT = process.env.PORT || 8080;

class CrudServer {
  constructor() {
    this.server = null;
  }

  async start() {
    this.initServer();
    await this.initDatabase();
    this.initMiddlewares();
    this.initServerRouters();
    this.initErrorHandling();
    this.startListening();
  }

  async startForTest() {
    this.initServer();
    await this.initDatabase();
    this.initMiddlewares();
    this.initServerRouters();
    this.initErrorHandling();
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
    this.server.use(passport.initialize());
    initGoogleOauthStrategy();
    this.server.use(express.json());

    this.server.use((req, res, next) => {
      req.requestTime = new Date().toISOString();
      next();
    });

    updateInfo();
  }

  initServerRouters() {
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
