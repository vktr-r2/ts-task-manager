import { promptOptions, Task, TaskStatus } from "../src/index";
import { validateTaskSelection } from "../helpers/validateTaskSelect";

/**
 * Helper function that completes/incompletes an existing task
 * 1. Log taskList
 * 2. Ask user to input Id for task to be completed/incompleted
 * 3. Ternary oeprator to toggle value as complete/incomplete
 * 4. Console log updated task
 * 5. Prompt user with promptOptions again
 *
 * @param {Object} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return void
 */

export const completeTask = (list: { [key: string]: Task }): void => {
  console.log(list);

  const id: string = validateTaskSelection(list, "mark complete/incomplete");

  list[id].status === TaskStatus.Incomplete
    ? (list[id].status = TaskStatus.Complete)
    : (list[id].status = TaskStatus.Incomplete);
  
  console.log(list[id]);

  setTimeout(() => promptOptions(), 4000);
};
