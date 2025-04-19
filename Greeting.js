
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
