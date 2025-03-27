{/* Week 1: Create a React Component Using JSX (5 Points)
Create a functional component called Greeting that:

Uses JSX to return an <h1> element displaying a greeting message (e.g., "Hello, Welcome to React!").
Includes a paragraph <p> with an inline style applied using JSX.
Uses JavaScript expressions inside JSX (e.g., displaying the current date dynamically).

Week 2: Use Props to Pass Data (5 Points)
\Modify your Greeting component to accept a prop called username.
\Display the username inside the greeting message.
In App.js, render Greeting twice with different usernames.

Example Output:

Hello, Alice!  
Hello, Bob!  

modify this code to
accept a username prop and display it inside the greeting message.
Add a new paragraph that shows the current date using a JavaScript expression inside JSX.
Add a button labeled "Change Greeting" that dynamically changes the greeting message when clicked

*/}

import React, { useState } from 'react';

function isEven(number) {
  return number % 2 === 0;
};

function Greeting(props) {
  const [myGreeting, setGreeting] = useState('Hello');
  const number = 100;
  const myDate = new Date().toLocaleDateString();
  const changeGreeting = () => {
    setMyGreeting("Hi!");
  };
  
  return (
    <div>
      <h1>{myGreeting} {props.username}</h1>
      <p style={{color: "red"}}>Is 100 an even number?: {isEven(number) ? "Yes" : "No"}</p>
      <button onClick={changeGreeting}>Change My Greeting</button>
    </div>
   );
}

export default Greeting;
