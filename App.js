{/* Week 1 Task 4: Parent and Child Components Using JSX (5 Points)
Modify App.js to:

Import the Greeting, UserInfo, and TaskComponent components.
Render them inside a single <div> (following JSX rules).

Week 2 task 1:
In App.js, render Greeting twice with different usernames.

*/}

import React from 'react';

import Greeting from './INF655-Assignment1/Greeting';   
import UserInfo from './INF655-Assignment1/UserInfo';   
import GetRandomTask from './INF655-Assignment1/GetRandomTask'; 

function App() {
  const tasks = [
    "Read",
    "Shop",
    "Laundry"
  ];

  return (
    <div>
      <Greeting username="John"/>
      <Greeting username="Janet"/>
      <UserInfo name="Jade", job="Student" />
      {GetRandomTask(tasks)}
    </div>
  );
};

{/*Week 2 Task 2:
Manage State with useState (5 Points)
Create a Counter component.
Use the useState hook to track a count value.
Display the count and a button to increase the count when clicked.
Example Output:

Count: 0  
[Click Me]  
(Clicking the button increases the count)

export default App;
*/}

import { useState } from "react";

function Counter() {
  const [count, countButton] = useState(0);
  const counter = () => {
    countButton(prevCount=> prevCount + 1);
  };
  return (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={counter}> +1 </button>
    </div>
  );
}

export default Counter;






