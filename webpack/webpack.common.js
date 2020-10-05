const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const webpack = require("webpack");
// const x = require("../src/index");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendors.js",
    // main: path.join(__dirname, "../src/index.tsx"),
    // vendor: path.join(__dirname, "../src/vendors.js"),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [new MiniCssExtractPlugin()],
};
