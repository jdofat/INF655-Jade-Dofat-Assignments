{/* Task 2: Create a Class Component and Use JSX (5 Points)
Create a class-based component named UserInfo that:

Uses JSX to return a <div> containing a user's name and profession.
Defines state inside the component to hold user details.
Displays a random number inside JSX (e.g., "Your lucky number is 7").

*/}

function UserName({name}) {
  return <h2>Name: {name}</h2>;
}

function UserJob({job}) {
  return <h3>Job: {job}</h3>;
};

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
      this.state = {yournumber: Math.random()};
  }

  render() {
    const {name, job} = this.props;
    const {yournumber} = this.state;


    return (
      <div>
        <UserName name={name} />
        <UserJob job={job} />
        <p>Employee Number: {yournumber}</p>
      </div>
    );
  }
}
