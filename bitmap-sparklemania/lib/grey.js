'use strict';

const Bitmap = require('./model/bitmap.js');

module.exports = () => {};

Bitmap.greyScale = function () {
  let grey;
  for(let i = 0; i < this.colorTable.length; i+= 4) {
    grey = (this.colorTable[i] + this.colorTable[i+1] + this.colorTable[i+2]) / 3;

    this.colorTable[i] = this.colorTable[i+1] = this.colorTable[i+2] = grey;
  }
  Bitmap.writeImg();
}
