var webpack = require('webpack');
var path = require('path'); 
var rootPath = path.join(__dirname, '..');
var srcPath = path.join(rootPath, 'src');
var buildPath = path.join(rootPath, 'build');


module.exports = {
  entry:  {index:"./src/index.js"},
  output: 
    {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/assets/'
    }
  ,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader', 
        /*include: [srcPath],*/
        exclude: /node_modules/
      },
      { //CSS
        test: /\.(css)$/,
        loader: "css-loader"
      },
      { //LESS
        test: /\.(less)$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.(gif|png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader?name=/assets/[name].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: 'build',
  }
}