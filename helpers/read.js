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
/**
* Function to read tasks and then return user to promptOptions
*
* @param {Object} list The tasks to be read. The keys are numbers, and the values are Task objects.
* @return {Promise} A Promise that resolves to void and then calls promptOptions.
*/
var readTasks = function (list) {
    return new Promise(function (resolve) {
        //Log current taskList for user
        console.log(list);
        //Delay 4 sec before prompting user to pick new option again
        setTimeout(resolve, 4000);
    }).then(function () { return (0, index_1.promptOptions)(); });
};
exports.readTasks = readTasks;
