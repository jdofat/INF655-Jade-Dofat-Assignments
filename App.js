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
