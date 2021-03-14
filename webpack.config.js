const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.(png|jpg|gif|svg|ttf|woff|woff2)$/i,
      use: [
        {
          loader: 'url-loader',
        }
      ]
    },
    // {
    //   test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    //   use: [
    //     {
    //       loader: 'file-loader',
    //       options: {
    //         name: '[name].[ext]',
    //         outputPath: 'fonts/'
    //       }
    //     }
    //   ]
    // }
    ]
  },

  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    port: 9000
  }
};