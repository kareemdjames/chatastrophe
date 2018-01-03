import React, { Component } from 'react';
import './App.css';
import LoginContainer from './components/LoginContainer'

class App extends Component {

  state = { user: null }

  componentDidMount() {
    window.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
    })
  }

  render() {
    return (
      <div id="container" className="App inner-container">
        <LoginContainer />
      </div>
    );
  }
}

export default App;
