import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

class UserContainer extends Component {
  render() {
    const props = this.props
    return(
      <div id="UserContainer">
        <Header>
          <Link to="/">
            <button className="red">
              Back To Chat
            </button>
          </Link>
        </Header>
        <h1>Hello From UserContainer for User {props.match.params.id}</h1>
      </div>
    )
  }
}

export default UserContainer