const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

import { promptOptions, Task } from "../src/index";

/**
* Function to read tasks and then return user to promptOptions
*
* @param {Object} list The tasks to be read. The keys are numbers, and the values are Task objects.
* @return {Promise} A Promise that resolves to void and then calls promptOptions.
*/

export const readTasks = (list: { [key: number]: Task }) => {
  return new Promise<void>((resolve) => {
    //Log current taskList for user
    console.log(list);
    //Delay 4 sec before prompting user to pick new option again
    setTimeout(resolve, 4000);
  }).then(() => promptOptions());
};
