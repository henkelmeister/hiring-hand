import morgan from 'morgan';
import logger from '../logger';

const httpLogger = () => morgan('combined', { stream: { write: (message) => logger.info(message) } });

export default httpLogger;
