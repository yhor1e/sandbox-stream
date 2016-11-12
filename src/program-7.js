'use strict';

const http = require('http'),
      through = require('through2'),
      server = http.createServer(function(req, res){
        req
          .pipe(through(function(buf, _, next){
            this.push(buf.toString().toUpperCase());
            next();
          }))
          .pipe(res);
      })

server.listen(process.argv[2]);
