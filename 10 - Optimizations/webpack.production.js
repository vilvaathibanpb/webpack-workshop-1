const path = require("path");
const MiniCSSPlugin = require("mini-css-extract-plugin");

module.exports = (mode) => ({
  optimization: {
    splitChunks: { name: "vendor", chunks: "all" },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCSSPlugin.loader, "css-loader"],
      },
    ],
  },
  output: {
    filename: "[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new MiniCSSPlugin()],
});
