{/* Task 4: Parent and Child Components Using JSX (5 Points)
Modify App.js to:

Import the Greeting, UserInfo, and TaskComponent components.
Render them inside a single <div> (following JSX rules).
*/}

import React from 'react';
import Greeting from './Greeting';   // Import Greeting Component
import UserInfo from './UserInfo';   // Import UserInfo Component
import TaskComponent from './TaskComponent'; // Import TaskComponent (or getRandomTask)

function App() {
  const tasks = [
    "Read",
    "Shop",
    "Laundry"
  ];

  return (
    <div>
      {/* Render Greeting, UserInfo, and TaskComponent (getRandomTask) */}
      <Greeting />
      <UserInfo name="Alice" job="Developer" />
      <TaskComponent tasks={tasks} />
    </div>
  );
}

export default App;
