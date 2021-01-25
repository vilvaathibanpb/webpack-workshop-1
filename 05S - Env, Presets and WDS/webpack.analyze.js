const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (presets) => ({
    plugins: [
        new BundleAnalyzer()
    ]
})