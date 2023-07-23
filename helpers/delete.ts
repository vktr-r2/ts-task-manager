import { promptOptions, Task, rl } from "../src/index";

/**
 * Function to deletes an existing task and then return user to promptOptions
 * 1. Show list of current tasks
 * 2. Ask user which Id should be deleted
 * 3. Delete corresponding Task object from taskList
 * 4. Prompt user with promptOptions again
 *
 * @param {Object} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return {Promise} A Promise that resolves to void and then calls promptOptions.
 */

//Helper function that deletes an existing task
export const deleteTask = (list: { [key: number]: Task }): void => {
  console.log(list);
  //ASYNC TEMP WORKAROUND
  setTimeout(() => {
    //Ask user to input id for task to be deleted
    rl.question(
      `\nPlease select which task you'd like to delete\n`,
      (id: number) => {
        delete list[id];
        promptOptions();
      }
    );
  }),
    1; //setTimeout length for TEMP WORKAROUND
};
