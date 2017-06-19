'use strict';

const fs = require('fs');

let invert = require('../lib/invert.js');

let bitmapFiles = module.exports = {};

bitmapFiles =  ['./assets/bitmap.bmp','./assets/finger-print.bmp','./assets/house.bmp','./assets/newpicpls.bmp','./assets/non-palette-bitmap.bmp'];

function Bitmap(data) {
  this.colorTable = data.slice([54, 1077]);
}

bitmapFiles.forEach( n => fs.readFile(n , (err, data) => {
  if(err) return console.error(err);
  let result = new Bitmap(data);
  return console.log(invert.colors(result.colorTable));
}));
