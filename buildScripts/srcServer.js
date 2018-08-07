/* eslint-disable no-console */

// var express = require('express');
// var path = require('path');
// var open = require('open');

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

// var port = 3001;
// var app = express();

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(express.static('public'));

// Here we are telling express to use webpack-dev-middleware
app.use(require('webpack-dev-middleware')(compiler,{
  noInfo:true,
  publicPath: config.output.publicPath
} ));

app.get("/", function(req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.get("/users", function(req, res) {
  // Hard coding for simplicity. Pretend this hits the real database
  res.json([
    {"id": 1, "firstName":"Bob", "lastName":"Smith", "email":"bob@gmail.com"},
    {"id": 2, "firstName":"Tammy", "lastName":"Norton", "email":"tnorton@gmail.com"},
    {"id": 3, "firstName":"Tina", "lastName":"Lee", "email":"lee.tina@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if(err) {
    console.log(err)
  } else {
    open('http://localhost:' + port);
  }
});
