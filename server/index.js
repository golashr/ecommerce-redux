const webpackConfig = require('../configs/webpack.development');
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const startApp = require('./common');
const cors = require('cors');

// Init App
const app = express();
const compiler = webpack(webpackConfig);
const middleware = createWebpackMiddleware(compiler, webpackConfig.output.publicPath);

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.use(cors());

// Since webpackDevMiddleware uses memory-fs internally to store build
// artifacts, we use it instead
const fs = middleware.fileSystem;

startApp(app);

app.get('*', (req, res) => {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(file.toString());
    }
  });
});

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath,
    silent: true,
    stats: 'errors-only',
  });
}
