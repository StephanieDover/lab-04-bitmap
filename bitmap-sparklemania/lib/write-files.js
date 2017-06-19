'use strict';

const fs = require('fs');

let write = module.exports = {};


write.files = (newFile) => fs.writeFile(newFile);
