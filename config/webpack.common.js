var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/app/polyfills.ts',
    'vendor': './src/app/vendor.ts',
    'app': './src/app/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts'],
    alias: {
      'font-awesome': 'font-awesome/css/font-awesome.min.css',
      'faker': 'faker/build/build/faker.min.js',
      "jquery": "jquery/dist/jquery.min.js",
      "bootstrapCss": "bootstrap/dist/css/bootstrap.min.css",
      "bootstrapJs": "bootstrap/dist/js/bootstrap.min.js"
    }
  },

  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['ts', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'html' },
      { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]' },
      { test: /\.css$/, exclude: helpers.root('src', 'app'), loader: ExtractTextPlugin.extract('style', 'css?sourceMap') },
      { test: /\.css$/, include: helpers.root('src', 'app'), loader: 'raw' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /faker\.min\.js$/, loader: 'script' },
      { test: /jquery.min\.js$/, loader: "script" },
      { test: /bootstrapJs\.js$/, loader: 'imports?jQuery=jquery,$=jquery' },
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/app/index.html'
    })
  ]
};
