import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import './App.css';
import LoginContainer from './components/LoginContainer'
import ChatContainer from './components/ChatContainer'
import UserContainer from './components/UserContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      messages: [],
      messagesLoaded: false
    }
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
    window.firebase
      .database()
      .ref('/messages')
      .on('value', snapshot => {
        this.onMessage(snapshot)
        if (!this.state.messagesLoaded) {
          this.setState({ messagesLoaded: true })
        }
      })
  }

  onMessage = snapshot => {
    const messages = Object.keys(snapshot.val()).map(key => {
      const msg = snapshot.val()[key]
      msg.id = key
      return msg
    })
    this.setState({ messages })
  }

  handleSubmitMessage = msg => {
    const data = {
      msg,
      author: this.state.user.email,
      user_id: this.state.user.uid,
      timestamp: Date.now()
    }
    window.firebase
      .database()
      .ref('messages/')
      .push(data)
  }



  render() {
    return (
        <div id="container" className="App">
          <Route path="/login" component={LoginContainer} />
          <Route exact path="/" render={() => <ChatContainer onSubmit={this.handleSubmitMessage} messages={this.state.messages} user={this.state.user} messagesLoaded={this.state.messagesLoaded}/>} />
          <Route path="/users/:id" render={({ history, match}) => <UserContainer messages={this.state.messages} messagesLoaded={this.state.messagesLoaded} userID={match.params.id}/>} />
        </div>
    );
  }
}

export default withRouter(App);
