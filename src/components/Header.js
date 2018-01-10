import React from 'react'
import Icon from '../assets/icon.png'

const Header = (props) => {
    return (
        <div id="Header">
            <img src={Icon} alt="logo" />
            <h1>Chatastrophe</h1>
            {props.children}
        </div>
    )
}

export default Header