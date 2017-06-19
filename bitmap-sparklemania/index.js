'use strict';

const Bitmap = require('./model/bitmap.js');

let transform = () => {
  Bitmap.readImg(file, (data) => {
    let img = new Bitmap(data, file);
    Bitmap.invert();
  });
};

transform('./assets/house.bmp');
