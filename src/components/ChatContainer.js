import React, { Component } from 'react'
import Header from './Header'

class ChatContainer extends Component {

  handleLogout = () => {
    window.firebase.auth().signOut();
  }

  render() {
    return (
        <div id="ChatContainer">
            <Header>
              <button className="red" onClick={this.handleLogout}>Logout</button>
            </Header>
            <h1>Hello From ChatContainer</h1>
        </div>
    )

  }
}

export default ChatContainer