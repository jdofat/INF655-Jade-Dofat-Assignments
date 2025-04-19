import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';


const YourLogin = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [user, setUser] = useState(null);
    const auth = getAuth();
    const navigate = useNavigate();

const signUpNow = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
        navigate('/task-manager');
      } catch (error) {
        alert("error: " + error.message);
      }
    };
  
    const loginNow = async (e) => {
      e.preventDefault();
  
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
        navigate('/task-manager');
      } catch (error) {
        alert("error: " + error.message);
      }
    };
    
    if (user) {
        return (
        <div>
         return <h2>Welcome, {user.email}!</h2>
         <button onClick={logoutNow}>Log Out</button>
        </div>
        );
      };
    

      const logOutNow = async () => {
        await auth.signOut();
        setUser(null);
        navigate('/');
    };

      return (
        <div>
          <h2>Sign Up or Log In</h2>
          <form onSubmit={signUpNow}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit">Sign Up</button>

          </form>
    
          <form onSubmit={loginNow}>
            <h3>Log in</h3>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Log In</button>
          </form>
        </div>
      );
};

export default YourLogin;