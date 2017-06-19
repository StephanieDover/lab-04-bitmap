'use strict';

let fs = require('fs');
let invert = module.exports = {};

invert.colors = function(args)  {
  for (let i = 0; i < args.length; i++) {
    args[i] =(255 - args[i]);
  }
  return fs.writeFile(`inverted-file.${args[10]}.js`, args, (err) => {
    if(err) return console.log(err);
    return console.log('inverted complete');
  });
};
