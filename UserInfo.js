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
