"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeTaskManager = void 0;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
/**
* Function to exit readline in CLI
* @returns void
*/
const closeTaskManager = () => {
    rl.close();
};
exports.closeTaskManager = closeTaskManager;
