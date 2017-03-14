'use strict'

const child_process = require('child_process'),
  path = require('path'),
  fs = require('fs'),
  EventEmitter = require('events').EventEmitter;


  class MathLib extends EventEmitter
  {
    constructor() {
      super();
      this.uuid = require('uuid').v4();
    }

    start() {
      console.log("Starting...");
      this.initEvents();
    }

    initEvents() {
      this.on('message', function(msg) {
        var action = msg.action;
        var payload = msg.payload;

        console.log(JSON.stringify(action));

        // switch (action) {
        //   case '':
        //
        //     break;
        // }
      }.bind(this));
    }
  }


  exports.mathLib = MathLib;
