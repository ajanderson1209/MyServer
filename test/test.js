'use strict'

var expect = require('chai').expect;
var number = require('../index');
var w = require('adl-xapiwrapper');

describe('#number', function() {
  it('Number: ', function() {
    var num = number(10);
    console.log(num);
  });
});
