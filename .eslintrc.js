const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
    'parser': 'babel-eslint',
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true,
        'jest': true
    },
    'settings': {
      "react": {
        "version": "16.8.6"
      }
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended'],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'prettier'
    ],
    'rules': {
      'prettier/prettier': ['error', prettierOptions],
      'indent': [
        2,
        2,
        {
          SwitchCase: 1,
        },
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'quotes': [
        'error',
        'single', { "allowTemplateLiterals": true },
      ],
      'semi': [
        'error',
        'always'
      ],
      'no-unused-vars': 1,
      'no-console': 1,
    }
};