'use strict';

var path   =  require('path')
  , fs     =  require('fs')
  , exists =  fs.exists || path.exists
  ;

module.exports = function (dir, cb) {
  var parts = dir.split('/');
  for (var i = parts.length; i > 0; i--) {
    var p = parts.slice(0, i).join('/');
    if (existsSync(p + '/.git')) return p;
  }
};
