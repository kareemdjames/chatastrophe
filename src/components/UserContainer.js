import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Icon from '../assets/icon.png'

class UserContainer extends Component {

  renderedUserEmail = false

  getAuthor = author => {
    if (!this.renderedUserEmail) {
      this.renderedUserEmail = true;
      return <p className="author">{author}</p>
    }
  }

  render() {
    const props = this.props
    return(
      <div id="UserContainer" className="inner-container">
        <Header>
          <Link to="/">
            <button className="red">
              Back To Chat
            </button>
          </Link>
        </Header>
        {props.messagesLoaded ? (
          <div id="message-container">
            {props.messages.map(msg => {
              if (msg.user_id === props.userID) {
                return (
                  <div key={msg.id} className="message">
                    {this.getAuthor(msg.author)}
                    <p>{msg.msg}</p>
                  </div>
                )
              }
            })}
          </div>
        ) : (
          <div id="loading-container">
            <img src={Icon} alt="logo" id="loader" />
          </div>
            )}
      </div>
    )
  }
}

export default UserContainer