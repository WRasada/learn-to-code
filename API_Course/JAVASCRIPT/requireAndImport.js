// let myFuncs = require('./export');
import { myVar, func1, func2 } from './export';

console.log(`The value of myVar is ${myFuncs.myVar}`);

myFuncs.func1();
myFuncs.func2();
