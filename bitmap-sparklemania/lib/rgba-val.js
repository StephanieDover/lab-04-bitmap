'use strict';

const Bitmap = require('./model/bitmap.js');

module.exports = {};

Bitmap.rgbMod = function () {
  for(let i = 0; i < this.colorTable.length; i+= 4){
    colorTable[i] = 255;
  }
  this.writeImg();
};
