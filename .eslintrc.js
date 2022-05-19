module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: [
    '**/dist/*.js'
  ],
  rules: {
    indent: 'off',
    'no-tabs': 'off',
    'padded-blocks': 'off'
  }
}
