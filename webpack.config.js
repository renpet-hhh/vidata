require("@babel/register")({
    presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties"
    ],
    extensions: ['.ts']
});
module.exports = require("./webpack.config.babel.ts");