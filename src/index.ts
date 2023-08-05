const readlineSync = require("readline-sync");

import { createTask } from '../modules/create'
import { readTasks } from '../modules/read';
import { closeTaskManager } from '../modules/exit';
import { updateTask } from '../modules/update';
import { deleteTask } from '../modules/delete';
import { completeTask } from '../modules/complete';

//
export enum TaskStatus {
  Incomplete = "INCOMPLETE",
  Complete = "COMPLETE",
}

//Declare custom Task type
export type Task = {
  id: number;
  title: string;
  note: string;
  status: TaskStatus;
  dueDate: Date;
  [key: string]: string | number | Date | TaskStatus;
};

//Declare taskList object to store Task objects w/ two default Task objects
export const taskList: {[key:string]: Task} = {
  "1": {
    id: 1,
    title: "Test",
    note: "Need to get this done ASAP",
    status: TaskStatus.Incomplete,
    dueDate: new Date("2023-07-25"),
  },
  "2": {
    id: 2,
    title: "Do Laundry",
    note: "Don't forget the detergent this time!",
    status: TaskStatus.Incomplete,
    dueDate: new Date("2023-07-15"),
  },
};

/**
 * Function presents user with main menu options, receives input, and calls appropriate module function
 * 1. Ask user to select option, and store repsonse in input string
 * 2. Switch/case statement to validate input and call appropriate module function
 */

export const promptOptions = (): void => {

  //Trigger initial question for user to select option
  const input: string = readlineSync.question(

    ` \nPlease select one of the following options: \n
    1 - View current tasks \n
    2 - Add new task \n
    3 - Edit existing task \n
    4 - Mark task as complete/incomplete \n
    5 - Delete task \n
    6 - Close Task Manager \n
    `)
    
    switch(input) {
      case "1": readTasks(taskList); break;
      case "2": createTask(taskList); break;
      case "3": updateTask(taskList); break;
      case "4": completeTask(taskList); break;
      case "5": deleteTask(taskList); break;
      case "6": closeTaskManager(); break;
      default: promptOptions();
  }
    
  };

// Entry into app
console.log(`\n ~~~ Welcome to Task Manager! ~~~`);
promptOptions();
