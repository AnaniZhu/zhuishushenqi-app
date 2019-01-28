module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', "react-app"],
  plugins: ['react'],
  rules: {
    "no-console": 0
  }
}