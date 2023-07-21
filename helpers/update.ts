const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

import { Task, promptOptions } from "../index";

//Helper function that edits an existing task
export const updateTask = (list: {[key:number]: Task}): void => {
    //Show user current taskList
    console.log(list);

    //ASYNC TEMP WORKAROUND
    setTimeout(() => {
      //Ask user to input id for task to be edited
      rl.question(
        `\nPlease select which task you'd like to edit\n`,
        (id: number) => {
          console.log(list[id]);
          rl.question(`\nUpdate title? Y or N\n`, (answer: string) => {
            if (answer === 'Y') {
              rl.question(`\nPlease enter new title\n`, (updatedTitle: string) => {
                list[id].title = updatedTitle
                promptOptions();
              })
            }
          })
          rl.question(`\nUpdate note? Y or N\n`, (answer: string) => {
            if (answer === 'Y') {
              rl.question(`\nPlease enter new note\n`, (updatedNote: string) => {
                list[id].note = updatedNote;
                promptOptions();
              })
            }
          })
        }
      );
    }),
      1; //ASYNC TEMP WORKAROUND
}