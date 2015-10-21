'use strict';

let path = require('path');

let autoprefixer = require('autoprefixer');
let cssImport = require('postcss-import');
let cssNested = require('postcss-nested');
let cssVars = require('postcss-simple-vars');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ExtractCSS = new ExtractTextPlugin(1, 'stylesheets/application.css');

let context = process.env.NODE_ENV || 'development';

let configFns = {
  development: devConfig,
  production: prodConfig
};

let config = configFns[context]();

module.exports = config;

function devConfig() {
  return {
    context: path.resolve(__dirname, 'input'),
    entry: {
      application: './javascripts/app.js',
      styles: './stylesheets/app.css'
    },
    output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'javascripts/[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: 'ngtemplate?relativeTo=' + path.resolve(__dirname, 'input', 'templates') + '/!html'
        },
        {
          test: /\.js$/,
          loaders: ['ng-annotate', 'babel']
        },
        {
          test: /\.css$/,
          loader: ExtractCSS.extract('style', 'css!postcss')
        }
      ]
    },
    postcss: (webpack) => [
      cssImport({ addDependencyTo: webpack }),
      cssNested(),
      cssVars(),
      autoprefixer
    ],
    plugins: [ExtractCSS],
    watchOptions: {
      poll: true,
      aggregateTimeout: 1000
    }
  };
}

function prodConfig() {
  throw 'not implemented yet';
}
