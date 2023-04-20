const path = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'
const config = {
  mode: isProduction ? 'production' : 'development',

  entry: isProduction ? './src/calc/index.ts' : './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true
  },

  resolve: {
    extensions: ['.js', '.json', '.ts']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets:[['@babel/preset-env']]
            }
          },
          { loader: 'ts-loader'}
        ]        
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin()]
}

module.exports = config