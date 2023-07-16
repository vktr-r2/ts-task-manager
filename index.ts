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

rl.question(
  ` \n Welcome to TS Task Manager.  Please enter one of the following options: \n
1 - View current tasks \n
2 - Add new task \n
3 - Edit existing task \n
4 - Mark task as completed \n
5 - Delete task \n
`,
  (input: string): void => {
    input === "1" && console.log(taskList);
    input === "2" && console.log("Input is 2");
    input === "3" && console.log("Input is 3");
    input === "4" && console.log("Input is 4");
    input === "5" && console.log("Input is 5");
  }
);

// console.log(taskList);
// console.log(taskList[1]);
