const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const authRouter = require('./api/auth/auth.routers');
const usersRouter = require('./api/users/users.router');
require('dotenv').config({ path: path.join('./.env') });

const AppError = require('./api/errors/appError');
const PORT = process.env.PORT || 8080;
const globalErrorHandler = require('./api/errors/error.controller');

const mongoose = require('mongoose');

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

  initServer() {
    this.server = express();
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
      console.log('Database has been connected');
    } catch (err) {
      console.log('Something bad happend while connection to DB', err);
      process.exit(1);
    }
  }

  initMiddlewares() {
    this.server.use(cors({ origin: `http://localhost:${PORT}` }));
    if (process.env.NODE_ENV === 'development') {
      this.server.use(morgan('dev'));
    }

    if (process.env.NODE_ENV !== 'development') {
      this.server.use(morgan('combined'));
    }
    this.server.use(express.json());

    this.server.use((req, res, next) => {
      req.requestTime = new Date().toISOString();

      next();
    });
  }

  initServerRouters() {
    //   this.server.use('/api/v1/contacts', contactRouter);
    this.server.use('/api/v1/auth', authRouter);
    this.server.use('/api/v1/users', usersRouter);
    //   this.server.use('/', userRouter, express.static('public'));
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
