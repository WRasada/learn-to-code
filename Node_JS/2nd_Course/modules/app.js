// PATTERN 1
var greet = require('./greet1');

greet();

// PATTERN 2
var greet2 = require('./greet2').greet;

greet2();

// PATTERN 3
var greet3 = require('./greet3');

greet3.greet();
greet3.greeting = "Changed hello world! hehe";

var greet3b = require('./greet3');
greet3b.greet();

// PATTERN 4
var Greet4 = require('./greet4');

var grt = new Greet4();

grt.greet();

var grt2 = new Greet4();

grt2.greeting = "Hello my name is wes";

grt.greet();
grt2.greet();

// PATTERN 5

var greet5 = require('./greet5').greet;

greet5();
