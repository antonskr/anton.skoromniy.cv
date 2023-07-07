const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        {
          test: /\.scss$/i,
          exclude: path.resolve(__dirname, '..', './src/global.scss'),
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: isProduction
                    ? "[hash:base64:8]"
                    : "[name]__[local]--[hash:base64:5]",
                },
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.scss$/i,
          include: path.resolve(__dirname, '..', './src/global.scss'),
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: "asset/inline",
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, "..", "./build"),
      filename: "bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "..", "./src/index.html"),
      }),
      isProduction && new MiniCssExtractPlugin(),
    ].filter(Boolean),
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },
    stats: "errors-only",
  };
};
