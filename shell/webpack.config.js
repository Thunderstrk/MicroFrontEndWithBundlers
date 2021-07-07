const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: true,
    hot: false,
    hotOnly: false,
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: 'http://localhost:3000/',
    chunkFilename: "[id].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        dashboard: "dashboard@http://localhost:3001/remoteEntry.js",
        order: "order@http://localhost:3002/remoteEntry.js",
        settings: "settings@http://localhost:3004/remoteEntry.js",
      },
      exposes: {
        "./Shell": "./src/Shell",
        "./Service": "./src/Service",
      },
      shared: [
        {
          ...deps,
          react: {
            eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            eager: true,
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
        // Workaround explaination: https://www.youtube.com/watch?v=-LNcpralkjM&t=540
        "./src/Service",
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
