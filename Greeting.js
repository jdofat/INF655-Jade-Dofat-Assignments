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

*/}

import React from 'react';

function isEven(number) {
  return number % 2 === 0;
};

function Greeting(props) {
  const number = 100;
  return (
    <div>
      <h1>Hello {props.username}</h1>
      <p style={{color: "red"}}>Is 100 an even number?: {isEven(number) ? "Yes" : "No"}</p>
    </div>
   );
};

export default Greeting;
