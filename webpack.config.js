const path = require('path');
module.exports = {
  target: ['web'],
  mode: 'production',
  devtool: false,
  resolve: {
    extensions: ['.js'],
  },
  entry: {
    index: path.join(__dirname, 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
  },
  optimization: {
    minimize: false,
  },
};
