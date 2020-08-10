module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "no-unused-vars": 1,
    "semi": [1, 'never'],
    "max-len": [1, {code : 100}],
    "import/no-extraneous-dependencies": 0,
    "react/jsx-filename-extension": 0
  },
  parser : "babel-eslint"
}
