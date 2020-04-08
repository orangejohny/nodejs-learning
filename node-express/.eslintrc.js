module.exports = {
  'env': {
    'node': true,
    'commonjs': true,
    'es6': true,
  },
  'extends': [
    'google',
    'eslint:recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'rules': {
    'new-cap': 'warn',
    'max-len': ["error", { "code": 120 }]
  },
};
