module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', "react-app", 'plugin:prettier/recommended'],
  plugins: ['react'],
  rules: {
    "no-console": 0,
    "prettier/prettier": ["error", {
      "singleQuote": true
    }]
  }
}