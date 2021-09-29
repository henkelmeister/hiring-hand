import env from './env';

const server = env.resolve({
  api: '/api',
  secret: '', // FILL ME IN

  development: {
    port: 3201,
    livePort: 3200
  },
  test: {
    port: 3203
  }
});

export default server;
