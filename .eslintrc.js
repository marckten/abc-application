module.exports = {
  env: {
    node: true
  },
  extends: 'standard',
  rules: {
    indent: [2, 2, {"SwitchCase": 1}],

    //overrides
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'brace-style': ['error', 'stroustrup'],
    'eol-last': 0,
    'strict': 0,

    //team rules
    'no-cond-assign': 2,
    'no-shadow': 2,
  },

};