import _ from 'lodash';
import pgtools from 'pgtools';
import { db } from '../../config';

const config = _.pick(db, 'host', 'port', 'user', 'password');
const handler = (error) => error && console.error(error.message);

pgtools.createdb(config, db.database, handler);
