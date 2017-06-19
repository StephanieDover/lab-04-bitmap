'use strict';

const fs = require('fs');

let invert = require('../lib/invert.js');

let bitmap = module.exports = {};

bitmap =  ['./assets/bitmap.bmp','./assets/finger-print.bmp','./assets/house.bmp','./assets/newpicpls.bmp','./assets/non-palette-bitmap.bmp'];

function Bitmap(filepath, data) {
  this.filepath = filepath;
  this.buffer = data;
  this.bitmapheader = data.slice(0,13);
  this.dibheader = data.slice(14,53);
  this.colorTable = data.slice(54, 1077);
  this.pixelarray = data.slice(1078);
}

bitmap.forEach( n => fs.readFile(n , (err, data) => {
  if(err) return err;
  let result = new Bitmap(n,data);
  return console.log(invert.colors(result));
}));
