'use strict';

const Bitmap = require('./model/bitmap.js');

module.exports = {};

Bitmap.prototype.invert = function () {
  for(let i = 0; i < this.colorTable.length; i++) {
    this.colorTable[i] = 255 - this.colorTable[i];
  }
  Bitmap.writeImg();
};
