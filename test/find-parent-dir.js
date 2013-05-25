'use strict';
/*jshint asi: true */

var test = require('tap').test
var path = require('path')
var findParentDir = require('..')

test('finding .git root relative to the test dir', function (t) {
  findParentDir(__dirname, '.git', function (err, dir) {
    t.equals(dir, path.resolve(__dirname, '..') + '/')
    t.end()
  });  
})
