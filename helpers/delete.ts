const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

import { promptOptions, Task } from "../src/index";

//Helper function that deletes an existing task
export const deleteTask = (list: {[key:number]: Task}): void => {
  
  //ASYNC TEMP WORKAROUND
  setTimeout(() => {
    //Ask user to input id for task to be deleted
    rl.question(`\nPlease select which task you'd like to delete\n`, (id: number) => {
      delete list[id];
      promptOptions()
    });
  }),
    1; //setTimeout length for TEMP WORKAROUND

};
