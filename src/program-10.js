const trumpet = require('trumpet'),
      fs = require('fs'),
      th = require('through2'),
      tr = trumpet();

let stream = tr.select('.loud').createStream();
stream.pipe(th(function(buf, _, next){
  this.push(buf.toString().toUpperCase());
  next();
})).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);
