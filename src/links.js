'use strict';

var fs = require('fs-extra');
var path = require('path');
var homedir = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];

var linksPath = path.join(homedir, '.config/wml', 'links.json');

module.exports.data = [];

module.exports.load = function() {
  var links;

  try {
    links = fs.readJsonSync(linksPath);
  } catch (err) {
    links = {};
  }

  module.exports.data = links;
};

module.exports.save = function() {
  fs.outputJsonSync(linksPath, module.exports.data);
};
