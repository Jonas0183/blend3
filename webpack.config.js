const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
//const BrotliPlugin = require('brotli-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "assets/bundle.js",
    },
    module: {
        rules: [

            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader", "postcss-loader","sass-loader",
                  ],
              },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(gif|png|jpe?g|webp)$/i,
                exclude: /node_modules/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/img',
                        publicPath: 'assets/img'
                    }
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/',
                      publicPath: 'fonts/'

                    }
                  }
                ]
              }
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`,
          new CssMinimizerPlugin(),
        ],      
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify : {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/privacy.html',
            filename : 'privacy.html',
            minify : {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/cookies.html',
            filename : 'cookies.html',
            minify : {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/form.html',
            filename : 'form.html',
            minify : {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        
        
        // new BrotliPlugin({
        //     asset: '[path].br[query]',
        //     test: /\.(js|css|html|svg|png|webp)$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // }),
        new MiniCssExtractPlugin({
            filename: "styles.css",
            chunkFilename: "styles.css"
          }),
          new HTMLInlineCSSWebpackPlugin(),
    ],

    devServer: {
        watchContentBase: true,
        contentBase: path.resolve(__dirname, "dist"),
        open: true,
    },
}