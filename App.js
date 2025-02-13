{/* Task 4: Parent and Child Components Using JSX (5 Points)
Modify App.js to:

Import the Greeting, UserInfo, and TaskComponent components.
Render them inside a single <div> (following JSX rules).
*/}

import React from 'react';
import Greeting from './Greeting';   
import UserInfo from './UserInfo';   
import GetRandomTask from './GetRandomTask'; 

function App() {
  const tasks = [
    "Read",
    "Shop",
    "Laundry"
  ];

  return (
    <div>
      <Greeting />
      <UserInfo name="Alice" job="Developer" />
      <GetRandomTask tasks={tasks} />
    </div>
  );
}

export default App;
