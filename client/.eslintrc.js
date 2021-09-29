const _ = require('lodash');
const base = require('../.eslintrc');

module.exports = _.merge(base, {
  env: {
    browser: true,
    node: false
  },
  extends: [
    'plugin:react/recommended'
  ],
  plugins: [
    'jsx'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    configFile: 'babel.config.js',
    ecmaFeatures: {
      jsx: true
    },
    babelOptions: {
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
  }
});
