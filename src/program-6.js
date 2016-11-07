'use strict';

const concat = require('concat-stream');

process.stdin.pipe(concat(function(data){
  // ctrl + d
  console.log(data.toString().split('').reverse().join(''));
}));
