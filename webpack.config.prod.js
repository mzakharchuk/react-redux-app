const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")

const GLOBAL = {
    'process.env.NODE_ENV':JSON.stringify('production')
}
module.exports = {
    entry:{
        vendor:[
            '@babel/polyfill',
            'react',
            'react-dom'
        ],
        app: './src/index.js'
    },
    output:{
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
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
          new UglifyJsPlugin()
        ],
        splitChunks:{
            cacheGroups: {
                vendors: {
                  filename: 'vendor.js'
                }
              }
        }
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new CompressionPlugin(),
        new DuplicatePackageCheckerPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
          }),
        new htmlWebpackPlugin(
            {
                template: path.join(__dirname,'/src/index.html'),
                filename: "./index.html"
            }
        )
      
    ]
}