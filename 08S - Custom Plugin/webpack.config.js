const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common")();
const getConfig = (mode) => require(`./webpack.${mode}`)(mode);

const presetConfig = (presets) => presets ? require(`./webpack.${presets}`)(presets) : {}


module.exports = ({ mode, presets }) => {

    console.log(presets);

  return merge({mode},commonConfig, getConfig(mode), presetConfig(presets));
};
