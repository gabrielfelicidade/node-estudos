"use strict";
exports.__esModule = true;
var fatorial_1 = require("./fatorial");
var yargs = require("yargs");
var util_1 = require("util");
var argv = yargs
    .option('num', { alias: 'n', type: 'number' })
    .check(function (argv) {
    return util_1.isNumber(argv);
})
    .argv;
var num = argv.num;
console.log("O fatorial de " + num + " \u00E9 igual a " + fatorial_1.fatorial(num));
