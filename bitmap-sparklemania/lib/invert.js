'use strict';

let fs = require('fs');
let invert = module.exports = {};

invert.colors = function(args)  {
  for (let i = 0; i < args.colorTable.length; i++) {
    args.colorTable[i] = (255 - args.colorTable[i]);
  }
  console.log(args.buffer);
  return fs.writeFile(`./${args.filepath}.invert.bmp`,args.buffer, (err) => {
    if(err) return console.log(err);
  });
};
