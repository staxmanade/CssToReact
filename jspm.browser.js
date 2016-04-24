SystemJS.config({
  baseURL: "/",
  production: true,
  paths: {
    "github:*": "./jspm_packages/github/*",
    "npm:*": "./jspm_packages/npm/*",
    "app/": "./src/",
    "npm:react@15.0.1": "https://cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react.min.js",
    "npm:react-dom@15.0.1": "https://cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react-dom.min.js"
  }
});
