import React, { useState } from 'react';
import { db } from './Firebase';
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { auth } from './Firebase';


function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "tasks"),
      where("userId", "==", user.uid),
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskName || !description) return;

    await addDoc(collection(db, "tasks"), {
      userId: user.uid,
      taskName,
      taskDescription: description,
      createdAt: serverTimestamp()
    });

    setTaskName("");
    setDescription("");
  };

  const deleteTask = async (id) => {
    const confirmDelete = window.confirm("Are you sure");
    if (!confirmDelete) return;

    await deleteDoc(doc(db, "tasks", id));
  };

  return (
    <div>
     <form onSubmit={handleSubmit}>
        <label>
         Task:
           <input
             type="text"
             value={taskName}
             onChange={(e) => setTaskName(e.target.value)}
             />
          </label>
          
  <label>
    Description:
      <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
       />
  </label>
 <button type="submit">submit</button>
</form>

    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    <button onClick={handleSort}> Sort by: Name </button>

    <ul>
      {filteredTasks.map((task, index) => (
        <li key={index}>
          {task.taskName}: {task.description}
          <button onClick= {() => deleteTask(index)}>delete</button>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default TaskForm; 

