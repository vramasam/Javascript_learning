/* eslint-disable no-console */

// var express = require('express');
// var path = require('path');
// var open = require('open');

// This is NOT for actual production use. This is just useful for hosting the minified production
// build for local debugging purposes.
// Then it's a separate decsion to move all these files up on some host.

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

// var port = 3001;
// var app = express();

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get("/", function(req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, '../dist/index.html'))
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
