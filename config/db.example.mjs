import env from './env';

const db = env.resolve({
  host: 'localhost',
  port: 5432,
  user: '', // FILL ME IN
  password: '', // FILL ME IN

  development: {
    database: 'hiring_hand_development'
  },
  test: {
    database: 'hiring_hand_test'
  }
});

export default db;
