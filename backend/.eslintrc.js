module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'no-console': 'off',
  },
};
