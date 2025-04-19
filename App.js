import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';

import SignInForm from './INF655-Jade-Dofat-Assignments/SignInForm';
import Firebase from './INF655-Jade-Dofat-Assignments/Firebase';
import AuthContext from './INF655-Jade-Dofat-Assignments/AuthContext';
import Greeting from './INF655-Jade-Dofat-Assignments/Greeting';   
import UserInfo from './INF655-Jade-Dofat-Assignments/UserInfo';   
import GetRandomTask from './INF655-Jade-Dofat-Assignments/GetRandomTask';
import TaskForm from './INF655-Jade-Dofat-Assignments/TaskForm';
import Counter from './INF655-Jade-Dofat-Assignments/Counter';

function App() {
  const [tasks, setTasks] = useState([
    {taskName: "Read", description: "read book"},
    {taskName: "Shop", description: "go shopping"},
    {taskName: "Laundry", description: "do laundry"},
  ]);

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err.message);
  }
};

const handleLogout = () => {
  signOut(auth);
};


const deleteTask = (taskIndex) => {
    const areYouSure = window.confirm("are you sure?");
    if (areYouSure) {
      setTasks(tasks.filter((task, index) => index !== taskIndex));
    };
  };

if (!user) {
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

return (
  <div>
    <h1>Task Manager</h1>
    <p>Welcome, {user.email}</p>
    <button onClick={handleLogout}>Logout</button>

    <Greeting username="John" />
    <Greeting username="Janet" />
    <UserInfo name="Jade" />
    <UserInfo job="Student" />
    {GetRandomTask(tasks)}

    <TaskForm tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />

    <h2>More Tasks</h2>
    <MoreTaskList />
  </div>
);


 function moreTaskList() {

   const moreTasks = [
      "Mow the lawn",
      "Clean the bathroom",
      "Polish the floors",
      "Dust the windows",
      "Wipe the mirrors"
    ];

return (
    <div>
      <ul>
        {moreTasks.map((task, index) => (
          <li key={index}> {task} </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
