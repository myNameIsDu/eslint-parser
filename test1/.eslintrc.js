module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            presets: [
                '@babel/preset-env',
                [
                    '@babel/preset-react',
                    {
                        runtime: 'automatic',
                    },
                ],
            ],
        },
    },
    "plugins": [
        "react"
    ],
};
