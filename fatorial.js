"use strict";
exports.__esModule = true;
exports.fatorial = function (num) {
    if (num === 0) {
        return 1;
    }
    return num * exports.fatorial(num - 1);
};
