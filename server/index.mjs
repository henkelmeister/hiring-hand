import 'make-promises-safe';
import { server } from '../config';
import App from './App';
import logger from './logger';

App().listen(server.port, () => logger.info(`Listening on port ${server.port}`));
