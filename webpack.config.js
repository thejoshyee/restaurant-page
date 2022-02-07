const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  entry: {
    index: './src/index.js',
  },
   output: {
    filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };