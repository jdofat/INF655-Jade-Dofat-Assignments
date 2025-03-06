{/* Week 1 Task 4: Parent and Child Components Using JSX (5 Points)
Modify App.js to:

Import the Greeting, UserInfo, and TaskComponent components.
Render them inside a single <div> (following JSX rules).

Week 2 task 1:
In App.js, render Greeting twice with different usernames.

Week 2 Task 3: Display a List with Keys (5 Points)
In App.js, create an array of 5 tasks.
Use the .map() function to display the tasks in an unordered list <ul>.
Add a unique key for each task.
Example Output:

- Task 1  
- Task 2  
- Task 3  

*/}


{/*
Week 2 Task 4:
In App.js, create a function handleAlert() that shows an alert when the button is clicked.
Pass handleAlert as a prop to UserInfo.

Example Output:

Name: John Doe  
Profession: Developer  
[Show Alert]  
(Clicking the button shows an alert message)  

*/}


import React from 'react';

import Greeting from './INF655-Assignment1/Greeting';   
import UserInfo from './INF655-Assignment1/UserInfo';   
import GetRandomTask from './INF655-Assignment1/GetRandomTask';
import TaskForm from './INF655-Assignment1/TaskForm';
import Counter from './INF655-Assignment1/Counter';

function App() {
  const tasks = [
    "Read",
    "Shop",
    "Laundry"
  ];

  function handleAlert() {
    alert ("Alert!");
  }

  return (
    <div>
      <Greeting username="John"/>
      <Greeting username="Janet"/>
      <UserInfo name="Jade", job="Student" />
      {GetRandomTask(tasks)}
    </div>
  );
};

 function moreTaskList() {

   const moreTasks = [
      "Mow the lawn",
      "Clean the bathroom",
      "Polish the floors",
      "Dust the windows",
      "Wipe the mirrors"
    ];

   return (
    <div>
       <ul>
           {moreTasks.map((task, index) => (
             <li key={task}> {task} </li>
           ))}
       </ul>
    </div>
  );

return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
    </div>
  );

};












