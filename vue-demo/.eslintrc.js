module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    'no-useless-escape': 'off',
    'prefer-const': 'off',
    'no-unused-vars': 1,
    'vue/require-prop-types': 'off',
    'no-console': 'off',
    'vue/valid-v-model': 'off',
    'vue/no-v-html': 'off',
  }
};
