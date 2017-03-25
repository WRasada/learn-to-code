const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs')

const argv = yargs.argv;

let command = argv._[0];

console.log(command);
