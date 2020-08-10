module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
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
    //允许windows开发环境
    "linebreak-style": [0, "error", "windows"],
    // 临时解除import置顶
    "import/first": 0,
    // 未使用警告
    "no-unused-vars": 1,
    // 缩进改为4空格，默认2空格
    indent: [0, 2],
    // JSX React
    "react/jsx-uses-react": 2,
    // 单引号
    "quotes": [1, "single"],
    // 允许 tsx
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".tsx"] }],
    // 允许导入
    "import/no-unresolved": [ 2,  { "caseSensitive": false } ],
    // "singleQuote": 1, //单引号,
    "semi": 1
  }
}
