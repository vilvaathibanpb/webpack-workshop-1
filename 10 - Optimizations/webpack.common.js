const HTMLPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (mode = 'production') => ({
    mode,
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        use: ["url-loader"],
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
});
