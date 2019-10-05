const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// catch 404
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/404.html'));
});

module.exports = app;
