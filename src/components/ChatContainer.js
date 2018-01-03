import React, { Component } from 'react'
import Header from './Header'

class ChatContainer extends Component {
  render() {
    return (
        <div id="ChatContainer">
            <Header />
            <h1>Hello From ChatContainer</h1>
        </div>
    )

  }
}

export default ChatContainer