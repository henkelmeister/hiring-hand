import { db, paths } from './config';

const knexfile = {
  client: 'pg',
  connection: db,
  migrations: {
    directory: `${paths.db}/migrate`
  },
  seeds: {
    directory: `${paths.db}/seeds`
  }
};

export default knexfile;
