const readlineSync = require("readline-sync");

import { createTask } from '../modules/create'
import { readTasks } from '../modules/read';
import { closeTaskManager } from '../modules/exit';
import { updateTask } from '../modules/update';
import { deleteTask } from '../modules/delete';
import { completeTask } from '../modules/complete';


//Declare custom Task type
export type Task = {
  id: number;
  title: string;
  note: string;
  status: string;
  dueDate: Date;
  [key: string]: string | number | Date;
};

//Declare taskList array to store Task objects w/ two default tasks
export const taskList: {[key:string]: Task} = {
  "1": {
    id: 1,
    title: "Test",
    note: "Need to get this done ASAP",
    status: "Incomplete",
    dueDate: new Date("2023-07-25"),
  },
  "2": {
    id: 2,
    title: "Do Laundry",
    note: "Don't forget the detergent this time!",
    status: "Incomplete",
    dueDate: new Date("2023-07-15"),
  },
};

export const promptOptions = (): void => {

  //Trigger initial question for user to select option
  const input: string = readlineSync.question(

    ` \nPlease enter one of the following options: \n
    1 - View current tasks \n
    2 - Add new task \n
    3 - Edit existing task \n
    4 - Mark task as complete/incomplete \n
    5 - Delete task \n
    6 - Close Task Manager \n
    `)
    
      input === "1" && readTasks(taskList);
      input === "2" && createTask(taskList);
      input === "3" && updateTask(taskList);
      input === "4" && completeTask(taskList);
      input === "5" && deleteTask(taskList);
      input === "6" && closeTaskManager();
      input !== "1" && input !== "2" && input !== "3" && input !== "4" && input !== "5" && input !== "6" && promptOptions();
    
  };


console.log(`\n ~~~ Welcome to Task Manager! ~~~`);
promptOptions();
