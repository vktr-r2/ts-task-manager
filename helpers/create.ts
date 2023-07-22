const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

import { promptOptions, Task } from "../src/index";

//Helper function that creates a new task
export const createTask = (list: { [key: number]: Task }): void => {
  //Sort existing Ids into numerical array ascending order
  const taskIdsArray: number[] = Object.keys(list).map(Number);
  taskIdsArray.sort((a: number, b: number) => a - b);

  //Assign new taskId to be last element in the array + 1
  const taskId: number = taskIdsArray[taskIdsArray.length - 1] + 1;

  //Setup newTask object as custom Task type
  const newTask: Task = {
    id: taskId,
    title: "",
    note: "",
    status: "Incomplete",
    dueDate: new Date(),
  };

  //setTimeout used as TEMP WORKAROUND because title being captured as option input from promptOptions function
  setTimeout(() => {
    //Ask user to input title for task
    rl.question(`\nPlease provide a title\n`, (title: string) => {
      //Set user input to be title in newTask object
      newTask.title = title;
      //Ask user to input dueDate for task
      rl.question(`\nPlease provide a note\n`, (note: string) => {
        newTask.note = note;
        rl.question(
          `\nPlease provide a due date in the format of YYYY-MM-DD\n`,
          (date: string) => {
            //Set user input to be dueDate in newTask object
            newTask.dueDate = new Date(date);
            //Show user the task they've created
            console.log(newTask);
            //Push newTask object to taskList array
            list[taskId] = newTask;
            // Loop user back to Task Manager prompt
            promptOptions();
          }
        );
      });
    });
  }),
    1; //setTimeout length for TEMP WORKAROUND
};
