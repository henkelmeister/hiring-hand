import knex from 'knex';
import knexfile from '../knexfile';

const pool = knex(knexfile);

export default pool;
