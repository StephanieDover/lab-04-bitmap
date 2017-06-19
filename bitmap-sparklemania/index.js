'use strict';

let bitmap = require('./lib/bitmap.js');

let convertImage = (file) => {
  bitmap.readFromFile(file, (data) => {
    let img = new bitmap.Image(data, file);
    return img;
  });
};

convertImage('./assets/bitmap.bmp');

console.log(img);
