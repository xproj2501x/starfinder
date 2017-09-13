let path = require('path');
let express = require('express');
let bodyParser = require('body-parser');
let compression = require('compression');

const APP = express();
const HTTP = require('http').Server(APP);
const PORT = process.env.PORT || 3099;
const LOGGER = require('morgan');

APP.use(bodyParser.json());
APP.use(compression());
APP.use(express.static(__dirname + '/dist'));


APP.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

HTTP.listen(PORT);

console.log(`Web server started on port ${PORT}`);
