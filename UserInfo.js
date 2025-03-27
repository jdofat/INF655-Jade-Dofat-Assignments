{/* Task 2: Create a Class Component and Use JSX (5 Points)
Create a class-based component named UserInfo that:

Uses JSX to return a <div> containing a user's name and profession.
Defines state inside the component to hold user details.
Displays a random number inside JSX (e.g., "Your lucky number is 7").


Week 2 Task 4: Pass Functions as Props (5 Points)
Modify your UserInfo component to accept a prop called handleClick.
In App.js, create a function handleAlert() that shows an alert when the button is clicked.
Pass handleAlert as a prop to UserInfo.
Example Output:

Name: John Doe  
Profession: Developer  
[Show Alert]  
(Clicking the button shows an alert message)  

Modify your UserInfo class-based component.
Add a state property called luckyNumber that stores a random number between 1 and 100.
Add a "Generate New Lucky Number" button that updates the lucky number in the state when clicked.
Display the lucky number dynamically inside JSX.

*/}

import React from 'react';

function UserName({name}) {
  return <h2>Name: {name}</h2>;
}

function UserJob({job}) {
  return <h3>Job: {job}</h3>;
};

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        yournumber: Math.floor(Math.random() * 1000),
        luckynumber: Math.floor(Match.random() * 100) + 1,                  
    };
  }

  newLuckyNumber = () => {
    this.setState({
      luckyNumber: Math.floor(Math.random() * 100) + 1,
  });
};

  render() {
    const {name, job, handleAlert} = this.props;
    const {yournumber, luckyNumber} = this.state;


    return (
      <div>
        <UserName name={name} />
        <UserJob job={job} />
        <p>Employee Number: {yournumber}</p>
        <button onClick={handleAlert}>Show Alert</button>
        <button onClick={this.newLuckyNumber}>New Number</button>
      </div>
    );
  }
}

export default UserInfo;
