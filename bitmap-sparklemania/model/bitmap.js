'use strict';

module.exports = {};

function Bitmap (buffer, file) {
  this.buffer = buffer;
  this.fileLocation = file;
  this.colorTable = this.buffer.slice(54, 1078);
};
