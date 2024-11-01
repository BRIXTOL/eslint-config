import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import parser from '@typescript-eslint/parser'
import plugin from '@typescript-eslint/eslint-plugin'

export default [
  ...(new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) }).extends('eslint-config-standard')),
  {
    files: [
      "**/*.ts",
      "**/*.cjs",
      "**/*.js",
      "**/*.mjs"
    ],
    plugins: {
      '@typescript-eslint': plugin
    },
    languageOptions: {
      sourceType: "module",
      parser,
      ecmaVersion: 2020
    },
    rules: {

      /* OFF ---------------------------------------- */

      "multiline-ternary": 0,
      "no-undef": "off",
      "implicit-arrow-linebreak": 0,
      "class-methods-use-this": 0,
      "camelcase": 0,
      "guard-for-in": 0,
      "allowElseIf": 0,

      /* SEMICOLONS --------------------------------- */

      "semi": [
        "error",
        "always"
      ],

      /* TEMPLATE ----------------------------------- */

      "template-curly-spacing": [
        "error",
        "never"
      ],

      /* DEFINERS ----------------------------------- */

      "no-use-before-define": [
        "error"
        , {
          "functions": false,
          "classes": true,
          "variables": true
        }
      ],

      /* INDENTATION -------------------------------- */

      "indent": [
        "error"
        , 2
        , {
          "MemberExpression": 1,
          "SwitchCase": 1,
          "ignoredNodes": [
            "TemplateLiteral"
          ]
        }
      ],

      /* SPACING ------------------------------------ */

      "key-spacing": [
        2
        , {
          "singleLine": {
            "beforeColon": false,
            "afterColon": true,
          }
        }
      ],

      /* NEWLINE RELATED ---------------------------- */

      "function-paren-newline": [
        "error",
        "consistent"
      ],
      "array-element-newline": [
        "error",
        "consistent"
      ],
      "array-bracket-newline": [
        "error",
        "consistent"
      ],
      "array-bracket-spacing": [
        "error",
        "always"
      ],
      "operator-linebreak": [
        "error"
        , "after"
        , {
          "overrides": {
            "?": "before",
            ":": "before"
          }
        }
      ],
      "newline-per-chained-call": [
        "error"
        , {
          "ignoreChainWithDepth": 4
        }
      ],


      /* COMMA STYLE -------------------------------- */

      "comma-dangle": [
        "error",
        "never"
      ],
      "comma-style": [
        "error"
        , "last"
        , {
          "exceptions": {
            "ArrayExpression": true,
            "ObjectExpression": true,
            "VariableDeclaration": true
          }
        }
      ],

      /* VARIABLE RELATED --------------------------- */

      "one-var": [
        "error"
        , {
          "var": "always",
          "let": "never",
          "const": "never"
        }
      ],

      /* OBJECT SPECIFIC ---------------------------- */

      "object-curly-spacing": [
        "error",
        "always"
      ],
      "object-curly-newline": [
        "error"
        , {
          "ObjectExpression": {
            "multiline": true,
            "minProperties": 7,
            "consistent": true
          }
          , "ObjectPattern": {
            "multiline": true,
            "minProperties": 7,
            "consistent": true,
          }
          , "ImportDeclaration": {
            "multiline": true,
            "minProperties": 15,
            "consistent": true,
          }
          , "ExportDeclaration": {
            "multiline": false,
            "minProperties": 10,
          }
        }
      ],
      "object-property-newline": [
        "error"
        , { "allowAllPropertiesOnSameLine": true }
      ],

      /* PADDED BLOCKS ------------------------------ */

      "padded-blocks": [
        1
        , { "classes": "always" }
        , { "allowSingleLineBlocks": true }
      ],
      "padding-line-between-statements": [
        "error"
        , {
          "blankLine": "any",
          "prev": "cjs-export",
          "next": "*"
        }
        , {
          "blankLine": "any",
          "prev": "if",
          "next": "block-like",
        }
      ]
    }
  }
];
