'use strict';

const through2 = require('through2'),
      split = require('split');

let isOdd = false;

process.stdin
  .pipe(split())
  .pipe(through2(function (line, _, next) {
    this.push((isOdd ? line.toString().toUpperCase() : line.toString().toLowerCase()) + '\n');
    isOdd = !isOdd;
    next();
  })).pipe(process.stdout);
