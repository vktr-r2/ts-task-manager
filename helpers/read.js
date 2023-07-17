"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTasks = void 0;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
const index_1 = require("../index");
const readTasks = (list) => {
    console.log(list);
    setTimeout(() => (0, index_1.promptOptions)(), 4000);
};
exports.readTasks = readTasks;
