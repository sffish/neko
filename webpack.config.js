var webpack = require('webpack');
var path = require('path'); 
var rootPath = path.join(__dirname, '.');
var srcPath = path.join(rootPath, 'src/');
var buildPath = path.join(rootPath, 'build/');
var publicPath = path.join(rootPath, 'public/');

module.exports = {
  entry:  [srcPath+"index.js"],
  output: 
    {
      //path: path.join(__dirname, 'build'),
      path: srcPath,
      filename: 'bundle.js'
    }
  ,
  resolve: {
    extensions: ['.js', '.jsx','.less','.css', '.svg','.png','.woff','.woff2','.jpg','.gif','.ttf','.eot']
  },
  module: {
    rules: [
      { //JS
        test: /\.js$/,
        include: /src/,
        use:[
          { loader: 'react-hot-loader'},
          { loader: 'babel-loader'}
        ]
      },
      { //CSS
        test: /\.css$/,
        use:[
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      { //LESS
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      { //STATIC FILE
        test: /\.(gif|png|jpg|svg|ttf|eot|woff|woff2)$/,
        use:[
          { loader: 'file-loader?name=[name].[ext]' }
        ]
      },
      {
        test: /\.html$/,
        use:[
          { loader: 'react-hot-loader'},
          { loader: 'file-loader?name=[name].[ext]'}
        ]
      },
    ]
  },
  devServer: {
    contentBase: './src/',
    hot:true
  },
  devtool: 'source-map'
}