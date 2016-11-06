'use strict';

const through = require('through2'),
      stream = through(write, end),
      fs = require('fs');

function write (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end (done) {
  done();
}

process.stdin.pipe(stream).pipe(process.stdout);