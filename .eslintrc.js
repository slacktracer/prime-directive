module.exports = {
  env: { es6: true, node: true },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 8 // or 2017
  },
  rules: {
    'array-bracket-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    curly: 'error',
    indent: ['error', 2, { SwitchCase: 0 }],
    'max-len': 'off',
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always']
  }
};
