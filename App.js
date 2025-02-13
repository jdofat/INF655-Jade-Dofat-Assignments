{/* Task 4: Parent and Child Components Using JSX (5 Points)
Modify App.js to:

Import the Greeting, UserInfo, and TaskComponent components.
Render them inside a single <div> (following JSX rules).
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
      <Greeting />
      <UserInfo name="Jade, job="Student" />
      {GetRandomTask(tasks)}
    </div>
  );
}

export default App;
