module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'google'
  ],
  parserOptions: {
    sourceType: 'module'
  },
  ignorePatterns: [
    'node_modules/',
    'public/'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'curly': ['error', 'multi-or-nest'],
    'max-len': ['error', { 'code': 120 }],
    'new-cap': 'off',
    'object-curly-spacing': ['error', 'always']
  }
};
