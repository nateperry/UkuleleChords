(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * For now, lets just keep what PhoneGap created by default
 */
var app = require('./index.js');
app.initialize();


/**
 *  Let's start doing our own stuff
 */
var instruments = require('./instruments.js');


var UkuleleChords = {
  init: function () {
    this.buildList();
  },
  buildList: function () {
    var list = '<ul>';
    for (var key in instruments) {
      var inst = instruments[key];
      list += '<li>';
      list += inst.name + ' - ' + inst.tuning.default.join('');
      list += '</li>';
    }
    list += '</ul>';
    document.getElementById('instruments').innerHTML = list;
  }
};

window.onload = function () {
  UkuleleChords.init();
};

},{"./index.js":2,"./instruments.js":3}],2:[function(require,module,exports){
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

module.exports = app;

},{}],3:[function(require,module,exports){
module.exports = {
  'ukulele-baritone': {
    name: 'Baritone Ukulele',
    tuning: {
      default: ['D', 'G', 'B', 'E']
    },
    chords: {
      'A': [2, 2, 2, null],
      'B': [4, 4, 4, 2],
      'C': [2, null, 1, null],
      'D': [null, 2, 3, 2],
      'E': [2, 1, null, null],
      'F': [3, 2, 1, 1],
      'G': [null, null, null, 3]
    }
  }
};
},{}]},{},[1]);
