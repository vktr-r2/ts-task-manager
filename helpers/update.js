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
    const updateTitle = readlineSync.question("\nWould you like to update the title?\n");
    if (updateTitle === "Y") {
        list[id].title = readlineSync.question("\nPlease enter new title\n");
    }
    const updateNote = readlineSync.question("\nWould you like to update the note?\n");
    if (updateNote === "Y") {
        list[id].note = readlineSync.question("\nPlease enter new note\n");
    }
    const updateStatus = readlineSync.question("\nWould you like to update the status?\n");
    if (updateStatus === "Y") {
        list[id].status === "Incomplete"
            ? (list[id].status = "Complete")
            : (list[id].status = "Incomplete");
    }
    const updateDueDate = readlineSync.question("\nWould you like to update the due date?\n");
    if (updateDueDate === "Y") {
        list[id].dueDate = readlineSync.question("\nPlease enter new due date\n");
    }
    console.log(list[id]);
    setTimeout(() => (0, index_1.promptOptions)(), 3000);
};
exports.updateTask = updateTask;
// /**
//  * Helper function that edits an existing task
//  * 1. Log taskList
//  * 2. Ask user intput id for task to be updated
//  * 3. Ask user which values to be updated and update accordingly
//  * 4. Log updated task
//  * 5. Give user promptOptions once again
//  *
//  * @param {Object} list of tasks. The keys are numbers, and the values are Task objects.
//  * @return void
//  */
// //Helper function that edits an existing task
// export const updateTask = (list: {[key:number]: Task}): void => {
//     //Show user current taskList
//     console.log(list);
//     //ASYNC TEMP WORKAROUND
//     setTimeout(() => {
//       //Ask user to input id for task to be edited
//       rl.question(
//         `\nPlease select which task you'd like to edit\n`,
//         (id: number) => {
//           console.log(list[id]);
//           rl.question(`\nUpdate title? Y or N\n`, (answer: string) => {
//             if (answer === 'Y') {
//               rl.question(`\nPlease enter new title\n`, (updatedTitle: string) => {
//                 list[id].title = updatedTitle
//               })
//             }
//             else
//             rl.question(`\nUpdate note? Y or N\n`, (answer: string) => {
//               if (answer === 'Y') {
//                 rl.question(`\nPlease enter new note\n`, (updatedNote: string) => {
//                   list[id].note = updatedNote;
//                 })
//               }
//               else
//               {rl.question(`\nUpdate due date? Y or N\n`, (answer: string) => {
//                 if (answer === 'Y') {
//                   rl.question(`\nPlease enter new date\n`, (updatedDate: string) => {
//                     list[id].dueDate = new Date(updatedDate);
//                     console.log(list[id]);
//                     promptOptions();
//                   })
//                 }
//               })}
//             })
//           })
//         }
//       );
//     }),
//       1; //ASYNC TEMP WORKAROUND
// }
