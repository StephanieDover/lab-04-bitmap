'use strict';

let expect = require('expect');
let bitmap = require('../lib/bitmap.js');

describe('File to change', () => {
  it('should throw a generic error', () => {
    expect(() => new bitmap.Image(3, null)).toThrow(Error);
  });
});
