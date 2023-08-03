const { name } = require('./package.json');
const webpack = require('webpack')
module.exports = {
  webpack: function override(config, env) {
    // config.entry = config.entry.filter(
    //   (e) => !e.includes('webpackHotDevClient')
    // );
    const webpack = require('webpack');

    console.log(process.env.NODE_ENV)
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }))
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;

      config.historyApiFallback = true;
      // config.watchContentBase = false;
      config.liveReload = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
};
