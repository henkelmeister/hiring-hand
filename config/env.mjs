import _ from 'lodash';

const environment = process.env.NODE_ENV || (process.env.NODE_ENV = 'development');
const env = {
  environment: environment,
  development: environment === 'development',
  production: environment === 'production',
  test: environment === 'test',
  resolve: (config = {}) => _.merge(config, config[environment])
};

export default env;
