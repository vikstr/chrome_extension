const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    devtool: 'sourcemap',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'main.js',
        publicPath: "dist/"
    },
    devServer: {
        overlay: true,
        hot: true
    }
};
