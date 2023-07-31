"use strict";
// const readline = require("readline");
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = void 0;
// export const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false,
// });
const readlineSync = require("readline-sync");
const index_1 = require("../src/index");
const updateTask = (list) => {
    console.log(list);
    const id = readlineSync.question("\nPlease enter ID for task you would like to update\n");
    console.log(list[id]);
    const fieldsToUpdate = [
        { key: 'title', message: 'Please enter new title\n' },
        { key: 'note', message: 'Please enter new note\n' },
        { key: 'dueDate', message: 'Please enter new due date\n' },
    ];
    for (let field of fieldsToUpdate) {
        const updateField = readlineSync.question(`\nWould you like to update the ${field.key}? (Y or N)\n`);
        if (updateField === "Y") {
            list[id][field.key] = readlineSync.question(`\n${field.message}\n`);
        }
    }
    // const updateTitle: string = readlineSync.question(
    //   "\nWould you like to update the title?\n"
    // );
    // if (updateTitle === "Y") {
    //   list[id].title = readlineSync.question("\nPlease enter new title\n");
    // }
    // const updateNote: string = readlineSync.question(
    //   "\nWould you like to update the note?\n"
    // );
    // if (updateNote === "Y") {
    //   list[id].note = readlineSync.question("\nPlease enter new note\n");
    // }
    // const updateStatus: string = readlineSync.question(
    //   "\nWould you like to update the status?\n"
    // );
    // if (updateStatus === "Y") {
    //   list[id].status === "Incomplete"
    //     ? (list[id].status = "Complete")
    //     : (list[id].status = "Incomplete");
    // }
    // const updateDueDate: string = readlineSync.question(
    //   "\nWould you like to update the due date?\n"
    // );
    // if (updateDueDate === "Y") {
    //   list[id].dueDate = readlineSync.question("\nPlease enter new due date\n");
    // }
    console.log(list[id]);
    setTimeout(() => (0, index_1.promptOptions)(), 4000);
};
exports.updateTask = updateTask;
