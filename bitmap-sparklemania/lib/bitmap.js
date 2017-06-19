'use strict';

let fs = require('fs');

let bitmap = module.exports = {};

function Image(buffer, file) {
  this.buffer = buffer;
  this.fileLocation = file;
  this.header = this.buffer.slice(0, 2);
  this.dib = this.buffer.slice(2, 54);
  this.colorTable = this.buffer.slice(54, 1078);
  this.pixelArr = this.buffer.slice(1078);
}

bitmap.readFromFile = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if(err)
      return console.log(err);
    callback(data);
  });
};

bitmap.Image = Image;
