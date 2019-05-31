"use strict";
exports.__esModule = true;
var fatorial_1 = require("./fatorial");
var yargs = require("yargs");
var argv = yargs.demandOption('num').argv;
var num = argv.num;
console.log("O fatorial de " + num + " \u00E9 igual a " + fatorial_1.fatorial(num));
