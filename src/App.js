import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import './App.css';
import LoginContainer from './components/LoginContainer'
import ChatContainer from './components/ChatContainer'

class App extends Component {

  state = { user: null }

  componentDidMount() {
    window.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } else {
          this.props.history.push('/login')
      }
    })
  }

  render() {
    return (
        <div id="container" className="App inner-container">
          <Route path="/login" component={LoginContainer} />
          <Route exact path="/" component={ChatContainer} />
        </div>
    );
  }
}

export default withRouter(App);
