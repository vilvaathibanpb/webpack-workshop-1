const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common")();
const getConfig = (mode) => require(`./webpack.${mode}`)(mode);
const path = require('path');

const presetConfig = (presets) =>
  presets ? require(`./webpack.${presets}`)(presets) : {};

module.exports = ({ mode, presets }) => {
  return merge(
    {
      mode,
      resolveLoader: {
        alias: {
          "react-inject-loader": require.resolve("./loader/addReactLoader.js"),
        },
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            include: [
              path.resolve(__dirname, "src")
          ],
            use: ["react-inject-loader"]
          }
        ]
      }
    },

    commonConfig,
    getConfig(mode),
    presetConfig(presets)
  );
};
