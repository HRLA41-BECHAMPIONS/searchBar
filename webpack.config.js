const path = require('path');

const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle6.js',
    path: DIST_DIR,
  },
  module:
    {
      rules: [
        {
          test: /\.m?jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  // module: {
    // rules: [
    //   {
    //     test: /\.css$/i,
    //     use: ["style-loader", "css-loader"],
    //   },
    // ],
  // },
};
