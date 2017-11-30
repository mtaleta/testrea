// resolve 檔案的絕對路徑
const path = require('path')
const webpack = require('webpack')

const srcPath = path.resolve(__dirname, 'src')
const distPath = path.resolve(__dirname, 'dist')

module.exports = {
  context: srcPath,
  resolve: {
    alias: {
      states: path.resolve(srcPath, 'states'),
      utilities: path.resolve(srcPath, 'utilities'),
      components: path.resolve(srcPath, 'components'),
      api: path.resolve(srcPath, 'api')
    }
  },
  entry: {
    index: './index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: distPath,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: 'url-loader?limit=100000'
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js', minChunks: 2})],
  devServer: {
    contentBase: distPath,
    compress: true,
    port: 8082
  },
  devtool: 'cheap-source-map'
}
