import { promptOptions, Task, rl } from "../src/index";
import { validateTaskSelection } from "./validateTaskSelect";

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
export const deleteTask = (list: { [key: string]: Task }): void => {
  console.log(list);

  const id: string = validateTaskSelection(list, "delete");

  delete list[id];
  promptOptions();
};
