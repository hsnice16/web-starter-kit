const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { EsbuildPlugin } = require("esbuild-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

webpackConfig = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Web Starter Kit",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],

  resolve: {
    extensions: [".ts", ".js", ".jsx", ".tsx"],
    plugins: [new TsconfigPathsPlugin()],
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: {
          target: "es2015",
          loader: "jsx",
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
        ],
        include: /\.module\.css$/i,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /\.module\.css$/i,
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            encoding: "base64",
            limit: 10000,
          },
        },
      },
    ],
  },

  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: "es2015",
        css: true,
      }),
    ],
  },

  devServer: {
    port: 3000,
    open: true,
  },
};

module.exports = webpackConfig;
