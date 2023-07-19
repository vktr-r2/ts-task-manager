const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

import { taskList, promptOptions } from "../index";

//Helper function that edits an existing task
export const updateTask = (): void => {
  
  console.log(taskList);

  rl.question(`\nPlease enter a task ID\n`, (id: string) => {
    
  })
}