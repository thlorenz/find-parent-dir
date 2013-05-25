'use strict';

var path   =  require('path')
  , fs     =  require('fs')
  , exists =  fs.exists || path.exists
  , existsSync =  fs.existsSync || path.existsSync
  ;

module.exports = function (currentFullPath, clue, cb) {
  var parts = currentFullPath.split(/(\/|\\)/);
  var tasks = parts.length;
  
  for (var i = parts.length; i > 0; i--) {
    var p = path.join.apply(path, parts.slice(0, i));

    if (existsSync(path.join(p, clue))) return cb(null, p);
  }

  cb(null, null);
};
