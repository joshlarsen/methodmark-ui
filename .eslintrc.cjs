/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended'
  ],
  'globals': {
    'NodeJS': true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue']
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'eslint-plugin-tailwindcss',
  ],
  rules:{
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/no-contradicting-classname': 'warn',
  },
  settings: {
    'tailwindcss': {
      'config': './tailwind.config.js'
    }
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    }
  ]
}
