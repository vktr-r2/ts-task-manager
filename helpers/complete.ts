const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

import { promptOptions, Task } from "../src/index";

//Helper function that completes/incompletes an existing task
export const completeTask = (list: { [key: number]: Task }): void => {
  //Show user current taskList
  console.log(list);

  //ASYNC TEMP WORKAROUND
  setTimeout(() => {
    //Ask user to input id for task to be completed/incompleted
    rl.question(
      `\nPlease select which task you'd like to mark as completed/incompleted\n`,
      (id: number) => {
        //Terniery to swap current status to completed/incompleted
        list[id].status === "Incomplete"
          ? (list[id].status = "Complete")
          : (list[id].status = "Incomplete");
        promptOptions();
      }
    );
  }),
    1; //ASYNC TEMP WORKAROUND
};
