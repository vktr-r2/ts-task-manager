const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

import { promptOptions, Task } from "../index";

export const readTasks = (list: Task[]) => {
  console.log(list);
  setTimeout(()=> promptOptions(), 4000)
}