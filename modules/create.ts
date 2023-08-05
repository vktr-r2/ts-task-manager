const readlineSync = require("readline-sync");

import { promptOptions, Task, TaskList, TaskStatus } from "../src/index";
import { getValidDate } from "../helpers/getValidDate";

/**
 * Helper function that creates a new task
 * 1. Determine what next taskId should be using Object.keys, then .sort.
 * 2. Create empty newTask Task object
 * 3. Accept user input values and assign to appropriate newTask keys
 * 4. Log newTask and add to taskList object
 * 5. Prompt user with promptOptions again
 * 
 * @param {TaskList} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return {Promise} A Promise that resolves to void and then calls promptOptions.
 */

export const createTask = (list: TaskList): void => {

  //New taskId is set to greatest current taskID + 1
  const taskIdsArray: number[] = Object.keys(list).map(Number);
  taskIdsArray.sort((a: number, b: number) => a - b);
  const taskId: number = taskIdsArray[taskIdsArray.length - 1] + 1;

  //Create template newTask Task object
  const newTask: Task = {
    id: taskId,
    title: "",
    note: "",
    status: TaskStatus.Incomplete,
    dueDate: new Date(),
  };

  //Assign values to Task object keys
  newTask.title = readlineSync.question(`\nPlease provide a title\n`)
  newTask.note = readlineSync.question(`\nPlease provide a note\n`)
  newTask.dueDate = getValidDate(list);

  console.log(newTask);
  list[taskId] = newTask;

  promptOptions();

};
