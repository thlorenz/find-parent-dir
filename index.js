'use strict';

var path       = require('path')
  , fs         = require('fs')
  , exists     = fs.exists || path.exists
  , existsSync = fs.existsSync || path.existsSync
  ;

exports = module.exports = function (currentFullPath, clue, cb) {

  function testDir(parts) {
    if (parts.length === 0) return cb(null, null);

    var p = path.join.apply(path, parts);

    exists(path.join(p, clue), function (itdoes) {
      if (itdoes) return cb(null, p);
      testDir(parts.slice(0, -1));
    });
  }

  testDir(currentFullPath.split(/(\/|\\)/));
}

exports.sync = function (currentFullPath, clue) {

  function testDir(parts) {
    if (parts.length === 0) return null;

    var p = path.join.apply(path, parts);

    var itdoes = existsSync(path.join(p, clue));
    return itdoes ? p : testDir(parts.slice(0, -1));
  }
  return testDir(currentFullPath.split(/(\/|\\)/));

}
