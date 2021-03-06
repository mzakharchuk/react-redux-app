const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const GLOBAL = {
    'process.env.NODE_ENV':JSON.stringify('production')
}
module.exports = {
    entry:{
        vendor:[
            'react',
            'react-dom'
        ],
        polyfill:'@babel/polyfill',
        app: './src/index.js'
    },
    output:{
        filename: "[name].js"
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
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader' 
                    ]
              },
              {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
              }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
              sourceMap: false,
              extractComments: true
            }),
            new OptimizeCSSAssetsPlugin({})
          ]
    },
    plugins:[
        new webpack.DefinePlugin(GLOBAL),
        new CleanWebpackPlugin(['dist']),
        new CompressionPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
          }),
        new htmlWebpackPlugin(
            {
                template:'./src/index.html',
                filename: "index.html"
            }
        )
      
    ]
}