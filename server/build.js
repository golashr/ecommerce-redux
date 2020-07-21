const compression = require('compression');
const { resolve } = require('path');
const express = require('express');
const startApp = require('./common');
const cors = require('cors');

// Init App
const app = express();
const publicPath = '/';
const outputPath = resolve(process.cwd(), 'build');

app.use(cors({origin: true, credentials: true}));

// compression middleware compresses your server responses which makes them smaller (applies also to assets).
app.use(compression());
app.use(publicPath, express.static(outputPath));

startApp(app);

app.get('*', (req, res) => {
  res.sendFile(resolve(outputPath, 'index.html'));
});
