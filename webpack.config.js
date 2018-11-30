const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: "bundle.js"
    },
    devtool:"source-map",
    devServer: {
        historyApiFallback: true,
        contentBase: './dist'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,  
                use:{
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
              }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin(
            {
                template: path.join(__dirname,'/src/index.html'),
                filename: "./index.html"
            }
        )
    ]
}