const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

import { taskList, promptOptions } from "../index";

//Helper function that edits an existing task
export const completeTask = (): void => {
  console.log(taskList);

  rl.question(`\nPlease enter ID for task to be marked as completed\n`, (id: string) => {
    taskList[id].status = "completed";
    promptOptions();
  });


}