const path = require('path');

module.exports = {
  entry: './src/views/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true, // Настройка необходима чтобы сервер перенаправлял запросы на index.html
    hot: true,
    open: true,
    compress: false,
    port: 1338,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: `ts-loader`,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json'],
  },
  devtool: 'source-map',
};
