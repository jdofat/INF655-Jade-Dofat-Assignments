{/* Task 3: Dynamic Content Using JSX and React Components (5 Points)

Create an array of tasks inside the App component.
Write a function getRandomTask() that returns a random task from the list.
Display a random task inside a <h3> using JSX.

function App () {
  const tasks = [
    "Read",
    "Shop",
    "Laundry"
  ];

  return (
    <div>
      {getRandomTask(tasks)}
    </div>
  );

}
*/}

import React from 'react';

function getRandomTask(tasks) {
  const randomIndex = Math.floor(Math.random() * tasks.length);
  const randomTask = tasks[randomIndex];

  return (
    <div> 
      <h3> {randomTask} </h3>
    </div>
  );
}


export default getRandomTask;



