const chalk = require('../config/chalk.config');
const port = require('./port');
const ip = require('ip');
const argv = require('./argv');

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const startApp = app => {
  app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });

  // Start your app.
  app.listen(port, host, async err => {
    if (err) {
      console.log(chalk.chalkError(err));
    } else {
      console.log(
        chalk.chalkSuccess(
          `Ecommerce application started listening on \n` +
            `localhost: http://${prettyHost}:${port}/ \n` +
            `LAN: http://${ip.address()}:${port}/ \n`,
        ),
      );
    }
  });
};

module.exports = startApp;
