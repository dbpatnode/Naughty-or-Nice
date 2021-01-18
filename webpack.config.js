const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.(s[ac]ss)$/,
        use: [{
          // inject CSS to page
          loader: 'style-loader'
        }, {
          // translates CSS into CommonJS modules
          loader: 'css-loader'
        }, 
        // {
          // Run postcss actions
          // loader: 'postcss-loader',
          // options: {
            // `postcssOptions` is needed for postcss 8.x;
            // if you use postcss 7.x skip the key
            // postcssOptions: {
            //   // postcss plugins, can be exported to postcss.config.js
            //   plugins: function () {
            //     return [
            //       require('autoprefixer')
            //     ];
            //   }
            // }
          // }
        // }, 
        {
          // compiles Sass to CSS
          loader: 'sass-loader'
        }]
      }
    ],
  },
};
