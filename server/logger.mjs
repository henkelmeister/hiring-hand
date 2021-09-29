import winston from 'winston';
import { paths } from '../config';

const logger = winston.createLogger({
  exitOnError: false,
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
      handleExceptions: true,
      handleRejections: true
    }),
    new winston.transports.File({
      filename: `${paths.log}/server.log`,
      handleExceptions: true,
      handleRejections: true
    })
  ]
});

export default logger;
