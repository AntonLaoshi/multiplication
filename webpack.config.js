const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // Физическая папка (для build)
    publicPath: '/', // Виртуальный путь (для dev-server)
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Где искать index.html
    },
    open: true,
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html',
        title: "School training"
    }),
],
  mode: 'development',
  
};