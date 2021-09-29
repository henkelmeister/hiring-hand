import compression from 'compression';
import connectSessionKnex from 'connect-session-knex';
import cookieParser from 'cookie-parser';
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import hpp from 'hpp';
import { server } from '../config';
import { errorHandler, httpLogger } from './middleware';
import { apiRouter, publicRouter, reactRouter } from './routers';
import pool from './pool';

const App = () => {
  const app = express();
  app.use(httpLogger());
  app.use(helmet({
    contentSecurityPolicy: false
  }));
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));
  app.use(cookieParser(server.secret));
  app.use(session({
    secret: server.secret,
    store: new (connectSessionKnex(session))({
      knex: pool
    }),
    resave: true,
    saveUninitialized: false
  }));
  app.use(hpp({}));
  app.use(server.api, apiRouter());
  app.use('/', publicRouter());
  app.use('*', reactRouter());
  app.use(errorHandler());
  return app;
};

export default App;
