var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//Declare taskList array to store Task objects w/ two default tasks
var taskList = [
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
rl.question(" \n Welcome to TS Task Manager.  Please enter one of the following options: \n\n1 - View current tasks \n\n2 - Add new task \n\n3 - Edit existing task \n\n4 - Mark task as completed \n\n5 - Delete task \n\n", function (input) {
    input === "1" && console.log(taskList);
    input === "2" && createTask();
    input === "3" && console.log("Input is 3");
    input === "4" && console.log("Input is 4");
    input === "5" && console.log("Input is 5");
});
var createTask = function () {
    rl.question("\nPlease provide a title\n", function (title) {
        console.log(title);
        rl.question("\nPlease provide a due date in the format of YYYY-MM-DD\n", function (date) {
            console.log(new Date(date));
        });
    });
};
// console.log(taskList);
// console.log(taskList[1]);
