"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = void 0;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
var index_1 = require("../src/index");
//Helper function that edits an existing task
var updateTask = function (list) {
    //Show user current taskList
    console.log(list);
    //ASYNC TEMP WORKAROUND
    setTimeout(function () {
        //Ask user to input id for task to be edited
        rl.question("\nPlease select which task you'd like to edit\n", function (id) {
            console.log(list[id]);
            rl.question("\nUpdate title? Y or N\n", function (answer) {
                if (answer === 'Y') {
                    rl.question("\nPlease enter new title\n", function (updatedTitle) {
                        list[id].title = updatedTitle;
                        (0, index_1.promptOptions)();
                    });
                }
            });
            rl.question("\nUpdate note? Y or N\n", function (answer) {
                if (answer === 'Y') {
                    rl.question("\nPlease enter new note\n", function (updatedNote) {
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
