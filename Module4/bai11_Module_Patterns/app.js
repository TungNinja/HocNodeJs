var greet = require('./modulepatterns');
var greet1 = require('./greet');
var greet2 = require('./greet1');
greet();

greet1.greet();

// Change value of greet1
greet2.greet();
greet2.greeting = 'Change value hello world';
var greet2b = require('./greet1');
greet2b.greet();

// Greet2
var greet3 = require('./greet2');
var grtr = new greet3();
grtr.greet();

// greet 5
var greet4 = require('./greet3');
greet4.greet();