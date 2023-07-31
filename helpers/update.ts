// const readline = require("readline");

// export const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false,
// });

const readlineSync = require("readline-sync");

import { Task, promptOptions } from "../src/index";

export const updateTask = (list: { [key: string]: Task }): void => {
  console.log(list);

  const id: string = readlineSync.question(
    "\nPlease enter ID for task you would like to update\n"
  );
  console.log(list[id]);

  const fieldsToUpdate: {key: string, message: string}[] = [
    {key: 'title', message: 'Please enter new title\n'},
    {key: 'note', message: 'Please enter new note\n'},
    {key: 'dueDate', message: 'Please enter new due date\n'},
  ];

  for (let field of fieldsToUpdate ) {
    {const updateField: string = readlineSync.question(`\nWould you like to update the ${field.key}? (Y or N)\n`);
    if (updateField === "Y") {
      const key = field.key as keyof Task;
      const newFieldValue: string = readlineSync.question(`\n${field.message}\n`);
      if (key !== 'id' && key !== 'dueDate') {
        list[id][key] = newFieldValue;
      } else if (key === 'dueDate') {
        list[id][key] = new Date(newFieldValue);
      }
    }}
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

  setTimeout(() => promptOptions(), 4000);
};
