"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeTask = void 0;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
const index_1 = require("../index");
//Helper function that edits an existing task
const completeTask = () => {
    console.log(index_1.taskList);
    rl.question(`\nPlease enter ID for task to be marked as completed\n`, (id) => {
        index_1.taskList[id].status = "completed";
        (0, index_1.promptOptions)();
    });
};
exports.completeTask = completeTask;
