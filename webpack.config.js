const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dirNode = path.join(__dirname, './node_modules');
const dirSrc = path.join(__dirname, './src');
const dirDist = path.join(__dirname, './build');

module.exports = {
    entry: {
        app: path.join(dirSrc, 'index.ts')
    },
    output: {
        path: dirDist,
        filename: '[name].js'
    },
    devServer: {
        contentBase: "dist",
        disableHostCheck: true
    },
    optimization: {},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(dirSrc, 'index.html'),
            filename: 'index.html',
        })
    ],
    module: {
        rules: [
            {test: /\.tsx?$/, loader: "ts-loader"}
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            dirNode,
            dirSrc
        ]
    }
};
