'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//Parse incoming requests data
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use('/home', function (req, res) {
  return res.status(200).json({ message: 'Hello and welcome to FreeMentors' });
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('listening on ' + PORT + '...');
});
module.exports = app;