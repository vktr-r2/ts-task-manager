import { promptOptions, Task } from "../src/index";

/**
 * Function logs taskList to console for user to read.  Give user promptOptions after 4 seconds.
 *  @param {Object} list The tasks to be read. The keys are numbers, and the values are Task objects.
 *  @return void
 */

export const readTasks = (list: {[key:number]: Task}): void => {

  console.log(list);
  
  setTimeout(()=> promptOptions(), 4000);
}
