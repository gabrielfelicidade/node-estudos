"use strict";
exports.__esModule = true;
var fs = require("fs");
var yargs = require("yargs");
var argv = yargs
    .alias('f', 'filename')
    .alias('c', 'content')
    .option('filename', { type: 'string' })
    .demandOption('content')
    .argv;
fs.writeFile(argv.filename, argv.content, function (error) {
    if (error)
        throw error;
    console.log("Arquivo " + argv.filename + " foi salvo com sucesso!");
});
