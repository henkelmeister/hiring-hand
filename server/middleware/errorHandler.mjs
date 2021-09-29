import HTTP from 'http-status-codes';
import logger from '../logger';

const errorHandler = () => (err, req, res, _) => {
  logger.error(logger.exceptions.getAllInfo(err));
  res.status(HTTP.INTERNAL_SERVER_ERROR).json(err.message).send();
};

export default errorHandler;
