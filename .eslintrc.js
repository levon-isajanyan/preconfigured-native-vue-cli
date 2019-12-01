module.exports = {
    extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommended',
      'plugin:vue/recommended'
    ],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
      'vue/name-property-casing': ['error', 'PascalCase'],
      'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
      'vue/no-boolean-default': ['error', 'default-false'],
      'vue/v-on-function-call': ['error', 'never']
    }
}
