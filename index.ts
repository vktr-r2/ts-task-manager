const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Declare custom Task type
type Task = {
  id: number;
  title: string;
  status: string;
  dueDate: Date;
};

//Declare taskList array to store Task objects w/ two default tasks
const taskList: Task[] = [
  {
    id: 1,
    title: "Test",
    status: "Incomplete",
    dueDate: new Date("2023-07-25"),
  },
  {
    id: 2,
    title: "Do Laundry",
    status: "Incomplete",
    dueDate: new Date("2023-07-15"),
  },
];

const promptOptions = (): void => {

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
      input === "2" && createTask();
      input === "3" && console.log("Input is 3");
      input === "4" && console.log("Input is 4");
      input === "5" && console.log("Input is 5");
      input === "6" && closeTaskManager();
    }
    );
  };

//Helper function that creates a new task
const createTask = (): void => {
  //Setup newTask object as custom Task type
  const newTask: Task = {
    id: taskList.length + 1, //Default id
    title: "",
    status: "Incomplete", //Default status
    dueDate: new Date(),
  };
  //Ask user to input title for task
  rl.question(`\nPlease provide a title\n`, (title: string): void => {
    //Set user input to be title in newTask object
    newTask.title = title;

    //Ask user to input dueDate for task
    rl.question(
      `\nPlease provide a due date in the format of YYYY-MM-DD\n`,
      (date: string): void => {
        //Set user input to be dueDate in newTask object
        newTask.dueDate = new Date(date);
        //Show user the task they've created
        console.log(newTask);
        //Push newTask object to taskList array
        taskList.push(newTask);
        // Loop user back to Task Manager prompt
        promptOptions();
      }
    );
  });
};

const readTasks = (list: Task[]) => {
  console.log(list);
  setTimeout(()=> promptOptions(), 4000)
}

//Helper function that closes the Task Manager app in terminal
const closeTaskManager = (): void => {
  rl.close();
}

console.log(`\n ~~~ Welcome to Task Manager! ~~~`);
promptOptions();
// console.log(taskList);
// console.log(taskList[1]);
