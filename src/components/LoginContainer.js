import React, { Component } from 'react'
import Header from './Header'

class LoginContainer extends Component {

    state = {
        email: '',
        password: '',
        error: ''
    };

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    login() {
        window.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
              this.onLogin();
            })
            .catch(err => {
                if (err.code === 'auth/user-not-found') {
                    this.signUp()
                } else {
                    this.setState({ error: "Error logging in." });
                }
            })
    }

    signUp() {
        window.firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                this.setState({error: 'Error signing up.'})
            })
    }

    onLogin() {
      this.props.history.push('/')
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ error: '' })
        if (this.state.email && this.state.password) {
            this.login();
        } else {
            this.setState({ error: 'Please fill in both fields.' })
        }
        console.log(this.state);
    }

    render() {
        return (
            <div id="LoginContainer" className="inner-container">
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <p>Sign in or sign up by entering your email and password.</p>
                    <input
                        type="text"
                        onChange={this.handleEmailChange}
                        value={this.state.email}
                        placeholder="Your email" />
                    <input
                        type="password"
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                        placeholder="Your password" />
                    <p className="error">{this.state.error}</p>
                    <button className="red light" type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginContainer