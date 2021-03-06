module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        amd: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended' // Make sure this is always the last element in the array.
    ],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        "@typescript-eslint/ban-types": [
            "error",
            {
              "extendDefaults": true,
              "types": {
                "{}": false
              }
            }
          ]
    },
    plugins: ['simple-import-sort']
};
