import React, { Component } from 'react';
import './App.css';
import user from './Actors/User/User';

const buttonClass = {
  backgroundColor: '#2CB1C3',
  border: 'none',
  padding: 14,
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: 16,
  borderRadius: 7,
  color: 'white',
  borderWeight: 1
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={'http://www.iconsfind.com/wp-content/uploads/2016/11/20161108_5822489ad65e6.png'} style={{ height: 90, width: 90}} alt="logo" />
          <p style={{fontSize: 26, margin: 0, padding: 0, fontWeight: 'bold'}}>Welcome to Tónica<sup style={{fontSize: 16}}>©</sup></p>
          <p style={{paddingTop: 0, marginTop: 5}}>An action & middleware oriented framework</p>
        </div>
        <p className="App-intro" style={{fontSize: 14}}>
          Open the debugger and run an action to follow the flow and see how it works.
        </p>
        <p>
          <button style={buttonClass} onClick={() => { user.createWorkspace({ name: 'Awesome workspace!' })} }>Create workspace</button>
          &nbsp;&nbsp;
          <button style={buttonClass} >Delete tasklist</button>
        </p>
      </div>
    );
  }
}

export default App;
