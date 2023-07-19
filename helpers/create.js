"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
// //Helper function that creates a new task
// export const createTask = () => {
//   //Setup newTask object as custom Task type
//   const newTask = {
//     id: taskList.length + 1,
//     title: "",
//     status: "Incomplete",
//     dueDate: new Date(),
//   };
//   //setTimeout used as TEMP WORKAROUND because title being captured as option input from promptOptions function
//   setTimeout(() => {
//     //Ask user to input title for task
//     rl.question(`\nPlease provide a title\n`, (title: string) => {
//       //Set user input to be title in newTask object
//       newTask.title = title;
//       //Ask user to input dueDate for task
//       rl.question(
//         `\nPlease provide a due date in the format of YYYY-MM-DD\n`,
//         (date: string) => {
//           //Set user input to be dueDate in newTask object
//           newTask.dueDate = new Date(date);
//           //Show user the task they've created
//           console.log(newTask);
//           //Push newTask object to taskList array
//           taskList.push(newTask);
//           // Loop user back to Task Manager prompt
//           promptOptions();
//         }
//       );
//     });
//   }),
//     1; //setTimeout length for TEMP WORKAROUND
// };
