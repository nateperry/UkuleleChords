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
