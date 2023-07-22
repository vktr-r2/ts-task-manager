const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

import { promptOptions, Task } from "../src/index";

export const readTasks = (list: { [key: number]: Task }) => {
  return new Promise<void>((resolve) => {
    console.log(list);
    setTimeout(resolve, 4000);
  }).then(() => promptOptions());
};
