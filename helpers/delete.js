"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = void 0;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
const index_1 = require("../src/index");
/**
 * Function to deletes an existing task and then return user to promptOptions
 *
 * @param {Object} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return {Promise} A Promise that resolves to void and then calls promptOptions.
 */
//Helper function that deletes an existing task
const deleteTask = (list) => {
    //ASYNC TEMP WORKAROUND
    setTimeout(() => {
        //Ask user to input id for task to be deleted
        rl.question(`\nPlease select which task you'd like to delete\n`, (id) => {
            delete list[id];
            (0, index_1.promptOptions)();
        });
    }),
        1; //setTimeout length for TEMP WORKAROUND
};
exports.deleteTask = deleteTask;
