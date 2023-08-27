module.exports = {
  root: true,
  extends: 'react-app',
  rules: {
    semi: ['error', 'never'],
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'no-console': ['error'],
    'no-shadow': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react-hooks/exhaustive-deps': 'off',
    'no-spaced-func': 'off',
    'no-extra-boolean-cast': 'off',
  },
}
