const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    "style-loader",
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    "postcss-loader",
                ],
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
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

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html',
        }),
    ],

    devServer: {
        watchContentBase: true,
        contentBase: path.resolve(__dirname, "dist"),
        open: true,
    },
}