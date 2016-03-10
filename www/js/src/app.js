/**
 * For now, lets just keep what PhoneGap created by default
 */
var app = require('./index.js');
app.initialize();


/**
 *  Let's start doing our own stuff
 */
var chords = require('./chords.js');
chords.init();


