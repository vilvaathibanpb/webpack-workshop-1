const path = require('path');

module.exports = (mode) => ({
    output: {
        filename: '[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
})
