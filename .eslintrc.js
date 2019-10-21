module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
//    "plugin:import/errors",
//    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
//    ecmaFeatures: {
//      jsx: true
//    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["import", "prettier", "react", "react-hooks"],
  rules: {
/*    "prettier/prettier": [
      "error",
      {
        "printWidth": 120,
        "tabWidth": 2,
        "useTabs": false,
        "semi": true,
        "singleQuote": true,
        "arrowParens": "always",
        "trailingComma": "all",
        "jsxBracketSameLine": true,
        "jsxSingleQuote": true,
        "endOfLine": "lf"
      }
    ],*/
    "class-methods-use-this": [
      "warn",
      {
        exceptMethods: [
          "componentDidCatch",
          "componentDidMount",
          "componentDidUpdate",
          "componentWillMount",
          "componentWillReceiveProps",
          "componentWillUnmount",
          "componentWillUpdate",
          "render",
          "shouldComponentUpdate"
        ]
      }
    ],
//    "import/no-default-export": "warn",
//    "import/prefer-default-export": "off",
//    "import/no-unresolved": "error", // turn on errors for missing imports
    "@typescript-eslint/no-explicit-any": "off", // We need to delete this disable in future for full scale type-cheking
//    "no-explicit-any": false,
    "no-alert": "error",
    "no-await-in-loop": "warn",
    "no-console": "off",
    "no-continue": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": ["off", "ForOfStatement"],
    "no-underscore-dangle": "off",
    "no-nested-ternary": "off",
    "no-use-before-define": ["error", "nofunc"],
    "guard-for-in": "off",
    "global-require": "off",
    "arrow-body-style": "off",
    "prefer-template": "off",
    "spaced-comment": "off",
//    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "react/destructuring-assignment": "off",
    "react/no-multi-comp": "off",
    "react/no-array-index-key": "off",
    "react/no-did-update-set-state": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
/*    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["to"]
      }
    ]*/
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
        moduleDirectory: ["node_modules", "src"]
      },
      ts: {
        alwaysFindTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true
      },
      typescript: {
        alwaysFindTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true
      }
    }
  }
};
