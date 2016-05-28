var webpack = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require("path");

module.exports = {
  entry: {
    "app1/index": "./apps/app1/index.js",
    "app2/index": "./apps/app2/index.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader?modules",
      exclude: [/flexboxgrid/, /material-design-icons/]
    }, {
      test: [/flexboxgrid\.css$/, /material-design-icons.*\.css$/],
      loader: "style-loader!css-loader"
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg).*$/,
      loader: "url-loader?limit=1000000"
    }, {
      test: /\.json$/,
      exclude: /node_modules/,
      loader: "json-loader"
    }]
  },
  output: {
    path: "build",
    filename: "[name].[chunkhash].js"
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin(
      "[file].map", null, "../[resource-path]", "../[resource-path]"
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "common.[chunkhash].js"
    }),
    new HtmlWebpackPlugin({
      title: "App 1",
      filename: "app1/index.html",
      template: "./index.tpl",
      excludeChunks: ["app2/index"]
    }),
    new HtmlWebpackPlugin({
      title: "App 2",
      filename: "app2/index.html",
      template: "./index.tpl",
      excludeChunks: ["app1/index"]
    })
  ]
};
