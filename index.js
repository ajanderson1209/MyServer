var MathLib = require('./test/mathLib.js').mathLib;
var fs = require('fs');

module.exports = function(_number, _locale) {
  return (_number + 1).toLocaleString(_locale);
}

// var mathLib = null;
//
// function start() {
//   mathLib = new MathLib();
//   mathLib.start();
//
//   var interval = setInterval(function () {
//     console.log("Interval...");
//   }.bind(this), 2000);
// }
//
// start();
