'use strict';

var fs = require('fs-extra');
var path = require('path');
var env = process.platform == 'win32' ? 'USERPROFILE' : 'HOME';
var linksPath = path.join(process.env[env], '.config/wml');
var linksFile = path.join(linksPath, 'links.json');

module.exports.data = [];
module.exports.path = linksPath;

module.exports.load = function() {
  var links;

  try {
    links = fs.readJsonSync(linksFile);
  } catch (err) {
    links = {};
  }

  module.exports.data = links;
};

module.exports.save = function() {
  fs.outputJsonSync(linksFile, module.exports.data);
};
