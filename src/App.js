import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import './App.css';
import LoginContainer from './components/LoginContainer'
import ChatContainer from './components/ChatContainer'
import UserContainer from './components/UserContainer'

class App extends Component {
  constructor() {
    super()
    this.state = { user: null }
  }


  componentDidMount() {
    window.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
        const uid = user.uid
        console.log('User Id is ' + uid )
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
          <Route path="/users/:id" component={UserContainer} />
        </div>
    );
  }
}

export default withRouter(App);
