"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = void 0;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
const index_1 = require("../src/index");
/**
 * Helper function that edits an existing task
 *
 * 1. Log taskList
 * 2. Ask user intput id for task to be updated
 * 3. Ask user which values to be updated and update accordingly
 * 4. Log updated task
 *
 * @param {Object} list of tasks. The keys are numbers, and the values are Task objects.
 * @return void
 */
//Helper function that edits an existing task
const updateTask = (list) => {
    //Show user current taskList
    console.log(list);
    //ASYNC TEMP WORKAROUND
    setTimeout(() => {
        //Ask user to input id for task to be edited
        rl.question(`\nPlease select which task you'd like to edit\n`, (id) => {
            console.log(list[id]);
            rl.question(`\nUpdate title? Y or N\n`, (answer) => {
                if (answer === 'Y') {
                    rl.question(`\nPlease enter new title\n`, (updatedTitle) => {
                        list[id].title = updatedTitle;
                        (0, index_1.promptOptions)();
                    });
                }
            });
            rl.question(`\nUpdate note? Y or N\n`, (answer) => {
                if (answer === 'Y') {
                    rl.question(`\nPlease enter new note\n`, (updatedNote) => {
                        list[id].note = updatedNote;
                        (0, index_1.promptOptions)();
                    });
                }
            });
        });
    }),
        1; //ASYNC TEMP WORKAROUND
};
exports.updateTask = updateTask;
