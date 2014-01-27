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

test('finding this dir relative to the test dir', function (t) {
  findParentDir(__dirname, 'find-parent-dir.js', function (err, dir) {
    t.equals(dir, path.resolve(__dirname))
    t.end()
  });  
})

test('sync finding .git root relative to the test dir', function (t) {
  var dir = findParentDir.sync(__dirname, '.git')
  t.equals(dir, path.resolve(__dirname, '..') + '/')
  t.end()
})

test('sync finding this dir relative to the test dir', function (t) {
  var dir = findParentDir.sync(__dirname, 'find-parent-dir.js');
  t.equals(dir, path.resolve(__dirname))
  t.end()
})
