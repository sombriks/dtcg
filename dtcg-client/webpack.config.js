const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack");
const dotenv = require("dotenv-flow");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
  },
  plugins: [
    new DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
    new CopyPlugin({
      patterns: [{ from: "public/" }],
    }),
  ],
};
