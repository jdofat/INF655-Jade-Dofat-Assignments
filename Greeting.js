{*/ Task 1: Create a React Component Using JSX (5 Points)
Create a functional component called Greeting that:

Uses JSX to return an <h1> element displaying a greeting message (e.g., "Hello, Welcome to React!").
Includes a paragraph <p> with an inline style applied using JSX.
Uses JavaScript expressions inside JSX (e.g., displaying the current date dynamically).

/*}

function IsEven(number) {
  return number % 2 === 0;
};

function Greeting() {
  const number = 100;
  return (
    <div>
      <h1>Hello Assignment 1</h1>
      <p style={{color: "red"}}>Is 100 an even number?: {isEven(number) ? "Yes" : "No"}</p>
    </div>
   );
};
