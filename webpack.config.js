const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      NG_APP_ENVS: JSON.stringify({
        GA_MAPS_API_KEY: process.env.GA_MAPS_API_KEY
      })
    })
  ],
}
