var webpack = require("webpack"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    path = require("path");

module.exports = {
  entry: "./app/index.js",
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
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
    filename: "build/index.js"
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin(
      "[file].map", null, "../[resource-path]", "../[resource-path]"
    ),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new CopyWebpackPlugin([{
      from: "app/index.html",
      to: "build/index.html"
    }])
  ]
};
