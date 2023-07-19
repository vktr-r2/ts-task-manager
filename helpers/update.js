"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = void 0;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
const index_1 = require("../index");
//Helper function that edits an existing task
const updateTask = () => {
    console.log(index_1.taskList);
    rl.question(`\nPlease enter a task ID\n`, (id) => {
    });
};
exports.updateTask = updateTask;
