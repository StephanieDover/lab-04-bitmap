'use strict';

const fs = require('fs');
const Bitmap = require('./model/bitmap.js');


module.exports = () => {};

Bitmap.prototype.readImg = (file, cb) => {
  fs.readFile(file, (err, data) => {
    if(err)
      console.error(err);
    cb(data);
  });
};

Bitmap.prototype.writeImg = function (buffer) {
  fs.writeFile(this.buffer, this.fileLocation, function(err) {
    if(err)
      console.error(err);
    console.log('write successful');
  });
};
