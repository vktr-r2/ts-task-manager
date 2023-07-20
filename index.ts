const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

import { createTask } from './helpers/create'
import { readTasks } from './helpers/read';
import { closeTaskManager } from './helpers/exit';
import { updateTask } from './helpers/update';
import { deleteTask } from './helpers/delete';
import { completeTask } from './helpers/complete';


//Declare custom Task type
export type Task = {
  id: number;
  title: string;
  status: string;
  dueDate: Date;
};

//Declare taskList array to store Task objects w/ two default tasks
export const taskList: {[key:string]: Task} = {
  "1": {
    id: 1,
    title: "Test",
    status: "Incomplete",
    dueDate: new Date("2023-07-25"),
  },
  "2": {
    id: 2,
    title: "Do Laundry",
    status: "Incomplete",
    dueDate: new Date("2023-07-15"),
  },
};

export const promptOptions = (): void => {

  //Trigger initial question for user to select option
  rl.question(
    ` \nPlease enter one of the following options: \n
    1 - View current tasks \n
    2 - Add new task \n
    3 - Edit existing task \n
    4 - Mark task as completed \n
    5 - Delete task \n
    6 - Close Task Manager \n
    `,
    (input: string): void => {
      input === "1" && readTasks(taskList);
      input === "2" && createTask(taskList);
      input === "3" && updateTask();
      input === "4" && completeTask();
      input === "5" && deleteTask();
      input === "6" && closeTaskManager();
    }
    );
  };


//Helper function that closes the Task Manager app in terminal
// const closeTaskManager = (): void => {
//   rl.close();
// }

console.log(`\n ~~~ Welcome to Task Manager! ~~~`);
promptOptions();
// console.log(taskList);
// console.log(taskList[1]);
