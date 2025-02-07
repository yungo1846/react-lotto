module.exports = {
  plugins: ['prettier'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['react-app', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  ignorePatterns: ['cypress/'],
};
