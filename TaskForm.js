{/*Task 5: Create a Controlled Form (5 Points)
Create a TaskForm component.
Add an input field for entering a task name.
Use useState to store the input value.
Add a Submit button that logs the input to the console.
Example Output:

[Enter Task Name]  
[Add Task]  
(Clicking the button logs the task to the console)  
*/}

import { useState } from 'react';

function taskForm() {

  const [task, setTask] = useState("");
  
  return (
 `  <form>
       <label>Add a Task:
         <input
           type="text"
           value={task}
           onChange={(e) => setTask(e.target.value)}
         />
       </label>
         <input type="Submit" />
    </form>
  )
};

export default TaskForm; 

