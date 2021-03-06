const path = require('path');
const MiniCSSPlugin = require('mini-css-extract-plugin');

module.exports = (mode) => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCSSPlugin.loader, "css-loader"],
              },
        ]
    },
    output: {
        filename: '[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new MiniCSSPlugin()
    ]
})
