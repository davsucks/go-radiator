module.exports = {
    "env": {
        "browser": true,
        "jasmine": true,
        "node": true,
        "mongo": true
    },
    "globals": {
        "require": false,
        "describe": false
    },
    "plugins": [
        "jasmine"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:jasmine/recommended"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "no-undef": "off",
        "no-unused-vars": [
            "error",
            {
                "args": "none"
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
