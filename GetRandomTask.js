
import React from 'react';

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



