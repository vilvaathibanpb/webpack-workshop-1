const webpack = require('webpack');
const path = require('path');

module.exports = (mode) => ({
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.ProgressPlugin()
    ]
})