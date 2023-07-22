"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTasks = void 0;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
var index_1 = require("../src/index");
var readTasks = function (list) {
    return new Promise(function (resolve) {
        console.log(list);
        setTimeout(resolve, 4000);
    }).then(function () { return (0, index_1.promptOptions)(); });
};
exports.readTasks = readTasks;
