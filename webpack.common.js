const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const supportedLocales = ['en-US'];


module.exports = {
  entry: path.join(__dirname, "src", "index"),
  plugins: [
    new HtmlWebpackPlugin({
      template: "/src/index.html",
      title: "To Do Tasks | A Friendly Reminder",
    }),
    new webpack.ContextReplacementPlugin(
      /date\-fns[\/\\]/,
      new RegExp(`[/\\\\\](${supportedLocales.join('|')})[/\\\\\]index\.js$`))
  ]
};
