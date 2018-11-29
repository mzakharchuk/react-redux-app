module.exports = {
    "parser": 'babel-eslint',
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
      "jest": true,
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
      },
      "sourceType": "module"
    },
    "plugins": [ "react" ],
    "rules": {
      "react/prop-types": ["off"],
      "indent": ["error", "4"],
      "linebreak-style": ["error","windows"],
      "quotes": ["error","single"],
      "no-console": ["warn", { "allow": ["info", "error"] }]
    }
  }