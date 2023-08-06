import { promptOptions, TaskList } from "../src/index";
import { validateTaskSelection } from "../helpers/validateTaskSelect";

/**
 * Function to deletes an existing task and then return user to promptOptions
 * 1. Show list of current tasks
 * 2. Ask user which Id should be deleted
 * 3. Delete corresponding Task object from taskList
 * 4. Prompt user with promptOptions again
 *
 * @param {TaskList} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return void
 */

export const deleteTask = (list: TaskList): void => {

  console.log(list);

  const id: string = validateTaskSelection(list, "delete");

  if (delete list[id]) {
    console.log("\nTask successfully deleted")
  };

  setTimeout(() => promptOptions(), 1000);
};
