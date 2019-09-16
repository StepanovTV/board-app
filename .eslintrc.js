module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "use strict" : false,
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "global-strict": ["error", "always"]
    },
    "rules": {
        "no-console": "off",
        "strict" : "off",
        "import/extensions" : "off"
        
    }
};