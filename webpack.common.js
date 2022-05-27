const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index"),
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "To Do Tasks | A Friendly Reminder",
    }),
  ],
};
