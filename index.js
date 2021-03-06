// @ts-nocheck
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: false, // FUCK FACEBOOK
    node: true,
  },
  extends: ["standard"],
  plugins: ["@babel", "import"],
  settings: {
    "import/resolver": {
      "babel-module": {},
    },
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    requireConfigFile: false,
  },
  rules: {
    "no-undef": "off",
    "template-curly-spacing": ["error", "never"],
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    "multiline-ternary": 0,
    indent: [
      "error",
      2,
      {
        MemberExpression: 1,
        SwitchCase: 1,
        ignoredNodes: ["TemplateLiteral"],
      },
    ],
    "implicit-arrow-linebreak": "off",
    "class-methods-use-this": 0,
    camelcase: 0,
    "guard-for-in": 0,
    allowElseIf: 0,
    "key-spacing": [
      2,
      {
        singleLine: {
          beforeColon: false,
          afterColon: true,
        },
      },
    ],
    "function-paren-newline": ["error", "consistent"],
    "array-element-newline": ["error", "consistent"],
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "comma-style": [
      "error",
      "last",
      {
        exceptions: {
          ArrayExpression: true,
          ObjectExpression: true,
          VariableDeclaration: true,
        },
      },
    ],
    "one-var": [
      "error",
      {
        var: "always",
        let: "never",
        const: "never",
      },
    ],
    "operator-linebreak": [
      "error",
      "after",
      {
        overrides: {
          "?": "before",
          ":": "before",
        },
      },
    ],
    "newline-per-chained-call": [
      "error",
      {
        ignoreChainWithDepth: 4,
      },
    ],
    "object-curly-spacing": ["error", "always"],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 7,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 7,
          consistent: true,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 15,
          consistent: true,
        },
        ExportDeclaration: {
          multiline: false,
          minProperties: 10,
        },
      },
    ],
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    "padded-blocks": [
      1,
      {
        classes: "always",
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    semi: ["error", "never"],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "any",
        prev: "cjs-export",
        next: "*",
      },
      {
        blankLine: "any",
        prev: "if",
        next: "block-like",
      },
    ],
  },
};
