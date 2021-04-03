const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      NG_APP_ENVS: JSON.stringify({
        gaMapsApiKey: process.env.gaMapsApiKey
      })
    })
  ],
}
