{/*Task 5: Create a Controlled Form (5 Points)
Create a TaskForm component.
Add an input field for entering a task name.
Use useState to store the input value.
Add a Submit button that logs the input to the console.
Example Output:

[Enter Task Name]  
[Add Task]  
(Clicking the button logs the task to the console)  

Update your TaskComponent to include a search feature.
Add an input field that filters the displayed tasks based on the entered text.
Add a "Sort by Name" button that sorts the tasks alphabetically when clicked.

*/}

import { useState } from 'react';

function taskForm() {
  const [task, setTask] = useState("");
  const [tasks,setTasks] = usestate([]);
  const [searchTask, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  
  const handleSort = () => {
    setTasks([...tasks].sort());
  };
  
  return (
    <div>
 `    <form onSubmit={handleSubmit}>
        <label>
         Add a Task:
           <input
             type="text"
             value={task}
             onChange={(e) => setTask(e.target.value)
           }/>
       </label>
      <button type="submit">Submit</button>
    </form>

    <input
      type="text"
      placeholder="Search Task"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)
    }/>

    <button onClick={handleSort}> Sort by: Name </button>

    <ul>
      {filteredatTask.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
);
}

export default TaskForm; 

