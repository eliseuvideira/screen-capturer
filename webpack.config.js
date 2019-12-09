const { join } = require('path');

module.exports = {
  entry: join(__dirname, 'app', 'renderer', 'src', 'index'),
  target: 'electron-renderer',
  output: {
    path: join(__dirname, 'app', 'renderer', 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        ],
        resolve: { extensions: ['.js', '.jsx', '.json'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|ttf|woff|woff2)/,
        use: [{ loader: 'file-loader', options: { publicPath: './build/' } }],
      },
    ],
  },
};
