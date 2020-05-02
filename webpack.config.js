const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "presentation-mediator.js",
    publicPath: "/dist/",
    library: "presentation-mediator",
    globalObject: "this",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    "next-core-utilities": {
      commonjs: "next-core-utilities",
      commonjs2: "next-core-utilities",
      amd: "next-core-utilities",
      root: "next-core-utilities"
    },
    "presentation-view": {
      commonjs: "presentation-view",
      commonjs2: "presentation-view",
      amd: "presentation-view",
      root: "presentation-view"
    }
  },
  stats: "errors-only",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
