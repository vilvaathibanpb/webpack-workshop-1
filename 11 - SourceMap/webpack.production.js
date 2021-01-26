const path = require("path");
const MiniCSSPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

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
  devtool: 'source-map',
  output: {
    filename: "[contenthash].bundle.js",
    // filename: "[fullhash].bundle.js",
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new MiniCSSPlugin(), new CompressionPlugin({
    algorithm: "gzip"
  })],
});
