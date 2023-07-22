"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeTaskManager = void 0;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
var closeTaskManager = function () {
    rl.close();
};
exports.closeTaskManager = closeTaskManager;
